# kapwa-cn

Plain HTML + Tailwind components for Philippine government portals. A framework-agnostic port of the [Kapwa](https://github.com/bettergovph/kapwa) design system from BetterGov Philippines — copy a snippet, paste it, done. No build step, no framework lock-in, no custom elements.

## What you get

- **Copy-paste snippets** — every component is a self-contained `.html` file styled with the Kapwa design tokens. See the live preview, expand the markup, copy what you need.
- **Framework-native** — interactivity (banner dismiss, list disclosure) stays in your host framework's own state. The markup never leaves plain HTML.
- **Kapwa tokens** — one `kapwa.css` token file covers semantic colors, borders, spacing, motion, typography and dark mode, so visuals match the React design system everywhere.

## Quick start

1. Copy [`src/styles/kapwa.css`](src/styles/kapwa.css) into your project and feed it to Tailwind v4:

   ```css
   /* your-styles.css */
   @import "tailwindcss";
   @import "./kapwa.css";
   ```

2. Pick a component (`src/components/`), copy its markup, paste it.

3. Add interactivity in your framework of choice — React `useState`, Vue `ref`, Svelte variables.

## Components

| Component                          | Description                                             |
| ---------------------------------- | ------------------------------------------------------- |
| `button`                           | Five variants, three sizes, loading and disabled states |
| `card`                             | Container with header, content, image and footer parts  |
| `banner`                           | Contextual notification tones with optional CTA         |
| `input`                            | Form text controls                                      |
| `label`                            | Form labels and helpers                                 |
| `list`                             | Categorized items with action links                     |
| `table`                            | Tabular data with status badges                         |
| `article-card` / `article-content` | News cards and structured article bodies                |
| `official-biography`               | Official profile page                                   |
| `strip-banner`                     | Compact notification strip                              |
| `civic-tech-banner`                | Large campaign banner                                   |

## Development

```sh
pnpm install
pnpm dev        # demo gallery
pnpm build      # typecheck + build gallery
pnpm dev:docs   # VitePress docs site
pnpm build:docs # build docs site
pnpm lint       # eslint
```

Requires [pnpm](https://pnpm.io/), pinned to `11.24.0`.

## Docs

Component pages live under `docs/components/`, guides under `docs/guides/`. Each component page shows a live preview plus the raw snippet to copy.

## Acknowledgments

Built on top of the [Kapwa design system](https://github.com/bettergovph/kapwa) from BetterGov Philippines. Design tokens, component patterns and visual language are theirs; this repository only converts the markup to framework-agnostic HTML.

## License

[CC0-1.0](LICENSE.md)
