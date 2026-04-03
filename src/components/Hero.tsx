import { motion } from "framer-motion";

const EXPERIENCE = [
  { company: "FlowTutor", role: "Product Designer", date: "2025", sectionId: "flowtutor" },
  { company: "KidneyQuest (National Kidney Foundation)", role: "UX/UI Designer", date: "2025", sectionId: "kidneyquest" },
  { company: "Hybrid RAG (HTX)", role: "UX/UI Designer", date: "Present", sectionId: "hybridrag" },
  { company: "NEST", role: "Product Designer, Developer", date: "Present", sectionId: "nest" },
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
  const name = "Gay Shin Lee";
  const nameChinese = "倪欣励";

  return (
    <section
      className="relative min-h-screen flex items-end pb-12 md:pb-20 px-6 md:px-16 lg:px-24 overflow-hidden"
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
        {/* Name (Name → Subtitle: 16px) – same fade/slide as rest of hero */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4 flex items-baseline gap-3 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {name}
        </motion.h1>

        {/* Subtitle (Subtitle → Body: 32px) */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground tracking-wide mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Product Designer
        </motion.p>

        {/* Body text (Body → Divider/Experience: 96px) */}
        <motion.div
          className="max-w-xl space-y-1 mb-24"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Welcome to my small corner of the web.
          </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Currently building NEST, your new favorite digital journal.
          </p>
        </motion.div>

        {/* Experience – table layout with dividers */}
        <motion.div
          className="w-full max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-3">
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
