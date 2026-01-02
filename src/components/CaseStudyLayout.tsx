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
}

const CaseStudyLayout = ({
  children,
  tableOfContents,
  backLink = { to: "/", label: "Back to Work" },
}: CaseStudyLayoutProps) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

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
    <div className="min-h-screen bg-background">
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
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-foreground transition-colors font-medium"
            >
              ← {backLink.label}
            </Link>

            {/* ToC Links */}
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-semibold mb-3">
                On this page
              </p>
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={cn(
                    "block w-full text-left text-sm transition-colors py-1.5 pl-3 border-l-2",
                    activeSection === item.id
                      ? "text-foreground border-foreground font-medium"
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
          <div className="max-w-3xl mx-auto">{children}</div>
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
                  ? "text-foreground"
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
                  ? "text-foreground"
                  : "text-neutral-500 hover:text-foreground"
              )}
            >
              About
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile: Simplified Header Row */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            to={backLink.to}
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm text-neutral-500 hover:text-foreground transition-colors"
          >
            ← {backLink.label}
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
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
