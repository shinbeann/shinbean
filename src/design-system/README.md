# Design system

Single place for **reusable layout tokens**, **case study sidebar** styles, and pointers to **typography**, **spacing**, and **fonts** used across the portfolio.

## Contents

| File | Purpose |
|------|---------|
| `tokens.css` | CSS custom properties (`--ds-*`) for case study shell, TOC column width, scroll alignment |
| `tokens.ts` | Same numbers in TypeScript for `scrollTo`, `getBoundingClientRect` checks, etc. |
| `caseStudySidebar.ts` | Composed Tailwind class strings for the sticky “On this page” nav |
| `caseStudyTypography.ts` | Shared editorial typography presets for long-form case study copy |
| `index.ts` | Barrel re-exports |

Global **colors**, **shadcn-style HSL variables**, and **base heading/body rules** live in `src/index.css`. The **8px spacing scale** and **font size scale** are extended in `tailwind.config.ts`.

---

## Typography

### Fonts (Tailwind `font-*`)

Defined in `tailwind.config.ts` → `theme.extend.fontFamily`:

| Tailwind class | Primary font | Full stack | Loaded via Google Fonts? |
|---|---|---|---|
| `font-sans` (default) | **Inter** | Inter → system-ui → sans-serif | Yes — `index.html` |
| `font-mono` | **Space Mono** | Space Mono → Courier New → monospace | Yes — `index.html` |
| `font-serif` | **Source Serif 4** | Source Serif 4 → Georgia → serif | Yes — `index.html` |

Global default: `body` applies `font-sans` in `src/index.css`, so **Inter** is the site-wide base unless a component overrides it.

Google Fonts loads Inter (300–700), Space Mono (400, 700), and Source Serif 4 (400, 600, 700 + italic 400).

`tokens.css` duplicates these stacks as `--ds-font-sans`, `--ds-font-mono`, `--ds-font-serif` for raw CSS or documentation parity.

### Typography roles

| Role | Token | Font |
|---|---|---|
| Default UI | `font-sans` | Inter |
| Metadata / labels | `font-mono` | Space Mono |
| Case study long-form body | `font-serif` via `caseStudyEditorialBodyClass` | Source Serif 4 |

### Site font inventory (by page)

| Page / component | Font(s) | Notes |
|---|---|---|
| **Index** (`/`) | Inter | Hero, nav, project sections; section `h2`s use explicit `font-sans` |
| **Hero** | Inter | Inherits body; no override |
| **About** (`/about`) | Inter | Entire page |
| **NotFound** (404) | Inter | Default |
| **IntellipalCaseStudy** | Inter + Source Serif 4 | Dark shell; `text-intellipal-accent` accent on `#0d1526` |
| **FlowTutorCaseStudy** | Inter + Space Mono + Source Serif 4 | `font-mono` for metadata labels/badges; `font-serif` for editorial body and decorative numerals |
| **KidneyQuestCaseStudy** | Inter + Source Serif 4 | Shell `font-sans`; editorial body `font-serif` |
| **CaseStudy** (router) | Inter | Inherits `CaseStudyLayout` defaults |
| **Navigation / Footer / FloatingContactButton** | Inter | Shared chrome |
| **StackedCardCarousel** | Space Mono | Tags and captions (FlowTutor) |
| **KidneyQuestInteractiveDemo** | Inter | Inherits `font-sans` on demo overlay buttons |
| **shadcn UI** (`src/components/ui/*`) | Inter | Buttons, forms, dialogs |

### CSS-level typography rules (`src/index.css`)

- All `h1–h6` inherit **Inter** + bold weights from global base styles
- Case study editorial body uses **`caseStudyEditorialBodyClass`** from this design system (not a global `.prose` class)
- Body OpenType features: `font-feature-settings: 'cv11', 'ss01'` (Inter stylistic sets)

### Unique font families in use

1. **Inter** — primary UI, headings, hero, About, most case study chrome
2. **Space Mono** — FlowTutor metadata/labels, carousel tags
3. **Source Serif 4** — long-form case study body (`font-serif` / `caseStudyEditorialBodyClass`)
4. **Georgia** — system serif fallback
5. **system-ui / sans-serif / Courier New** — Tailwind fallback stacks only

### Type scale (CSS variables on `:root`)

In `src/index.css`, under `:root`:

- `--text-xs` … `--text-3xl` — responsive long-form scale (comments describe px targets)
- Base headings `h1`–`h3` use these via `font-size: var(--text-*)`

### Tailwind `fontSize`

`tailwind.config.ts` → `theme.extend.fontSize` provides **`text-xs`** through **`text-7xl`** with line heights and letter spacing. Prefer these utilities in components for consistency.

### Case study editorial presets (`caseStudyTypography.ts`)

- **`caseStudyEditorialBodyClass`** — `font-serif text-[18px] md:text-[20px] leading-[1.6] max-w-[65ch]`

Use this token in long-form sections (problem/solution/research/reflection) so future case studies inherit the same readability standard.

