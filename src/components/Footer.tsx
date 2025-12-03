import { Linkedin, Mail } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticLinkProps {
  href: string;
  label: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const MagneticLink = ({ href, label, ariaLabel, children }: MagneticLinkProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground transition-colors hover:text-primary"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
      <span className="underline-offset-4 decoration-transparent hover:decoration-current">
        {label}
      </span>
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="px-4 pb-10 pt-20">
      <div className="container mx-auto max-w-5xl space-y-10 text-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Let&apos;s connect
          </p>
          <h2 className="font-semibold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Get in touch.
          </h2>
        </div>

        <div className="space-y-4">
          <p className="mx-auto max-w-md text-sm text-muted-foreground md:text-base">
            Open to roles at the intersection of AI, product, and research. Best reached via email or LinkedIn.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <MagneticLink
              href="mailto:gayshinlee@gmail.com"
              label="Email"
              ariaLabel="Email Gay Shin Lee"
            >
              <Mail className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink
              href="https://www.linkedin.com/in/shin-lee-gay/"
              label="LinkedIn"
              ariaLabel="Visit LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
            </MagneticLink>
          </div>
        </div>

        <p className="text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
