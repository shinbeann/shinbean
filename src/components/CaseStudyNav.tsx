import { Link, useLocation } from "react-router-dom";

const studies: { label: string; path: string; disabled?: boolean }[] = [
  { label: "FlowTutor", path: "/case-study/flowtutor" },
  { label: "KidneyQuest", path: "/case-study/kidneyquest" },
  { label: "INTELLIPAL", path: "/case-study/intellipal" },
  { label: "NEST", path: "/case-study/nest" },
];

const CaseStudyNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen flex items-center justify-center gap-2 py-12">
      {studies.map((s, i) => {
        const isActive = pathname === s.path;
        const content = (
          <span
            className={`text-sm font-medium transition-colors ${
              isActive
                ? "text-white"
                : s.disabled
                ? "text-neutral-600 cursor-default"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {s.label}
          </span>
        );

        return (
          <span key={s.label} className="flex items-center gap-2">
            {s.disabled ? content : <Link to={s.path}>{content}</Link>}
            {i < studies.length - 1 && (
              <span className="text-neutral-600 text-sm select-none">/</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default CaseStudyNav;
