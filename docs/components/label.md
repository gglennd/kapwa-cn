# Label

A form label using the `kapwa-label-*` typography utilities. Pair it with any
control via `for`/`id`, or wrap the control inside the label.

<DemoBlock name="label" demo="default" />

## Sizes

| Utility          | Use                        |
| ---------------- | -------------------------- |
| `kapwa-label-lg` | Section headings in forms  |
| `kapwa-label-md` | Default field labels       |
| `kapwa-label-sm` | Compact labels, side notes |
| `kapwa-label-xs` | Micro labels, badges       |

## Framework notes

- **React** — the Kapwa design system's `Label` is built on Radix, but for plain HTML a native `<label>` is behaviorally identical (click = focus the field). Use `htmlFor` instead of `for`.
- **Vue / Svelte** — native `<label>` works as-is.
