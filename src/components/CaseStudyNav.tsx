import { Link, useLocation } from "react-router-dom";

const studies = [
  { label: "FlowTutor", path: "/case-study/flowtutor" },
  { label: "KidneyQuest", path: "/case-study/kidneyquest" },
  { label: "HybridRAG", path: "/case-study/hybridrag", disabled: true },
];

const CaseStudyNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 w-screen flex items-center justify-center gap-2 py-4 z-50 bg-black/80 backdrop-blur-sm">
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
