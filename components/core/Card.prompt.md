**Card** — the standard white, rounded container with a soft warm shadow that lifts on hover. Use for program tiers, research tracks, FAQ items, feature blocks.

```jsx
<Card>
  <h3 style={{ font: 'var(--type-card-title)', color: 'var(--text-strong)' }}>Core Research Mentorship</h3>
  <p style={{ color: 'var(--text-muted)' }}>14 weeks · 1:1 · from $3,500</p>
</Card>
```

Props: `hover` (default true), `padding`, `as`. Set `hover={false}` for static panels.
