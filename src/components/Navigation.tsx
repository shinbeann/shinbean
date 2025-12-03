import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

 type NavigationTone = "dark" | "light";

interface NavigationProps {
  /**
   * Controls the foreground color of the navigation to match the
   * underlying section background.
   * - "dark": navigation sits on a dark background → light text
   * - "light": navigation sits on a light background → dark text
   */
  tone?: NavigationTone;
  /**
   * When true, the nav hides while scrolling down and reveals
   * when scrolling up. Useful for immersive scrollytelling.
   */
  enableSmartHide?: boolean;
}

const Navigation = ({ tone = "dark", enableSmartHide = true }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Smart hide / reveal on scroll direction
  useEffect(() => {
    if (!enableSmartHide) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const previousY = lastScrollY.current;
      const delta = currentY - previousY;

      // Small threshold to avoid jitter
      if (Math.abs(delta) < 4) return;

      if (delta > 0 && currentY > 80) {
        // Scrolling down
        setIsHidden(true);
      } else if (delta < 0) {
        // Scrolling up
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableSmartHide]);

  const toneClass =
    tone === "light"
      ? "text-[hsl(var(--nav-on-light))]"
      : "text-[hsl(var(--nav-on-dark))]";

  return (
    <nav
      className={cn(
        "fixed top-5 left-1/2 z-50 -translate-x-1/2 transform transition-transform duration-300",
        isHidden ? "-translate-y-24" : "translate-y-0",
      )}
      aria-label="Main navigation"
    >
      <div className={cn("relative", toneClass)}>
        <div className="flex items-center gap-4 rounded-full border border-border/60 bg-background/70 px-4 py-2 backdrop-blur-xl shadow-lg md:px-6 md:py-3">
          {/* Logo/Name */}
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="text-sm font-semibold tracking-tight transition-colors hover:text-primary"
          >
            Gay Shin Lee
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="nav-dot-work text-foreground"
            >
              WORK
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-foreground"
            >
              CONTACT
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="ml-auto inline-flex rounded-full p-2 transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 mt-3 rounded-3xl border border-border/80 bg-background/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="rounded-2xl px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                activeClassName="nav-dot-work text-foreground bg-muted"
              >
                WORK
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="rounded-2xl px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                activeClassName="bg-muted text-foreground"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
