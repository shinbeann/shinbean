/**
 * TypeScript mirrors of layout tokens used in scroll logic and inline styles.
 * CSS equivalents: src/design-system/tokens.css
 * @see src/design-system/README.md
 */

export const caseStudyLayout = {
  /** Max width of the case study grid wrapper (px). */
  shellMaxWidthPx: 1600,
  /** Left column width for the table of contents (px). */
  tocWidthPx: 240,
  /** `scrollTo` offset so headings sit below the fixed nav. */
  scrollAnchorOffsetPx: 140,
  /** Section is "active" when its top crosses this viewport line from the top. */
  activeSectionThresholdPx: 150,
  /** TOC sidebar fades in when trigger section top is above this line. */
  sidebarRevealThresholdPx: 200,
} as const;

export type CaseStudyLayoutTokenKey = keyof typeof caseStudyLayout;
