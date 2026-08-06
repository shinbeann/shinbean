import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { caseStudyMetaLabelClass } from "@/design-system";

export interface CaseStudyHeroMetadataProps {
  role: string;
  contributions: string[];
  timeline: string;
  organization: string;
  tools: string;
  team?: string;
  labelClassName?: string;
  valueClassName?: string;
  contributionClassName?: string;
}

const MetaBlock = ({
  label,
  value,
  labelClassName,
  valueClassName,
  alignRight,
}: {
  label: string;
  value: string;
  labelClassName?: string;
  valueClassName?: string;
  alignRight?: boolean;
}) => (
  <div className={cn("space-y-1.5 min-w-0", alignRight && "md:text-right")}>
    <p className={cn(caseStudyMetaLabelClass, labelClassName)}>{label}</p>
    <p className={cn("text-sm font-medium break-words", valueClassName)}>{value}</p>
  </div>
);

export const CaseStudyHeroMetadata = ({
  role,
  contributions,
  timeline,
  organization,
  tools,
  team,
  labelClassName,
  valueClassName,
  contributionClassName,
}: CaseStudyHeroMetadataProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 mt-10 min-w-0"
  >
    <div className="md:w-[65%] space-y-8">
      <MetaBlock label="MY ROLE" value={role} labelClassName={labelClassName} valueClassName={valueClassName} />
      <div className="space-y-1.5 min-w-0">
        <p className={cn(caseStudyMetaLabelClass, labelClassName)}>MY CONTRIBUTION</p>
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed break-words",
            valueClassName,
            contributionClassName,
          )}
        >
          {contributions.join(", ")}
        </p>
      </div>
      {team ? (
        <MetaBlock
          label="ABOUT THE TEAM"
          value={team}
          labelClassName={labelClassName}
          valueClassName={valueClassName}
        />
      ) : null}
    </div>

    <div className="md:w-[30%] space-y-8">
      <MetaBlock
        label="TIMELINE"
        value={timeline}
        labelClassName={labelClassName}
        valueClassName={valueClassName}
        alignRight
      />
      <MetaBlock
        label="ORGANIZATION"
        value={organization}
        labelClassName={labelClassName}
        valueClassName={valueClassName}
        alignRight
      />
      <MetaBlock
        label="TOOLS"
        value={tools}
        labelClassName={labelClassName}
        valueClassName={valueClassName}
        alignRight
      />
    </div>
  </motion.div>
);
