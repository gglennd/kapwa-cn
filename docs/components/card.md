# Card

A container with optional **Header**, **Content**, **Image** and **Footer** parts,
plus a hoverable state for interactive listings.

## Card

<DemoBlock name="card" demo="card" />

## Card with image

<DemoBlock name="card" demo="card-image" />

## Usage

Compose the parts: a `<div role="article">` wrapper, a heading area clamped by a
bottom border, a content region, an optional image strip and an optional footer.

### Parts

| Part      | Classes                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------ |
| Card      | `overflow-hidden rounded-lg border border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface)] shadow-xs` |
| Hoverable | add `transition-all duration-300 hover:shadow-md hover:-translate-y-1`                                                   |
| Header    | `border-b border-[var(--color-kapwa-border-weak)] p-4 md:p-6`                                                            |
| Content   | `p-4 md:p-6`                                                                                                             |
| Image     | `relative h-48 w-full overflow-hidden` + `<img class="h-full w-full object-cover">`                                      |
| Footer    | `border-t border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface-raised)] p-4 md:p-6`                  |

## Framework notes

- **React** — identical markup with `class` → `className`. Extra HTML attributes pass through, so composition matches the React `Card`/`CardHeader`/`CardContent`/`CardFooter`/`CardImage` API one-to-one.
- **Vue / Svelte** — markup is valid as-is.
