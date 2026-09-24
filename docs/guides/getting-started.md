# Getting started

kapwa-cn components are **plain HTML + Tailwind CSS**. There is no package to
install and no build step required — you copy a snippet and paste it wherever
you write HTML.

This repository is a Vite + TypeScript app that contains the component markup
under `src/components/`, the design tokens under `src/styles/`, and this
documentation site.

## Using the components in a project

1. **Bring in the design tokens.** Copy `src/styles/kapwa.css` from this repo
   into your project and feed it to Tailwind v4. The entire token file is
   below — expand it if needed and use the copy button:

   <CopyCode label="kapwa.css" />

   In your styles entry, import Tailwind and the tokens. Kapwa components
   style themselves through CSS custom properties
   (`--color-kapwa-bg-brand-default`, `--color-kapwa-text-strong`, …), so the
   tokens file is all you need:

   ```css
   /* your-styles.css */
   @import "tailwindcss";
   @import "./kapwa.css";
   ```

   With Vite that is usually all it takes:

   ```ts
   // vite.config.ts
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [tailwindcss()],
   });
   ```

2. **Copy a snippet.** Any page under _Components_ shows the live preview with
   the HTML below it — open **View code** and copy exactly what you need.

## Design tokens

All components style themselves from CSS custom properties defined in
`kapwa.css`. Because every color, border, spacing and duration is a token,
components automatically adapt to theming, dark mode, and content requirements
without touching the markup.

Tokens are declared in two layers, matching the React design system.

### Primitive tokens

`@theme static` in `kapwa.css` feeds Tailwind v4, generating utilities like
`bg-kapwa-brand-600`, `text-kapwa-orange-500`, `shadow-md`,
`ease-kapwa-out`, `font-kapwa-sans` and `spacing-kapwa-md`:

- **Brand:** `kapwa-brand-50…950`
- **Primitives:** `kapwa-red-*`, `kapwa-green-*`, `kapwa-blue-*`, `kapwa-orange-*`, `kapwa-yellow-*`, `kapwa-purple-*`, `kapwa-gray-*`, `kapwa-neutral-*`
- **Motion:** `--duration-kapwa-75…1000`, `--ease-kapwa-*`
- **Spacing:** `--spacing-kapwa-3xs…3xl`
- **Typography:** `--font-kapwa-sans` (Inter), `--font-kapwa-mono` (Roboto Mono)
- **Shadows:** `--shadow-xs/sm/base/md/lg`

### Semantic tokens

`:root` (light) and `.dark` / `[data-theme="dark"]` (dark) blocks re-map
semantic tokens onto the primitives:

- **Text:** `--color-kapwa-text-{strong,support,disabled,inverse,link,brand,success,danger,warning,info,…}`
- **Backgrounds:** `--color-kapwa-bg-{surface,surface-raised,brand-default,hover,active,disabled,gray-*,brand-*,info-*,danger-*,warning-*,success-*,accent-*}`
- **Borders:** `--color-kapwa-border-{strong,weak,inverse,focus,brand,success,danger,warning,info}`

Components reference the semantic tokens directly, for example:

```html
<button class="inline-flex items-center rounded-md bg-[var(--color-kapwa-bg-brand-default)] px-4 py-2 text-white">
  Submit
</button>
```

UI fragments use arbitrary-value notation (`bg-[var(--…)]`) so they work in
any project, even one not consuming the full Kapwa theme.

### Typography utilities

`src/styles/index.css` defines composed `@utility` presets used by the
components: `kapwa-heading-{xl,lg,md,sm}`, `kapwa-body-*`,
`kapwa-label-*`, `kapwa-code-*`, `kapwa-input`, `kapwa-link-*`,
`kapwa-sans` / `kapwa-mono`, plus `animate-fade-in` / `animate-slide-in`.

### Dark mode

The tokens include a full dark theme. Add the `dark` class (or
`data-theme="dark"`) to `<html>` and all components re-map automatically:

```html
<html lang="en" class="dark"></html>
```

Tailwind v4's `@custom-variant dark (&:is(.dark *))` in `index.css` also lets
you write `dark:` variants alongside the semantic tokens.

## Frameworks

Because every component is native HTML, it works in React JSX, Vue templates,
Svelte, Angular, and static pages. The few differences per framework are noted
on each component page and summarized in:

- [Usage in React](/guides/react)
- [Usage in Vue](/guides/vue)
- [Usage in Svelte](/guides/svelte)