---

## Colors

### Global semantic tokens (`src/index.css` `:root`)

Site-wide UI uses shadcn-style HSL tokens (`--background`, `--foreground`, `--muted-foreground`, etc.). See `:root` in `src/index.css` for the full set.

### Case study surfaces

| Token | Hex | Tailwind | Role |
|---|---|---|---|
| `--surface-base` | `#0d1526` | `bg-surface-base` | Shared shell on [`CaseStudyLayout`](../components/CaseStudyLayout.tsx) — all case studies inherit this |
| `--intellipal-accent` | `#6EA8FF` | `text-intellipal-accent`, `bg-intellipal-accent/10` | Intellipal brand accent (7.56:1 on surface-base, WCAG AA/AAA) |

### Project accent tokens

| Token | Usage |
|---|---|
| `--kidneyquest-gold` | KidneyQuest highlights and table accents |
| `--kidneyquest-teal` | KidneyQuest demo buttons (teal gradient) |

### Intellipal dark theme (text on `surface-base`)

| Role | Classes |
|---|---|
| Accent | `text-intellipal-accent` |
| Body / editorial | `text-neutral-200` |
| Headings | `text-neutral-100` |
| Captions | `text-neutral-400` only (not 500/600 — fails AA at body size) |
| Pull-quote emphasis | `text-red-400` |
| Cards | `bg-white/5`, `border-white/10` |
| Selection | `selection:bg-intellipal-accent/30` |

### Follow-up (contrast fixes not in this pass)

- **FlowTutor** `text-neutral-600` on dark shell — 2.53:1, needs bump to `neutral-400`
- **NEST placeholder** copy on `surface-base` — revisit orange accent vs white-only text

---

## Spacing and padding

### 8px grid (Tailwind)

`tailwind.config.ts` → `theme.extend.spacing` maps `1` = 4px, `2` = 8px, `4` = 16px, `6` = 24px, `8` = 32px, `12` = 48px, `16` = 64px, etc.

### Semantic utilities (`index.css` `@layer components`)

- **`.section-spacing-y`** — `py-16 md:py-24 lg:py-32` for vertical section rhythm
- **`.content-spacing-y`** — `space-y-8` between stacked blocks
- **`.card-padding`** — `p-8` for card interiors

### `:root` spacing tokens (`index.css`)

Optional CSS variables: `--spacing-1` (8px) through `--spacing-16` (128px) for non-Tailwind CSS.

---

## Case study layout and side nav

`CaseStudyLayout` renders:

1. Top **site** `Navigation`
2. Optional full-width **hero**
3. A **grid**: left **TOC** (table of contents) + center **main** content

### CSS variables (`tokens.css`)

| Variable | Role |
|----------|------|
| `--ds-case-study-shell-max-width` | Outer wrapper max width (default 1600px) |
| `--ds-case-study-toc-width` | Left column width (default 240px) |
| `--ds-case-study-content-max-width` | Reference for main column reading measure (56rem) |
| `--ds-scroll-anchor-offset` | Pixels subtracted when scrolling to `#id` (nav clearance) |
| `--ds-active-section-threshold` | Viewport line for scroll-spy “active” section |
| `--ds-sidebar-reveal-threshold` | When the TOC fades in if `showSidebarsAfter` is set |

### TypeScript (`tokens.ts`)

`caseStudyLayout` exports the same numeric values for `handleScrollTo` and `useEffect` scroll listeners. **Keep `tokens.ts` and `tokens.css` in sync** when you change behavior.

### Sidebar class helpers (`caseStudySidebar.ts`)

- **`caseStudyTocNavClasses(visible)`** — sticky TOC container + show/hide transition
- **`caseStudyTocSectionLabelClass`** — “On this page” label
- **`caseStudyTocParentLinkClass(isDark, isActive)`** / **`caseStudyTocChildLinkClass`** — parent vs nested TOC rows
- **`caseStudyShellGridClass`** / **`caseStudyShellGridColsClass`** — shell wrapper + `md` grid columns

### Behavior notes

- **Sticky position** uses Tailwind `top-12` (3rem), aligned with `--ds-case-study-toc-sticky-top` in CSS.
- **`showSidebarsAfter`**: pass a section `id`; until that section’s top crosses the reveal threshold, the TOC is hidden (`opacity-0`, `pointer-events-none`).
- **Parent TOC items with `children`** toggle expand/collapse; only leaf items scroll on first click.

---

## Imports

```ts
import {
  caseStudyLayout,
  caseStudyTocNavClasses,
  caseStudyShellGridClass,
} from "@/design-system";
```

`src/index.css` loads tokens **first** (before `@tailwind`), which Vite requires:

```css
@import "./design-system/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Adding new tokens

1. Add a `--ds-*` variable in `tokens.css` with a short comment.
2. If JS needs the same value, add it to `tokens.ts` under `caseStudyLayout` or a new exported object.
3. Document the token in this README in the relevant section.
