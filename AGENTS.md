# AGENTS.md

Vanilla Vite + TypeScript app (no framework). Entry point: `index.html` → `src/main.ts`; DOM is written via string `innerHTML`, not JSX.

## Toolchain

- Package manager is **pnpm** (pinned 11.24.0 via `packageManager` + `devEngines`). Never use npm/yarn.
- Commands:
  - `pnpm dev` — Vite dev server
  - `pnpm build` — `tsc && vite build` (build is the typecheck step too)
  - `pnpm preview`
  - `pnpm lint` — `eslint`
- No test framework or test script exists.

## Lint / style

- ESLint is built on `@antfu/eslint-config`, but overridden from its defaults: **double quotes, semicolons, 2-space indent** (antfu default is single quotes, no semicolons).
- `eslint-plugin-format` handles formatting — there is no separate formatter and Prettier is disabled (`.vscode/settings.json`). Fix style via `pnpm lint --fix`.
- `perfectionist/sort-imports` is enforced; keep imports sorted.
- `unicorn/filename-case` enforced as **kebab-case** — name files like `my-thing.ts`, not `myThing.ts`.
- `noUnusedLocals`/`noUnusedParameters` are on; dead code fails the build.

## TypeScript quirks

- `erasableSyntaxOnly`: **no enums, namespaces, or parameter properties** (no runtime TS syntax).
- `verbatimModuleSyntax`: use `import type` for type-only imports.
- `allowImportingTsExtensions`: imports use explicit `.ts` extensions (e.g. `import { setupCounter } from "./counter.ts"`).

## State of the repo

- Still the unmodified Vite starter template (`counter.ts`, placeholder landing page, `index.html` title `vite-project`). Git repo has no commits yet and no remote.
