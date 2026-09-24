# StripBanner

A compact horizontal notification strip with a gradient background, emoji,
main/sub text, a pill CTA and a secondary link.

<DemoBlock name="strip-banner" demo="default" />

## Usage

On small screens the strip stacks vertically and hides the sub text
(`hidden md:inline`).

## Framework notes

- **React / Vue / Svelte** — pure anchors, no state. Markup drops into JSX (with `class` → `className` in React) or a Vue/Svelte template unchanged.
