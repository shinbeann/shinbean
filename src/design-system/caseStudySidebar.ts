import { cn } from "@/lib/utils";

/**
 * Reusable class fragments for the case study in-page TOC (left column).
 * Used by CaseStudyLayout; document changes here and in README.
 */

export function caseStudyTocNavClasses(sidebarVisible: boolean) {
  return cn(
    "hidden md:block sticky h-fit transition-all duration-500",
    "top-12 pt-24 pb-12",
    sidebarVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
  );
}

export const caseStudyTocSectionLabelClass =
  "text-xs uppercase tracking-widest font-semibold mb-3 text-white";

const tocLinkBase =
  "block w-full text-left text-sm transition-colors py-1.5 border-l-2";

export function caseStudyTocParentLinkClass(isDark: boolean, isActive: boolean) {
  return cn(
    tocLinkBase,
    "pl-3",
    isActive
      ? isDark
        ? "text-white border-white font-medium"
        : "text-[#003087] border-[#003087] font-semibold"
      : isDark
        ? "text-neutral-500 border-transparent hover:text-white hover:border-neutral-600"
        : "text-neutral-700 border-transparent hover:text-[#003087] hover:border-[#003087]/50"
  );
}

export function caseStudyTocChildLinkClass(isDark: boolean, isActive: boolean) {
  return cn(
    tocLinkBase,
    "pl-6",
    isActive
      ? isDark
        ? "text-white border-white font-medium"
        : "text-[#003087] border-[#003087] font-semibold"
      : isDark
        ? "text-neutral-500 border-transparent hover:text-white hover:border-neutral-600"
        : "text-neutral-700 border-transparent hover:text-[#003087] hover:border-[#003087]/50"
  );
}

/** Horizontal padding for the case study shell grid (matches previous px-6). */
export const caseStudyShellGridClass = "max-w-[var(--ds-case-study-shell-max-width)] mx-auto px-6";

/** Two-column grid: fixed TOC + fluid content. */
export const caseStudyShellGridColsClass =
  "md:grid md:grid-cols-[var(--ds-case-study-toc-width)_1fr] gap-8";
