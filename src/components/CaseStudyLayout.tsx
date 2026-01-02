import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TableOfContentsItem {
  id: string;
  label: string;
}

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  tableOfContents: TableOfContentsItem[];
  backLink?: { to: string; label: string };
  theme?: "light" | "dark";
}

const CaseStudyLayout = ({
  children,
  tableOfContents,
  backLink = { to: "/", label: "Back to Work" },
  theme = "light",
}: CaseStudyLayoutProps) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  const isDark = theme === "dark";

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
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
  }, [tableOfContents]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn("min-h-screen", isDark ? "bg-[#050505]" : "bg-background")}>
      {/* 3-Column Holy Grail Grid */}
      <div className="md:grid md:grid-cols-[240px_1fr_180px] gap-8 max-w-[1600px] mx-auto px-6">
        {/* Left Column - In-Page Navigation (Table of Contents) */}
        <nav
          aria-label="Table of Contents"
          className="hidden md:block sticky top-12 h-fit pt-24 pb-12"
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
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
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
              ))}
            </div>
          </div>
        </nav>

        {/* Center Column - Main Case Study Content */}
        <main className="pt-24 pb-48 min-w-0">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>

        {/* Right Column - Global Site Navigation */}
        <nav
          aria-label="Main Site Navigation"
          className="hidden md:block sticky top-12 h-fit pt-24 pb-12"
        >
          <div className="space-y-4 text-right">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={cn(
                "block text-sm font-semibold uppercase tracking-widest transition-colors",
                location.pathname === "/"
                  ? isDark ? "text-white" : "text-foreground"
                  : isDark 
                    ? "text-neutral-500 hover:text-white" 
                    : "text-neutral-500 hover:text-foreground"
              )}
            >
              Work
            </Link>
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className={cn(
                "block text-sm font-semibold uppercase tracking-widest transition-colors",
                location.pathname === "/about"
                  ? isDark ? "text-white" : "text-foreground"
                  : isDark 
                    ? "text-neutral-500 hover:text-white" 
                    : "text-neutral-500 hover:text-foreground"
              )}
            >
              About
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile: Simplified Header Row */}
      <div className={cn(
        "md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b",
        isDark 
          ? "bg-[#050505]/95 border-white/10" 
          : "bg-background/95 border-border"
      )}>
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            to={backLink.to}
            onClick={() => window.scrollTo(0, 0)}
            className={cn(
              "text-sm transition-colors",
              isDark 
                ? "text-neutral-500 hover:text-white" 
                : "text-neutral-500 hover:text-foreground"
            )}
          >
            ← {backLink.label}
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={cn(
                "text-xs font-semibold uppercase tracking-widest transition-colors",
                isDark 
                  ? "text-neutral-500 hover:text-white" 
                  : "text-neutral-500 hover:text-foreground"
              )}
            >
              Work
            </Link>
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className={cn(
                "text-xs font-semibold uppercase tracking-widest transition-colors",
                isDark 
                  ? "text-neutral-500 hover:text-white" 
                  : "text-neutral-500 hover:text-foreground"
              )}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLayout;
