# Input

A styled form text control. Use any native `type` — the component renders the
same element, so email, date, file, password and everything else just work.

<DemoBlock name="input" demo="default" />

## States

- **Disabled** — add `disabled`; the element gets `cursor-not-allowed` and reduced opacity automatically.
- **Focus** — the `focus-visible:ring-1 focus-visible:ring-[var(--color-kapwa-border-focus)]` utilities render the focus ring.
- **File** — `file:` utilities style the native file-button region.

## Framework notes

- **React** — identical JSX with `class` → `className`; forward `value`, `onChange`, `ref`, etc. as with any `<input>`.
- **Vue** — bind with `v-model` on the input as-is.
- **Svelte** — bind with `bind:value`.
