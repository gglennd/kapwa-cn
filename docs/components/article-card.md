# ArticleCard

A news or article card built from the Card parts. Two layouts: a standard card
with a category badge and a "Read More" link, and an overlay card that places
text over the image with a gradient scrim.

## Standard

<DemoBlock name="article-card" demo="standard" />

## Overlay

<DemoBlock name="article-card" demo="overlay" />

## Usage

Overlay layout: position the image in a `relative` wrapper and place the caption
inside `absolute inset-0 bg-linear-to-t from-black/75 to-transparent flex items-end p-6`.

## Framework notes

- **React** — identical with `class` → `className`; the `hasOverlay` prop selects which branch to render.
- **Vue / Svelte** — markup as-is; choose layout with `v-if` / `{#if}` on `article.hasOverlay`.
