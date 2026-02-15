import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useLayoutEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingScrollToTop from "@/components/FloatingScrollToTop";
import CaseStudyNav from "@/components/CaseStudyNav";

interface TableOfContentsItem {
  id: string;
  label: string;
  children?: TableOfContentsItem[];
}

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  tableOfContents: TableOfContentsItem[];
  backLink?: { to: string; label: string };
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
  backLink = { to: "/", label: "Back to Work" },
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
      // Check if we should show sidebars
      if (showSidebarsAfter) {
        const triggerElement = document.getElementById(showSidebarsAfter);
        if (triggerElement) {
          const rect = triggerElement.getBoundingClientRect();
          // Show sidebars when the trigger section reaches near top of viewport
          setShowSidebars(rect.top <= 200);
        }
      }

      // Flatten all sections including children
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
          if (rect.top <= 150) {
            setActiveSection(section.id);
            // Auto-expand parent if active section is a child, so the subheader is visible and can show as active (e.g. Problem)
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
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents, showSidebarsAfter]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      const offset = 140; // Consistent eye level: space for nav + padding
      window.scrollTo({ top: y - offset, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("min-h-screen overflow-x-clip", isDark ? "bg-[#050505]" : "bg-background")}>
      {/* Top Navigation */}
      <Navigation tone={isDark ? "dark" : "light"} enableSmartHide={false} />
      
      {/* Optional full-width hero (ignores 2-column grid below) */}
      {hero != null && <div className="w-full overflow-x-hidden">{hero}</div>}
      
      {/* 2-Column Grid (Left: TOC, Center: Content) — or single column when hideTableOfContents */}
      <div className={cn(
        "max-w-[1600px] mx-auto px-6",
        hideTableOfContents ? "" : "md:grid md:grid-cols-[240px_1fr] gap-8"
      )}>
        {/* Left Column - In-Page Navigation (Table of Contents); sticky so it stays visible while right column scrolls */}
        {!hideTableOfContents && (
        <nav
          aria-label="Table of Contents"
          className={cn(
            "hidden md:block sticky top-12 h-fit pt-24 pb-12 transition-all duration-500",
            showSidebars ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
          )}
        >
          <div className="space-y-6">
            {/* Back Link */}
            <Link
              to={backLink.to}
              onClick={() => window.scrollTo(0, 0)}
              className={cn(
                "inline-flex items-center gap-2 text-sm transition-colors font-medium",
                isDark 
                  ? "text-neutral-500 hover:text-white" 
                  : "text-neutral-500 hover:text-foreground"
              )}
            >
              ← {backLink.label}
            </Link>

            {/* ToC Links */}
            <div className="space-y-1">
              <p className={cn(
                "text-xs uppercase tracking-widest font-semibold mb-3",
                isDark ? "text-neutral-600" : "text-neutral-600"
              )}>
                On this page
              </p>
              {tableOfContents.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      // Parent items with children (e.g. Overview) only expand/collapse; no scroll
                      if (!item.children) {
                        handleScrollTo(item.id);
                      }
                      if (expandedHeader === item.id) {
                        setExpandedHeader(null);
                      } else {
                        setExpandedHeader(item.id);
                      }
                    }}
                    className={cn(
                      "block w-full text-left text-sm transition-colors py-1.5 pl-3 border-l-2",
                      activeSection === item.id
                        ? isDark 
                          ? "text-white border-white font-medium"
                          : "text-foreground border-foreground font-medium"
                        : isDark
                          ? "text-neutral-500 border-transparent hover:text-white hover:border-neutral-600"
                          : "text-neutral-500 border-transparent hover:text-foreground hover:border-neutral-600"
                    )}
                  >
                    {item.label}
                  </button>
                  {item.children && expandedHeader === item.id && item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleScrollTo(child.id)}
                      className={cn(
                        "block w-full text-left text-sm transition-colors py-1.5 pl-6 border-l-2",
                        activeSection === child.id
                          ? isDark 
                            ? "text-white border-white font-medium"
                            : "text-foreground border-foreground font-medium"
                          : isDark
                            ? "text-neutral-500 border-transparent hover:text-white hover:border-neutral-600"
                            : "text-neutral-500 border-transparent hover:text-foreground hover:border-neutral-600"
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

        {/* Center Column - Main Case Study Content */}
        <main className="pb-48 min-w-0">
          {hideTableOfContents && (
            <div className="pt-24 pb-6 px-4 md:px-0 max-w-4xl mx-auto">
              <Link
                to={backLink.to}
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  "inline-flex items-center gap-2 text-sm transition-colors font-medium",
                  isDark 
                    ? "text-neutral-500 hover:text-white" 
                    : "text-neutral-500 hover:text-foreground"
                )}
              >
                ← {backLink.label}
              </Link>
            </div>
          )}
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
