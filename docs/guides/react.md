# Usage in React

kapwa-cn is plain HTML, so it drops into JSX nearly verbatim. Two mechanical
differences to remember:

1. `class` → `className`
2. nothing else — attributes like `for`/`aria-controls` stay the same, and the
   inline SVGs render as-is.

Components that are purely presentational (Card, Table, StripBanner,
CivicTechBanner…) are copy-paste. Interactive ones map naturally to React state.

## Banners

The snippet is static. To make it dismissible, add a close button and local
state:

```tsx
function DismissibleBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="relative flex justify-between rounded-lg p-4 border border-[var(--color-kapwa-border-warning)] bg-[var(--color-kapwa-bg-warning-weak)]"
    >
      <p className="text-sm text-[var(--color-kapwa-text-warning)]">Payment deadline approaching.</p>
      <button type="button" aria-label="Dismiss banner" onClick={() => setVisible(false)}>
        …close icon…
      </button>
    </div>
  );
}
```

## Lists (disclosure)

Port the toggle to `useState`:

```tsx
const [expanded, setExpanded] = useState(false);

return (
  <>
    <p
      id="desc"
      className={cn("text-sm text-[var(--color-kapwa-text-support)]", !expanded && "line-clamp-3")}
    >
      …
    </p>
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls="desc"
      onClick={() => setExpanded(v => !v)}
    >
      <span>{expanded ? "Show less" : "Show more"}</span>
      <ChevronDown className={cn("h-4 w-4", expanded && "rotate-180")} />
    </button>
  </>
);
```

Reference: the React `@bettergov/kapwa` package is the canonical
implementation of every component in this collection. If you are using Tailwind
v4 you can consume it directly (`@bettergov/kapwa/kapwa.css`) and keep the
exact same token values.
