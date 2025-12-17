import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectBentoCardProps {
  slug: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accentColor?: string;
}

export const ProjectBentoCard = ({
  slug,
  tag,
  title,
  description,
  image,
  imageAlt,
  accentColor = "primary",
}: ProjectBentoCardProps) => {
  return (
    <Link to={`/case-study/${slug}`} className="group block h-full">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -8 }}
        className="relative h-full rounded-3xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all duration-500 hover:shadow-bento"
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-glow/0 to-primary/0 group-hover:from-accent-glow/5 group-hover:to-primary/5 transition-all duration-500" />

        {/* Image container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8 -mt-16 z-10">
          {/* Tag */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-secondary/80 text-secondary-foreground mb-4">
            {tag}
          </span>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-foreground/90 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>

          {/* View link */}
          <div className="flex items-center gap-2 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};
