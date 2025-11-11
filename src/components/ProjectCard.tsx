import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  role: string;
  problem: string;
  outcome: string;
  tags: string[];
  image: string;
  slug: string;
  category: "Professional" | "School" | "Passion";
}

const ProjectCard = ({ title, role, problem, outcome, tags, image, slug, category }: ProjectCardProps) => {
  return (
    <Link to={`/case-study/${slug}`}>
      <Card className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full">
        {/* Project Image */}
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={`${title} project preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category Badge */}
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>

          {/* Title and Role */}
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">{role}</p>
          </div>

          {/* Problem → Outcome */}
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Problem:</span> {problem}
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Outcome:</span> {outcome}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-sm bg-muted text-muted-foreground"
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
