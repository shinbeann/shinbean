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

- **`font-sans`** — Inter, system-ui, sans-serif (default on `body` via `@apply font-sans`)
- **`font-mono`** — Space Mono, Courier New, monospace
- **`font-serif`** — Source Serif 4, Crimson Text, Georgia, serif (e.g. `.prose`)

`tokens.css` duplicates these stacks as `--ds-font-sans`, `--ds-font-mono`, `--ds-font-serif` for raw CSS or documentation parity.

### Type scale (CSS variables on `:root`)

In `src/index.css`, under `:root`:

- `--text-xs` … `--text-3xl` — responsive long-form scale (comments describe px targets)
- Base headings `h1`–`h3` use these via `font-size: var(--text-*)`

### Tailwind `fontSize`

`tailwind.config.ts` → `theme.extend.fontSize` provides **`text-xs`** through **`text-7xl`** with line heights and letter spacing. Prefer these utilities in components for consistency.

### Case study editorial presets (`caseStudyTypography.ts`)

- **`caseStudyEditorialBodyClass`** — `font-serif text-[18px] md:text-[20px] leading-[1.6] max-w-[65ch]`
- **`caseStudyEditorialBodyStackClass`** — same as above + `space-y-7` for paragraph rhythm

Use these tokens in long-form sections (problem/solution/research/reflection) so future case studies inherit the same readability standard.

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
