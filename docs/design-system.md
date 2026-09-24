# Sam-Olayemi — design system

Minimal, cinematic, editorial. Use these tokens and primitives instead of new values.

## Colour (`src/app/globals.css`)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `background` | `#fbfaf7` warm white | `#0b0b0b` | Page |
| `card` | `#ffffff` | `#1a1a1a` | Raised panels (form, explorer detail) |
| `surface` | `#f2f1ed` soft grey | `#141414` | Alternating sections |
| `foreground` | `#111111` | `#f5f5f7` | Text, primary buttons |
| `muted-foreground` | `#636368` | `#a1a1a6` | Secondary text, 4.5:1+ on every surface |
| `accent` | `#e8501e` | `#ff7a45` | Display type, rules, dots. 3.6:1 on warm white, so large text only |
| `accent-foreground` | `#c2410c` | `#ff7a45` | Small accent text and links |
| `inverse` | `#0b0b0b` | `#000000` | The dark cinematic sections in both themes |

Dark mode follows `data-theme` on `<html>`, set before paint from the saved choice or the
system setting. Never dim content text with opacity: use `muted-foreground`.

## Type

Geist for everything, Geist Mono for small uppercase labels. Scale utilities:
`text-giant` (viewport-filling statements), `text-mega`, `text-display`, `text-headline`.
Body stays 16–20px. Form fields are 16px so iOS doesn't zoom.

## Layout

`--page-px` 16 → 56px, `--section-y` 72 → 152px, `--page-max` 1440px, `--header-h` 64/76px.
Sections are editorial 12-column grids: a label in columns 1–3, content from column 4.

## Motion

- Above the fold: CSS `animate-line` / `animate-rise`, so the LCP never waits for JavaScript.
- Below the fold: `<Reveal>` (IntersectionObserver + CSS).
- Scroll scenes: `useScrollProgress` writes `--p` (0–1) to the element and CSS does the rest
  (convergence), or React picks the active scene (scroll story).
- Sequences that light as you read: `useActiveIndex` (brand journey, process).
- `prefers-reduced-motion` stops loops and holds the convergence on its final frame.
- Never put `backdrop-filter`, `transform` or `filter` on an ancestor of a fixed element
  (the mobile menu). The header's blur sits on its own layer for this reason.

## Content rules

- No invented clients, testimonials, statistics, awards, team members or results.
  Work items without a client are `kind: "capability"` and are labelled as such.
- One primary action everywhere: **Start a project** → `/contact#start`.
- Say each thing once per screen.
