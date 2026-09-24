# Usage in Svelte

Svelte components are HTML-plus, so Kapwa markup works verbatim. Add Tailwind
v4 and the `kapwa.css` tokens (see [Getting started](/guides/getting-started)),
then paste the snippets into `.svelte` files.

## Banner

```svelte
<script>
  let visible = true;
</script>

{#if visible}
  <div
    class="relative flex justify-between rounded-lg p-4 border border-[var(--color-kapwa-border-warning)] bg-[var(--color-kapwa-bg-warning-weak)]"
  >
    <p class="text-sm text-[var(--color-kapwa-text-warning)]">Payment deadline approaching.</p>
    <button type="button" aria-label="Dismiss banner" onclick={() => (visible = false)}>
      …close icon…
    </button>
  </div>
{/if}
```

## List (disclosure)

```svelte
<script>
  let expanded = false;
</script>

<p
  id="desc"
  class="text-sm text-[var(--color-kapwa-text-support)]"
  class:line-clamp-3={!expanded}
>
  …
</p>
<button
  type="button"
  aria-expanded={expanded}
  aria-controls="desc"
  onclick={() => (expanded = !expanded)}
>
  <span>{expanded ? "Show less" : "Show more"}</span>
  <svg
    class="h-4 w-4"
    class:rotate-180={expanded}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
</button>
```
