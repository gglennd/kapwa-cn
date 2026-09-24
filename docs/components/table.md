# Table

Tabular data inside a Card, with status badges (Active / Pending / Inactive) and
a per-row action.

<DemoBlock name="table" demo="default" />

## Usage

Wrap the `<table>` in `overflow-x-auto` so wide tables scroll on small screens.
The header row uses `bg-[var(--color-kapwa-bg-surface-raised)]`; rows separate
with `divide-y divide-[var(--color-kapwa-border-weak)]`.

### Status badges

| Status   | Badge classes                                                                    |
| -------- | -------------------------------------------------------------------------------- |
| Active   | `bg-[var(--color-kapwa-bg-success-weak)] text-[var(--color-kapwa-text-success)]` |
| Pending  | `bg-[var(--color-kapwa-bg-warning-weak)] text-[var(--color-kapwa-text-warning)]` |
| Inactive | `bg-[var(--color-kapwa-bg-danger-weak)] text-[var(--color-kapwa-text-danger)]`   |

## Framework notes

- **React** — the markup is valid JSX after `class` → `className`. Map `tableData` to `<tr>`s from your data source; this is the full behavior of the React `Table` component.
- **Vue** — iterate with `v-for`; **Svelte** — with `{#each}`.
