import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo/Name */}
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="text-lg font-semibold tracking-tight hover:text-primary transition-colors">
            Gay Shin Lee
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Work
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="flex flex-col gap-4 p-4">
              <NavLink 
                to="/" 
                onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                activeClassName="text-foreground"
              >
                Work
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                activeClassName="text-foreground"
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                activeClassName="text-foreground"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
