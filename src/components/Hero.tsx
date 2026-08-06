import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  caseStudyTocSectionLabelClass,
  heroHeadlineClass,
  introBodyClass,
  pageHorizontalPaddingClass,
} from "@/design-system";

const EXPERIENCE = [
  { company: "INTELLIPAL", role: "HTX", date: "Enterprise Tool ->", sectionId: "intellipal" },
  { company: "FlowTutor", role: "Self-initiated", date: "EdTech ->", sectionId: "flowtutor" },
  { company: "KidneyQuest", role: "National Kidney Foundation", date: "Health ->", sectionId: "kidneyquest" },
];

const ExperienceRow = ({
  company,
  role,
  date,
  isFirst,
  sectionId,
}: {
  company: string;
  role: string;
  date: string;
  isFirst?: boolean;
  sectionId: string;
}) => {
  const handleClick = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-baseline justify-between gap-4 py-3 w-full cursor-pointer transition-colors duration-200 hover:bg-white/5"
      style={{
        borderTop: isFirst ? "1px solid rgba(255,255,255,0.1)" : undefined,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="flex items-baseline gap-2 min-w-0">
        <span className="font-semibold text-foreground truncate">{company}</span>
        <span className="text-sm text-muted-foreground shrink-0">{role}</span>
      </div>
      <span className="text-sm text-muted-foreground tabular-nums shrink-0">{date}</span>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-end pb-12 md:pb-20 overflow-hidden",
        pageHorizontalPaddingClass
      )}
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #000000 60%, #0d1526 100%)",
      }}
    >
      {/* Soft blue-yellow radial glow – heavy blur, Screen blend so it adds light not mud */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, hsla(220, 60%, 45%, 0.25) 0%, hsla(45, 80%, 55%, 0.15) 35%, transparent 70%)",
          filter: "blur(175px)",
          mixBlendMode: "screen",
        }}
      />

      <div className="max-w-5xl w-full relative z-10">
        {/* Subtitle */}
        <motion.p
          className={cn(introBodyClass, "mb-4")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hello! I am Shin Lee, a product designer with a computer science background.
        </motion.p>

        {/* Headline */}
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <motion.h1 className={cn(heroHeadlineClass, "text-foreground")}>
            <span>I drive impact through </span>
            <span className="italic text-intellipal-accent">thoughtful, intentional </span>
            <span className="italic text-foreground">designs.</span>
          </motion.h1>
          <p className="text-sm md:text-base text-muted-foreground mt-8">
            <span className="text-green-500" aria-hidden="true">●</span> Open to work
          </p>
        </motion.div>

        {/* Experience – table layout with dividers */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className={caseStudyTocSectionLabelClass}>
            On this page
          </p>
          <div className="flex flex-col">
            {EXPERIENCE.map((item, i) => (
              <ExperienceRow
                key={i}
                company={item.company}
                role={item.role}
                date={item.date}
                sectionId={item.sectionId}
                isFirst={i === 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
