import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ExternalLink, Mail, Github, Linkedin, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { publicMedia } from "@/lib/publicMedia";

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const contactLinks = [
    {
      label: "Email",
      href: "mailto:gayshinlee@gmail.com",
      icon: Mail,
      external: false,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/gayshinlee",
      icon: Linkedin,
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/gayshinlee",
      icon: Github,
      external: true,
    },
    {
      label: "Resume",
      href: publicMedia.resumePdf,
      icon: FileText,
      external: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-8 right-8 z-50"
    >
      {/* Main Container */}
      <div className="bg-background/80 backdrop-blur-xl border border-border/60 rounded-2xl shadow-lg overflow-hidden min-w-[240px]">
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between gap-3 px-4 min-h-11 hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            {/* Profile Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-border/40">
              <img
                src={publicMedia.aboutPhoto}
                alt="Gay Shin Lee"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">Contact Me</span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Pulse indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-border/40"
            >
              <div className="py-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between px-4 min-h-11 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-sm text-foreground">{link.label}</span>
                    </div>
                    {link.external && (
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                ))}
              </div>
              
              {/* Status footer */}
              <div className="px-4 py-2 border-t border-border/40 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">●</span> Available ⋅ Free all day
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FloatingContactButton;
