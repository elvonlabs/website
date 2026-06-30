# Elvon Labs — Design System

A founder-led research **mentorship program** in AI and computational
healthcare. The brand is **warm, honest, and methodology-first** — a working
researcher talking to a serious student. "The paper is the by-product; the
thinking is the point."

The visual language is **bright, optimistic, and approachable** — a warm cream
canvas, a confident indigo primary, playful coral and sun accents, friendly
rounded shapes, and the characterful *Bricolage Grotesque* for headlines. It
takes inspiration from the student-facing research-mentorship category
(e.g. Polygence) while keeping Elvon's own identity: the indigo circuit-cube
mark and a real publication record behind every claim.

This design system encodes that language as tokens, components, and a full
mentorship landing page, so any new asset — a slide, a one-pager, an email —
looks unmistakably Elvon.

## Sources used to build this system

- **Live site / repo (structure & content seed):** https://elvonlabs.com/ ·
  https://github.com/elvonlabs/website — a single-page React + Tailwind site.
  The brand's content, icon set, and the circuit-cube mark come from here.
- **Program copy ("Stage 1 Launch Kit"):** the founder's program brief — offer
  tiers, landing-page copy, the 14-week curriculum, and the trust/ethics layer.
  This is the primary content source for the current (mentorship) direction.
- **Design inspiration:** https://www.polygence.org/ — the warm, friendly,
  student-mentorship aesthetic the user asked us to lean toward. We took the
  *spirit* (light, optimistic, rounded, approachable) — not its specific logo,
  colors, or proprietary elements.

> Direction note: the original repo presents a **dark research-lab** look; this
> system was deliberately evolved to a **warm, light, student-facing** look to
> match the mentorship program. The earlier dark palette lives in git history.

---

## CONTENT FUNDAMENTALS

