# Usage in Vue

Vue templates are HTML with a few directives, so Kapwa components drop in
unchanged. Add Tailwind v4 and the `kapwa.css` tokens (see
[Getting started](/guides/getting-started)), then paste the markup into any
template.

## Banner

```vue
<script setup>
import { ref } from "vue";

const visible = ref(true);
</script>

<template>
  <div
    v-if="visible"
    class="relative flex justify-between rounded-lg p-4 border border-[var(--color-kapwa-border-warning)] bg-[var(--color-kapwa-bg-warning-weak)]"
  >
    <p class="text-sm text-[var(--color-kapwa-text-warning)]">
      Payment deadline approaching.
    </p>
    <button type="button" aria-label="Dismiss banner" @click="visible = false">
      …close icon…
    </button>
  </div>
</template>
```

## List (disclosure)

```vue
<script setup>
import { ref } from "vue";

const expanded = ref(false);
</script>

<template>
  <p
    id="desc"
    class="text-sm text-[var(--color-kapwa-text-support)]"
    :class="{ 'line-clamp-3': !expanded }"
  >
    …
  </p>
  <button
    type="button"
    :aria-expanded="expanded"
    aria-controls="desc"
    @click="expanded = !expanded"
  >
    <span>{{ expanded ? "Show less" : "Show more" }}</span>
    <svg
      class="h-4 w-4"
      :class="{ 'rotate-180': expanded }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</template>
```
