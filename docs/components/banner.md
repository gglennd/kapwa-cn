# Banner

A contextual notification with five tones (`default`, `info`, `success`, `warning`, `error`),
an optional icon and optional CTA buttons.

## Tones

<DemoBlock name="banner" demo="default,info,success,warning,error" />

## With CTA

<DemoBlock name="banner" demo="cta" />

## Tone reference

| Tone      | Container                                                                                   | Text / icon color                                                                  |
| --------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `default` | `border border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface-raised)]`  | `text-[var(--color-kapwa-text-strong)]` / `text-[var(--color-kapwa-text-support)]` |
| `info`    | `border border-[var(--color-kapwa-border-info)] bg-[var(--color-kapwa-bg-info-weak)]`       | `text-[var(--color-kapwa-text-info)]`                                              |
| `success` | `border border-[var(--color-kapwa-border-success)] bg-[var(--color-kapwa-bg-success-weak)]` | `text-[var(--color-kapwa-text-success)]`                                           |
| `warning` | `border border-[var(--color-kapwa-border-warning)] bg-[var(--color-kapwa-bg-warning-weak)]` | `text-[var(--color-kapwa-text-warning)]`                                           |
| `error`   | `border border-[var(--color-kapwa-border-danger)] bg-[var(--color-kapwa-bg-danger-weak)]`   | `text-[var(--color-kapwa-text-danger)]`                                            |

## Framework notes

The markup is static. To dismiss a banner, use your framework's native state:

- **React** — keep a `visible` flag and `onClick={() => setVisible(false)}`, rendering nothing (or animating out) when hidden.
- **Vue** — `v-if="visible"` and `@click="visible = false"`.
- **Svelte** — `{#if visible}` and `on:click={() => (visible = false)}`.
