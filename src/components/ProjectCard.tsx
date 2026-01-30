import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  // support either a single role or multiple roles
  role?: string;
  roles?: string[];
  problem: string;
  outcome: string;
  tags: string[];
  image: string;
  slug: string;
  category: "Professional" | "School" | "Passion";
}

const ProjectCard = ({ title, role, roles, problem, outcome, tags, image, slug, category }: ProjectCardProps) => {
  const roleItems = roles && roles.length ? roles : role ? [role] : [];
  return (
    <Link 
      to={`/case-study/${slug}`}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
    >
      <Card className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_8px_rgb(0,0,0,0.08)] hover:-translate-y-1">
        {/* Project Image with semi-transparent inner border to prevent background bleed */}
        <div className="aspect-[16/10] overflow-hidden bg-muted relative">
          <img 
            src={image} 
            alt={`${title} project preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Inner border to prevent background bleed */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-4">
          {/* Category Badge */}
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>

          {/* Title with explicit action indicator */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
            </div>
          </div>

          {/* Problem → Outcome (visible on hover/focus) */}
          <div className="space-y-3 text-sm opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Problem →</span> {problem}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Outcome →</span> {outcome}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2.5 py-1 rounded-sm bg-muted text-muted-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
