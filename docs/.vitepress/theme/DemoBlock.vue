<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    demo?: string;
    demos?: string;
    align?: "start" | "center";
  }>(),
  { demo: "", demos: "", align: "center" },
);

interface DemoGroup {
  id: string;
  html: string;
}

const rawModules = import.meta.glob("../../../src/components/*/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const raw = computed(
  () =>
    rawModules[
      `../../../src/components/${props.name}/${props.name}.html`
    ] ?? "",
);

const requested = computed(() => {
  const ids = [...props.demo.split(","), ...props.demos.split(",")]
    .map(id => id.trim())
    .filter(Boolean);

  return new Set(ids);
});

const groups = computed<DemoGroup[]>(() => {
  const source = raw.value;
  const list: DemoGroup[] = [];
  const pattern = /<section data-demo="([a-z0-9-]+)"[^>]*>([\s\S]*?)<\/section>/g;
  let match: RegExpExecArray | null = pattern.exec(source);

  while (match) {
    const id = match[1];

    if (requested.value.size > 0 && !requested.value.has(id)) {
      match = pattern.exec(source);
      continue;
    }

    list.push({ id, html: match[2].trim() });
    match = pattern.exec(source);
  }

  return list;
});

const open = reactive<Record<string, boolean>>({});
const copiedId = ref<string | null>(null);

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const TAG_PATTERN = /<\/?[a-z][^>]*>/gi;
const COMMENT_PATTERN = /<!--[\s\S]*?-->/g;

function highlightTag(tag: string): string {
  const close = /^<\//.test(tag);
  const selfClose = /\/>$/.test(tag);
  const openTag = tag.slice(1, selfClose ? -2 : -1);
  const inner = close ? openTag.slice(1) : openTag;

  const pieces: string[] = [close ? "&lt;/" : "&lt;"];
  const name = /^[a-z][\w:.-]*/i.exec(inner)?.[0] ?? "";

  pieces.push(`<span class="tok-name">${escapeHtml(name)}</span>`);

  const rest = inner.slice(name.length).trim();
  const attrPattern = /([a-z][\w:.-]*)(?:=("([^"]*)"|'([^']*)'))?/gi;
  const attrs: string[] = [];
  let a: RegExpExecArray | null = attrPattern.exec(rest);

  while (a) {
    if (a[1]) {
      attrs.push(`<span class="tok-attr">${escapeHtml(a[1])}</span>`);
    }
    if (a[2]) {
      const quote = a[2].charAt(0);
      attrs.push("=");
      attrs.push(`<span class="tok-value">${quote}${escapeHtml(a[3] ?? a[4])}${quote}</span>`);
    }
    a = attrPattern.exec(rest);
  }

  if (attrs.length > 0) {
    pieces.push(" ", attrs.join(" "));
  }

  pieces.push(selfClose ? "/&gt;" : "&gt;");

  return pieces.join("");
}

function highlight(source: string): string {
  let out = "";
  let cursor = 0;

  const tokens: Array<{ start: number; end: number; kind: "tag" | "comment"; raw: string }> = [];

  COMMENT_PATTERN.lastIndex = 0;
  let comment: RegExpExecArray | null = COMMENT_PATTERN.exec(source);

  while (comment) {
    tokens.push({ start: comment.index, end: comment.index + comment[0].length, kind: "comment", raw: comment[0] });
    comment = COMMENT_PATTERN.exec(source);
  }

  TAG_PATTERN.lastIndex = 0;
  let tag: RegExpExecArray | null = TAG_PATTERN.exec(source);

  while (tag) {
    tokens.push({ start: tag.index, end: tag.index + tag[0].length, kind: "tag", raw: tag[0] });
    tag = TAG_PATTERN.exec(source);
  }

  tokens.sort((x, y) => x.start - y.start);

  for (const token of tokens) {
    if (token.start < cursor) {
      continue;
    }
    out += escapeHtml(source.slice(cursor, token.start));
    out += token.kind === "comment"
      ? `<span class="tok-comment">${escapeHtml(token.raw)}</span>`
      : `<span class="tok-tag">${highlightTag(token.raw)}</span>`;
    cursor = token.end;
  }

  out += escapeHtml(source.slice(cursor));
  return out;
}

function toggle(id: string): void {
  open[id] = !open[id];
}

function copy(id: string, html: string): void {
  void navigator.clipboard?.writeText(html);

  copiedId.value = id;
  window.setTimeout(() => {
    if (copiedId.value === id) {
      copiedId.value = null;
    }
  }, 1500);
}
</script>

<template>
  <div class="kapwa-demo">
    <div
      v-for="group in groups"
      :key="group.id"
      class="kapwa-demo__card"
    >
      <div
        class="kapwa-demo__preview"
        :class="align === 'start' ? 'kapwa-demo__preview--start' : 'kapwa-demo__preview--center'"
      >
        <div class="kapwa-demo__stage" v-html="group.html" />
      </div>

      <div
        class="kapwa-demo__code"
        :class="{ 'kapwa-demo__code--open': open[group.id] }"
      >
        <div class="kapwa-demo__code-head">
          <span class="kapwa-demo__code-label">HTML</span>
          <button
            type="button"
            class="kapwa-demo__copy"
            :class="{ 'kapwa-demo__copy--done': copiedId === group.id }"
            @click="copy(group.id, group.html)"
          >
            {{ copiedId === group.id ? "✓ Copied" : "Copy" }}
          </button>
        </div>
        <pre class="kapwa-demo__code-block"><code v-html="highlight(group.html)" /></pre>
      </div>

      <div class="kapwa-demo__footer">
        <button
          type="button"
          class="kapwa-demo__toggle"
          @click="toggle(group.id)"
        >
          {{ open[group.id] ? "Hide code" : "View code" }}
        </button>
      </div>
    </div>
  </div>
</template>
