# Sam-Olayemi — design system

Editorial + technology: warm paper, ink, one vermilion accent, expressive display type.
Use these tokens and primitives instead of new values.

## Colour (`src/app/globals.css`)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `background` | `#f4f1ea` warm paper | `#0e0e0d` | Page |
| `card` | `#fbf9f4` | `#1a1a18` | Raised panels (form, explorer detail) |
| `surface` | `#ebe6db` | `#151513` | Alternating sections |
| `foreground` | `#121211` ink | `#f1ede4` | Text, primary buttons |
| `muted-foreground` | `#5d5a52` | `#a39f94` | Secondary text, 4.5:1+ on every surface |
| `accent` | `#e2461f` vermilion | `#ff6a3d` | Display type, rules, dots. 3.6:1 on paper, so large text only |
| `accent-foreground` | `#b23a17` | `#ff6a3d` | Small accent text and links |
| `inverse` | `#121211` | `#1a1a18` | The dark sections in both themes |

Dark mode follows `data-theme` on `<html>`, set before paint from the saved choice or the
system setting. Never dim content text with opacity: use `muted-foreground`.

## Type

Bricolage Grotesque for display (`font-display`), Geist for body, Geist Mono for small
uppercase labels. Buttons are uppercase with wide tracking. Scale utilities:
`text-giant` (viewport-filling statements), `text-mega`, `text-display`, `text-headline`.
Body stays 16–20px. Form fields are 16px so iOS doesn't zoom.

## Layout

`--page-px` 16 → 56px, `--section-y` 72 → 152px, `--page-max` 1440px, `--header-h` 64/76px.
Sections are editorial 12-column grids: a label in columns 1–3, content from column 4.

## Motion

- Above the fold: CSS `animate-line` / `animate-rise`, so the LCP never waits for JavaScript.
- Below the fold: `<Reveal>` (IntersectionObserver + CSS).
- Hero: the Brand → Communication → Technology nodes light in turn (`node-cycle`) while a
  pulse runs along each connector (`.flow-line`); a CSS marquee lists capabilities.
- Scroll story: `useScrollProgress` tracks progress through the sticky section and React
  picks the active scene.
- Sequences that light as you read: `useActiveIndex` (process timeline).
- `prefers-reduced-motion` stops the loops, the marquee and the connector pulses.
- Never put `backdrop-filter`, `transform` or `filter` on an ancestor of a fixed element
  (the mobile menu). The header's blur sits on its own layer for this reason.

## Content rules

- No invented clients, testimonials, statistics, awards, team members or results.
  Work items without a client are `kind: "capability"` and are labelled as such.
- One primary action everywhere: **Start a project** → `/contact#start`.
- Say each thing once per screen.
