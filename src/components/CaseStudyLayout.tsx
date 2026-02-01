import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingScrollToTop from "@/components/FloatingScrollToTop";

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
}

const CaseStudyLayout = ({
  children,
  tableOfContents,
  backLink = { to: "/", label: "Back to Work" },
  theme = "light",
  showSidebarsAfter,
}: CaseStudyLayoutProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showSidebars, setShowSidebars] = useState(!showSidebarsAfter);
  const [expandedHeader, setExpandedHeader] = useState<string | null>(null);

  const isDark = theme === "dark";

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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn("min-h-screen", isDark ? "bg-[#050505]" : "bg-background")}>
      {/* Top Navigation */}
      <Navigation tone={isDark ? "dark" : "light"} enableSmartHide={false} />
      
      {/* 2-Column Grid (Left: TOC, Center: Content) */}
      <div className="md:grid md:grid-cols-[240px_1fr] gap-8 max-w-[1600px] mx-auto px-6">
        {/* Left Column - In-Page Navigation (Table of Contents) */}
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
                      handleScrollTo(item.id);
                      // Toggle expansion: if clicking the same header, close it; otherwise, expand this and close others
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

        {/* Center Column - Main Case Study Content */}
        <main className="pb-48 min-w-0">
          <div className="max-w-4xl mx-auto px-4 md:px-0">{children}</div>
        </main>
      </div>

      <Footer />
      <FloatingScrollToTop />
    </div>
  );
};

export default CaseStudyLayout;
