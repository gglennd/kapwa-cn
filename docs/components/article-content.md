# ArticleContent

Renders a structured article body: headings (`h1`–`h3`) and paragraphs styling
that follows the Kapwa type scale.

<DemoBlock name="article-content" demo="default" />

## Heading levels

| Level | Classes                       |
| ----- | ----------------------------- |
| `h1`  | `text-3xl font-bold mb-4`     |
| `h2`  | `text-2xl font-semibold mb-3` |
| `h3`  | `text-xl font-semibold mb-2`  |

## Framework notes

- **React** — map `{ type: "heading", level } | { type: "paragraph" }` sections to tags and classes (the `ArticleContent` component's exact behavior).
- **Vue / Svelte** — use dynamic components (`<component :is>` / `<svelte:component this>`) for the heading level.
