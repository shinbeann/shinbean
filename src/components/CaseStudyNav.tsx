import { Link, useLocation } from "react-router-dom";

const studies: { label: string; path: string; disabled?: boolean }[] = [
  { label: "INTELLIPAL", path: "/case-study/intellipal" },
  { label: "FlowTutor", path: "/case-study/flowtutor" },
  { label: "KidneyQuest", path: "/case-study/kidneyquest" },
  { label: "NEST", path: "/case-study/nest" },
];

interface CaseStudyNavProps {
  tone?: "light" | "dark";
}

const CaseStudyNav = ({ tone = "dark" }: CaseStudyNavProps) => {
  const { pathname } = useLocation();

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen flex items-center justify-center gap-2 py-12">
      {studies.map((s, i) => {
        const isActive = pathname === s.path;
        const content = (
          <span
            className={`text-sm transition-colors border-b-2 pb-0.5 ${
              isActive
                ? tone === "dark"
                  ? "text-white font-semibold border-white"
                  : "text-[#003087] font-semibold border-[#003087]"
                : s.disabled
                ? "text-neutral-400 cursor-default border-transparent"
                : tone === "dark"
                  ? "text-neutral-400 hover:text-neutral-300 border-transparent"
                  : "text-neutral-700 hover:text-[#003087] border-transparent"
            }`}
          >
            {s.label}
          </span>
        );

        return (
          <span key={s.label} className="flex items-center gap-2">
            {s.disabled ? content : <Link to={s.path}>{content}</Link>}
            {i < studies.length - 1 && (
              <span
                className={`text-sm select-none ${
                  tone === "dark" ? "text-neutral-400" : "text-neutral-400"
                }`}
              >
                /
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default CaseStudyNav;
