# List

A categorized list inside a Card. Each item has a title, a category badge and
an optional "Apply online" action.

<DemoBlock name="list" demo="default" />

## Framework notes

The snippet is static. The React `List` component supports collapsible
descriptions — port that with your framework's state:

- **React** — `useState` toggling `line-clamp-3` / `line-clamp-none`, `aria-expanded`, the label text and a rotated chevron.
- **Vue** — track expansion in `ref` and bind `:class`, `:aria-expanded` and the label with interpolation.
- **Svelte** — track expansion in a variable and bind the same pieces.
