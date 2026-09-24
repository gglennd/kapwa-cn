<script setup lang="ts">
import { computed, ref } from "vue";

import kapwaCss from "../../../src/styles/kapwa.css?raw";

const props = withDefaults(
  defineProps<{
    raw?: string;
    label?: string;
  }>(),
  { raw: "", label: "kapwa.css" },
);

const content = computed(() => props.raw || kapwaCss);
const copied = ref(false);

function escapeText(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function highlightCssLine(line: string): string {
  const trimmed = line.trim();

  if (/^\/\*/.test(trimmed)) {
    return `<span class="tok-comment">${escapeText(line)}</span>`;
  }

  if (trimmed.startsWith("@")) {
    const exec = /^(\s*)(@[\w-]+)/.exec(line);

    if (exec) {
      return `${escapeText(exec[1])}<span class="tok-attr">${escapeText(exec[2])}</span>${escapeText(line.slice(exec[1].length + exec[2].length))}`;
    }
  }

  if (!trimmed.includes("{") && trimmed.includes(":")) {
    const colon = line.indexOf(":");

    if (/^\s*-[\w-]+$/.test(line.slice(0, colon))) {
      return `<span class="tok-attr">${escapeText(line.slice(0, colon + 1))}</span><span class="tok-value">${escapeText(line.slice(colon + 1))}</span>`;
    }
  }

  if (trimmed.includes("{")) {
    const brace = line.indexOf("{");

    return `<span class="tok-name">${escapeText(line.slice(0, brace))}</span><span class="tok-tag">${escapeText(line.slice(brace))}</span>`;
  }

  if (trimmed.startsWith("}") || trimmed.startsWith("]")) {
    return `<span class="tok-tag">${escapeText(line)}</span>`;
  }

  if (trimmed.length > 0) {
    return `<span class="tok-name">${escapeText(line)}</span>`;
  }

  return "";
}

const highlighted = computed(() =>
  content.value
    .split("\n")
    .map(highlightCssLine)
    .join("\n"),
);

async function copy(): Promise<void> {
  await navigator.clipboard?.writeText(content.value);

  copied.value = true;
  window.setTimeout(() => {
    copied.value = false;
  }, 1500);
}
</script>

<template>
  <div class="kapwa-copy">
    <div class="kapwa-copy__head">
      <span class="kapwa-copy__label">{{ label }}</span>
      <button
        type="button"
        class="kapwa-demo__copy"
        :class="{ 'kapwa-demo__copy--done': copied }"
        @click="copy"
      >
        {{ copied ? "✓ Copied" : "Copy" }}
      </button>
    </div>
    <pre class="kapwa-copy__block"><code v-html="highlighted" /></pre>
  </div>
</template>
