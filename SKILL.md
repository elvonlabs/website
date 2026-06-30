---
name: elvon-labs-design
description: Use this skill to generate well-branded interfaces and assets for Elvon Labs — a research lab and AI/computational-healthcare mentorship program — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Elvon Labs Design Skill

Read `readme.md` in this skill for the full brand guide (content voice, visual
foundations, iconography), then explore the other files.

**Quick orientation**
- **Tokens:** `styles.css` → `tokens/*.css`. Warm cream canvas (`#fcf9f4`),
  indigo primary (`#4b3ddb`), coral + sun accents, mint for success, warm-ink
  headings. Bricolage Grotesque display + Inter body. Rounded cards (24px),
  pill buttons, soft warm shadows, gentle bounce-lift on hover.
- **Components:** `components/` (React primitives). Mount via the compiled
  `_ds_bundle.js` and `window.ElvonLabsDesignSystem_d7be89`.
- **UI kit:** `ui_kits/website/` — full site recreation to copy from.
- **Assets:** `assets/logo/elvon-mark.svg`, `assets/icons/*.svg`.

**Voice in one line:** serious but warm, honest, methodology-first;
first-person-plural lab, direct "you" to the reader; sentence case; UPPERCASE
tags; never emoji; em-dash asides; real numbers only; encouraging without
ever over-promising.

**How to work**
- For **visual artifacts** (slides, mocks, throwaway prototypes): copy the
  assets and tokens you need and produce static HTML the user can open. Honor
  the warm cream canvas + indigo primary; use pastel section bands for rhythm;
  don't go back to a dark theme unless asked.
- For **production code:** read the rules here, reuse the token CSS and
  component patterns, and lift exact values from `tokens/` (or the source repo
  at https://github.com/elvonlabs/website).

If invoked with no specific brief, ask the user what they want to build, ask a
few focused questions (audience, surface, length, tone), then act as an expert
Elvon Labs designer who outputs HTML artifacts or production code as needed.
