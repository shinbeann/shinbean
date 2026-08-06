import { cn } from "@/lib/utils";
import { pageHorizontalPaddingClass } from "@/design-system";

const Footer = () => {
  return (
    <footer className={cn("border-t border-border/60 py-6", pageHorizontalPaddingClass)}>
      <p className="text-center text-sm text-muted-foreground">
        Gay Shin Lee © 2026 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
