# Button

An interactive element styled with the Kapwa tokens. Five variants, three sizes,
loading and disabled states, and optional icons.

## Variants

<DemoBlock name="button" demo="variants" />

## Sizes

<DemoBlock name="button" demo="sizes" />

## States

<DemoBlock name="button" demo="states" />

## Usage

Use a native `<button>` (or `<a>` when navigating). Pick a variant class set for
`primary`, `secondary`, `outline`, `ghost` or `link`, and a size set for
`sm`, `md` or `lg`.

### Variant classes

| Variant     | Classes                                                                                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `primary`   | `bg-[var(--color-kapwa-bg-brand-default)] text-[var(--color-kapwa-text-inverse)] hover:bg-[var(--color-kapwa-bg-brand-hover)] active:bg-[var(--color-kapwa-bg-brand-active)]` |
| `secondary` | `bg-[var(--color-kapwa-bg-gray-default)] text-[var(--color-kapwa-text-strong)] hover:bg-[var(--color-kapwa-bg-gray-hover)] active:bg-[var(--color-kapwa-bg-gray-active)]`     |
| `outline`   | `border border-[var(--color-kapwa-border-strong)] bg-transparent text-[var(--color-kapwa-text-support)] hover:bg-[var(--color-kapwa-bg-gray-default)]`                        |
| `ghost`     | `bg-transparent text-[var(--color-kapwa-text-support)] hover:bg-[var(--color-kapwa-bg-gray-default)]`                                                                         |
| `link`      | `h-auto bg-transparent p-0 text-[var(--color-kapwa-text-link)] hover:text-[var(--color-kapwa-text-link-hover)] hover:underline`                                               |

### Size classes

| Size | Classes                    |
| ---- | -------------------------- |
| `sm` | `text-sm px-3 py-1.5 h-8`  |
| `md` | `text-base px-4 py-2 h-10` |
| `lg` | `text-lg px-6 py-3 h-12`   |

### State classes

- **Disabled** — add `disabled` plus `opacity-60 cursor-not-allowed`.
- **Loading** — add `disabled` plus `opacity-60 cursor-not-allowed` and render the rotating spinner SVG inside.
- **Focus ring** — keep `focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-kapwa-border-focus)]` on every button.

## Framework notes

- **React** — the same markup is valid JSX. Rename every `class` to `className`. For interactive handlers use `onClick` and control load/disabled state with props.
- **Vue** — markup is valid as-is. Bind handlers with `@click`, dynamic classes with `:class`.
- **Svelte** — markup is valid as-is. Bind handlers with `on:click` (or `onclick` in Svelte 5).