**Voice — credible, warm, anti-hype.** The brand's defining move is *honesty as
a differentiator*. It refuses the over-promises common in the category ("We
never sell a guaranteed publication, because admissions officers and real
researchers can tell the difference — and so can you").

- **Person:** First-person plural for the lab ("**We** mentor students…"),
  direct second person to the reader ("…a method **you'll** use for the rest of
  **your** career"). Warm, encouraging, never condescending to younger students.
- **Tone:** Confident and specific, but friendly and reassuring. It steers a
  10th-grader toward the right first step rather than upselling.
- **Casing:** Sentence case for headings and body (the friendlier choice).
  Wordmark is `Elvon Labs` (not all-caps anymore — softer). Tags are UPPERCASE
  with wide tracking (`AI`, `14 WEEKS`).
- **Sentence rhythm:** Lead with the claim, then qualify. Short declaratives for
  impact ("Method over merit-badges."), longer sentences for nuance and care.
- **Numbers:** Real and concrete — `$499`, `14 weeks`, `634 citations`,
  `h-index 10`, `~5 hours/week`. Prices are prominent. No invented stats.
- **Emoji:** **Never.** Warmth comes from color, shape, and tone — not emoji.
- **Em dashes** are a signature for asides and honest qualifiers.
- **Vibe:** Generous and rigorous. Encouraging without ever over-promising.

### Voice examples (from the source)
- Hero: *"Learn to do real research — with a researcher who actually publishes."*
- Value prop: *"A real researcher, not a matchmaker."* · *"Method over merit-badges."*
- Honesty: *"Do you guarantee publication? No. … guarantees are a red flag."*
- To a student: *"As a rising sophomore, the best first step is often our Research Foundations Pod."*

---

## VISUAL FOUNDATIONS

**Overall feeling:** bright, optimistic, and welcoming — a warm paper canvas lit
by friendly color, with soft rounded cards that lift gently. Smart but never
cold; playful but never childish.

- **Color:** Light-first. The canvas is a warm cream **`#fcf9f4`**. The primary
  is a confident **indigo `#4b3ddb`** (carrying Elvon's blue DNA). Warmth comes
  from **coral `#ff6b57`** (secondary CTAs, highlights) and **sun `#ffb23e`**
  (playful accents), with **mint `#2fb592`** for success. Headings are a warm
  near-black **ink `#201b2b`**. Soft pastel **section bands** — lavender, peach,
  butter, mint — rotate to give the page rhythm. See `tokens/colors.css`.
- **Type:** Two families. **Bricolage Grotesque** (characterful, friendly,
  modern) for display and headings, tight tracking (`-0.02em`); **Inter** for
  body and UI at `1.6` line-height. Eyebrows are semibold uppercase in coral.
  See `tokens/typography.css`.
- **Spacing & layout:** 4px base grid. Generous section padding (`~88px`).
  Centered content (`720px` prose, `1120px` container).
- **Backgrounds:** Flat warm cream, banded with soft pastel sections for rhythm,
  plus occasional **warm glow blobs** (indigo + coral + sun, heavily blurred,
  low opacity) behind the hero. The Apply band and footer invert to a dark
  **ink** panel for contrast. No busy patterns; let the color bands do the work.
- **Corners & cards:** Rounder and friendlier — cards are `24px` radius
  (`--radius-lg`), inputs `16px`. Cards are **white with a soft warm-tinted
  shadow** that deepens and **lifts (`translateY(-3px)`)** on hover. Buttons and
  tags are full pills.
- **Shadows:** Soft and warm-tinted (`rgba(33,28,43,…)`), never harsh. A
  two-layer `--shadow-card` is the default; hovered primary CTAs get an
  indigo-tinted `--shadow-glow`.
- **Animation:** Friendly and quick. Default `240ms`; CTAs and cards use a gentle
  **bounce** (`cubic-bezier(0.34,1.56,0.64,1)`) for the hover lift. No flashy or
  infinite motion.
- **Hover / press:** Buttons darken and **lift**; soft buttons tint deeper; cards
  lift with a deeper shadow; links shift to indigo. Emphasis is color + gentle
  elevation.
- **Focus:** A `3px` indigo-300 ring on form fields.

---

## ICONOGRAPHY

- **Style:** A **single-color outline icon set** — 24×24 viewBox, `1.5–2px`
  stroke, round caps and joins, `currentColor` fill. Heroicons-style line glyphs
  lifted from the site's own components.
- **Where used:** research-domain markers (AI, Healthcare, Quantum, Telecom, CS,
  Robotics), list checks, the trailing CTA arrow, and the **logo mark** — a
  "circuit cube" (hexagon/cube with radiating circuit lines), always in
  **indigo `#4b3ddb`**. On warm pastel tiles, icons take the tile's accent ink.
- **Implementation:** the bundled **`Icon`** component (`name` prop, inherits
  `currentColor`). Raw SVGs live in `assets/icons/`; logo in
  `assets/logo/elvon-mark.svg`.
- **No emoji. No unicode-glyph icons. No multi-color/filled icon styles.**
- **Extending:** match the 24×24, 1.5–2px stroke, round-join outline style;
  Heroicons (outline) is the nearest CDN set.

---

## Font note

Both fonts — **Inter** and **Bricolage Grotesque** — are open Google fonts, so
no substitution was needed; they're imported in `tokens/fonts.css`. There are no
self-hosted binaries; to use offline, self-host both and add `@font-face` rules
to that file.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point (an `@import` manifest). Link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `fonts.css`.
- `assets/` — `logo/elvon-mark.svg`, `icons/*.svg`.
- `cards/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable React primitives (below).
- `ui_kits/website/` — the warm mentorship landing page.
- `SKILL.md` — Agent-Skills entry point.

**Components** (`window.ElvonLabsDesignSystem_d7be89`)
- *core/* — `Button`, `Tag`, `Badge`, `Card`, `StatCard`, `Logo`, `Icon`
- *forms/* — `Input`, `Textarea`, `Select`, `CheckboxCard`
- *layout/* — `NavBar`, `SectionHeading`

**UI kits**
- *website/* — `index.html` (interactive landing page: hero, differentiators,
  program tiers, the Elvon method, founder, FAQ accordion, apply form, footer)
  composed from `App.jsx`.

> To consume in HTML: link `styles.css`, load `_ds_bundle.js` (auto-generated),
> then `const { Button } = window.ElvonLabsDesignSystem_d7be89`.
