# AGENTS.md

Vanilla Vite + TypeScript app hosting **kapwa-cn** — a framework-agnostic
component library of plain HTML + Tailwind snippets (ported from the React
`@bettergov/kapwa` design system), with a VitePress docs site. Interactivity
(banner dismiss, list disclosure) is deliberately left to the host framework's
native state — there is no behaviors runtime. DOM is written via string
`innerHTML` (gallery) and Vue templates (docs) — no JSX.

## Layout

- `src/components/<name>/<name>.html` — **canonical component snippets** (source
  of truth for Tailwind scanning; every docs page shows the preview + a `Code`
  fence with the same raw snippet).
- `src/styles/kapwa.css` — Kapwa design tokens (ported from the React lib;
  `@theme static` + `:root`/`.dark` semantic tokens).
- `src/styles/index.css` — Tailwind v4 entry (`@import "tailwindcss"`) +
  `@utility` typography presets. **`@source` directives here point Tailwind at
  `../components` and `../../docs`** — keep them, or utilities in snippets get
  purged.
- `src/main.ts` — demo gallery rendering all snippets via `?raw` imports +
  `innerHTML`; theme toggle flips `dark` on `<html>`. Static (no interactivity).
- `docs/` — VitePress site. `docs/.vitepress/theme/DemoBlock.vue` imports the
  snippets through `import.meta.glob("…/*.html", { query: "?raw", import: "default", eager: true })`
  for a preview-only render; component pages show the code as markdown fences.

## Toolchain

- Package manager is **pnpm** (pinned 11.24.0 via `packageManager` + `devEngines`). Never use npm/yarn.
- Commands:
  - `pnpm dev` — Vite demo gallery
  - `pnpm build` — `tsc && vite build` (typecheck step for `src/`)
  - `pnpm preview`
  - `pnpm dev:docs` — VitePress docs
  - `pnpm build:docs` — VitePress build (docs use their own bundled Vite 5 + `@tailwindcss/postcss`)
  - `pnpm lint` — `eslint`
- No test framework or test script exists.

## Lint / style

- ESLint is built on `@antfu/eslint-config`, but overridden from its defaults: **double quotes, semicolons, 2-space indent** (antfu default is single quotes, no semicolons).
- `eslint-plugin-format` handles formatting — there is no separate formatter and Prettier is disabled (`.vscode/settings.json`). Fix style via `pnpm lint --fix`.
- `perfectionist/sort-imports` is enforced; keep imports sorted.
- `unicorn/filename-case` enforced as **kebab-case** — name files like `my-thing.html`, not `myThing.html`.
- `noUnusedLocals`/`noUnusedParameters` are on; dead code fails the build.

## TypeScript quirks

- `erasableSyntaxOnly`: **no enums, namespaces, or parameter properties** (no runtime TS syntax).
- `verbatimModuleSyntax`: use `import type` for type-only imports.
- `allowImportingTsExtensions`: imports use explicit `.ts` extensions (e.g. `import { defineConfig } from "./config.ts"`).
- `tsconfig.json` covers `src/` only; `docs/tsconfig.json` covers the VitePress
  config + theme (it also declares `*.vue` and pulls `vite/client` types).

## Conventions for this codebase

- Component HTML snippets must stay **copy-pasteable plain HTML**: Tailwind v4
  utility classes + `var(--color-kapwa-*)` semantic tokens. No web components,
  no `<script>` tags, no framework-specific attributes in the canonical files.
- New components: create `src/components/<name>/<name>.html`, add a
  `docs/components/<name>.md` page using `<DemoBlock name="<name>" />`, and a
  gallery entry in `src/main.ts` if it should appear there.
- Adding a component often requires new token utilities only if the snippet
  introduces classes — confirm they appear in the built CSS under `dist/`.

## State of the repo

- kapwa-cn is the active project: 12 component snippets ported from React
  `@bettergov/kapwa`, VitePress docs with live preview + code fences, and a demo
  gallery. The upstream React library lives at `/home/glenn/BetterGov/kapwa`
  and is **kept untouched**.
