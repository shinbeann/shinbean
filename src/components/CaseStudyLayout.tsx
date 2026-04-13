import { cn } from "@/lib/utils";
import { useEffect, useLayoutEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingScrollToTop from "@/components/FloatingScrollToTop";
import CaseStudyNav from "@/components/CaseStudyNav";
import {
  caseStudyLayout,
  caseStudyShellGridClass,
  caseStudyShellGridColsClass,
  caseStudyTocChildLinkClass,
  caseStudyTocNavClasses,
  caseStudyTocParentLinkClass,
  caseStudyTocSectionLabelClass,
} from "@/design-system";

interface TableOfContentsItem {
  id: string;
  label: string;
  children?: TableOfContentsItem[];
}

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  tableOfContents: TableOfContentsItem[];
  theme?: "light" | "dark";
  showSidebarsAfter?: string; // Section ID after which sidebars should appear
  showContactSection?: boolean; // When false, hide the Contact / Footer section
  /** When true, hide the left TOC sidebar and use full-width content */
  hideTableOfContents?: boolean;
  /** Optional full-width hero rendered above the 2-column grid; not constrained by TOC/content columns */
  hero?: React.ReactNode;
}

const CaseStudyLayout = ({
  children,
  tableOfContents,
  theme = "light",
  showSidebarsAfter,
  showContactSection = true,
  hideTableOfContents = false,
  hero,
}: CaseStudyLayoutProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showSidebars, setShowSidebars] = useState(!showSidebarsAfter);
  const [expandedHeader, setExpandedHeader] = useState<string | null>(null);

  const isDark = theme === "dark";

  // Scroll to top when entering a case study (useLayoutEffect runs before paint — no visible scroll)
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Track active section on scroll + sidebar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (showSidebarsAfter) {
        const triggerElement = document.getElementById(showSidebarsAfter);
        if (triggerElement) {
          const rect = triggerElement.getBoundingClientRect();
          setShowSidebars(rect.top <= caseStudyLayout.sidebarRevealThresholdPx);
        }
      }

      const allSections: { id: string; element: HTMLElement | null }[] = [];
      tableOfContents.forEach((item) => {
        allSections.push({ id: item.id, element: document.getElementById(item.id) });
        if (item.children) {
          item.children.forEach((child) => {
            allSections.push({ id: child.id, element: document.getElementById(child.id) });
          });
        }
      });

      for (let i = allSections.length - 1; i >= 0; i--) {
        const section = allSections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= caseStudyLayout.activeSectionThresholdPx) {
            setActiveSection(section.id);
            const parent = tableOfContents.find((item) =>
              item.children?.some((child) => child.id === section.id)
            );
            if (parent) {
              setExpandedHeader(parent.id);
            }
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents, showSidebarsAfter]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      const offset = caseStudyLayout.scrollAnchorOffsetPx;
      window.scrollTo({ top: y - offset, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("min-h-screen overflow-x-clip", isDark ? "bg-[#050505]" : "bg-background")}>
      <Navigation tone={isDark ? "dark" : "light"} enableSmartHide={false} />

      {hero != null && <div className="w-full overflow-x-hidden">{hero}</div>}

      <div
        className={cn(
          caseStudyShellGridClass,
          hideTableOfContents ? "" : caseStudyShellGridColsClass
        )}
      >
        {!hideTableOfContents && (
          <nav
            aria-label="Table of Contents"
            className={caseStudyTocNavClasses(showSidebars)}
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <p className={caseStudyTocSectionLabelClass}>On this page</p>
                {tableOfContents.map((item) => (
                  <div key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!item.children) {
                          handleScrollTo(item.id);
                        }
                        if (expandedHeader === item.id) {
                          setExpandedHeader(null);
                        } else {
                          setExpandedHeader(item.id);
                        }
                      }}
                      className={caseStudyTocParentLinkClass(
                        isDark,
                        activeSection === item.id && !item.children?.length
                      )}
                    >
                      {item.label}
                    </button>
                    {item.children &&
                      expandedHeader === item.id &&
                      item.children.map((child) => (
                        <button
                          type="button"
                          key={child.id}
                          onClick={() => handleScrollTo(child.id)}
                          className={caseStudyTocChildLinkClass(
                            isDark,
                            activeSection === child.id
                          )}
                        >
                          {child.label}
                        </button>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        )}

        <main className="pb-48 min-w-0">
          <div className="max-w-4xl mx-auto px-4 md:px-0">{children}</div>
        </main>
      </div>

      {showContactSection && <Footer />}
      <CaseStudyNav />
      <footer className="border-t border-border/60 py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          Gay Shin Lee © 2026 All Rights Reserved
        </p>
      </footer>
      <FloatingScrollToTop />
    </div>
  );
};

export default CaseStudyLayout;
