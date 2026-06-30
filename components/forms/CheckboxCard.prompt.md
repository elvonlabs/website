**CheckboxCard** — a checkbox in a bordered tile that lights blue when checked. Use for multi-select option grids like "Areas of interest".

```jsx
<CheckboxCard label="Artificial Intelligence" checked={sel.includes('ai')} onChange={toggle} />
```

Lay several in a `display:grid; grid-template-columns:1fr 1fr; gap:12px`.
