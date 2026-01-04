import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FileText,
  Upload,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  Zap,
  CheckCircle,
  Star,
  Lightbulb,
  Anchor,
} from "lucide-react";

// Mock data for Activity Feed
const activityFeed = [
  { user: "Alex", action: "Processed Python Basics", status: "Production", color: "green" },
  { user: "Sarah", action: "Uploaded Design Systems", status: "Preview", color: "blue" },
  { user: "Mike", action: "Completed React Tutorial", status: "Production", color: "green" },
  { user: "Emma", action: "Started ML Fundamentals", status: "Preview", color: "blue" },
];

// Mock quiz options
const quizOptions = [
  "Transformers are inherently incapable of learning statistical correlations.",
  "Transformers struggle at tasks that require chaining multiple logical steps unless taught how to break them down.",
  "Transformers have perfect symbolic reasoning without any prompting.",
  "Transformers always outperform humans at sequential arithmetic.",
];

// Ghost typing text for Note Editor
const ghostTypingText = "Transformers differ from RNNs by computing attention scores across all tokens simultaneously, enabling parallel processing and better long-range dependencies...";

// Stats Row Component
interface StatCardProps {
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  gradientFrom: string;
  gradientTo: string;
  pillBg: string;
  pillText: string;
  delay?: number;
}

const StatCard = ({ value, icon: Icon, label, gradientFrom, gradientTo, pillBg, pillText, delay = 0 }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Extract numeric value and suffix
  const numericMatch = value.match(/(\d+\.?\d*)(.*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";
  const isNumeric = numericMatch !== null;
  
  // Initialize display value: if not numeric, show immediately; otherwise start at 0
  const [displayValue, setDisplayValue] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (isInView) {
      // If value is not numeric (like "p<0.05"), display immediately
      if (!isNumeric) {
        setDisplayValue(value);
        return;
      }

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current.toFixed(suffix === "" ? 0 : 1) + suffix);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, value, suffix, isNumeric]);

  return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-2 sm:p-2.5 h-full min-h-[80px]"
      >
        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-1.5"
          style={{
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {displayValue}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-medium"
          style={
            pillBg === "bg-purple-100"
              ? { backgroundColor: "#f3e8ff", color: "#7c3aed" }
              : pillBg === "bg-blue-100"
              ? { backgroundColor: "#dbeafe", color: "#1e40af" }
              : pillBg === "bg-orange-100"
              ? { backgroundColor: "#ffedd5", color: "#9a3412" }
              : {}
          }
        >
          <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
          <span className="truncate">{label}</span>
        </motion.div>
      </motion.div>
  );
};

const StatsRow = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 h-full">
      <StatCard
        value="25.0%"
        icon={Zap}
        label="Retention"
        gradientFrom="#c084fc"
        gradientTo="#3B82F6"
        pillBg="bg-purple-100"
        pillText="text-purple-700"
        delay={0}
      />
      <StatCard
        value="60%"
        icon={CheckCircle}
        label="Less Context Switching"
        gradientFrom="#3B82F6"
        gradientTo="#06B6D4"
        pillBg="bg-blue-100"
        pillText="text-blue-700"
        delay={0.1}
      />
      <StatCard
        value="4.2 / 5"
        icon={Star}
        label="Rating"
        gradientFrom="#F97316"
        gradientTo="#EF4444"
        pillBg="bg-orange-100"
        pillText="text-orange-700"
        delay={0.2}
      />
    </div>
  );
};

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BentoCard = ({ children, className = "", delay = 0 }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Card 1: Hero Input
const HeroInputCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <BentoCard className="col-span-1 md:col-span-3 lg:col-span-4 px-7 pt-4 pb-4">
      <div className="space-y-3.5">
        <div className="space-y-1.5 text-center">
          <h2 
            className="text-2xl font-bold"
            style={{
              background: 'linear-gradient(to right, #3b82f6, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            FlowTutor
          </h2>
          <p className="text-sm text-gray-600">Learn smarter with AI-powered tutorial assistance.</p>
        </div>

        <div className="space-y-2.5">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste your YouTube tutorial link here"
              className="w-full px-2.5 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 transition-all text-sm"
              style={{
                '--tw-ring-color': '#c084fc33',
                '--tw-border-color': '#c084fc'
              } as React.CSSProperties & { '--tw-ring-color'?: string; '--tw-border-color'?: string }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#c084fc';
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(192, 132, 252, 0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            />
          </div>

          <motion.button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden text-sm"
            style={{
              background: 'linear-gradient(to right, #a855f7, #c084fc)'
            }}
          >
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              )}
            </AnimatePresence>
            <span className="relative flex items-center justify-center gap-2">
              <Upload className="h-3.5 w-3.5" />
              Upload & Start Learning
            </span>
          </motion.button>
        </div>
      </div>
    </BentoCard>
  );
};

// Card 2: AI Transparency
const AITransparencyCard = () => {
  const [aiExplanations, setAiExplanations] = useState(true);
  const [personalization, setPersonalization] = useState(false);

  const Toggle = ({ 
    label, 
    subtext, 
    isOn, 
    onToggle 
  }: { 
    label: string; 
    subtext: string; 
    isOn: boolean; 
    onToggle: () => void;
  }) => {
    return (
      <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-900">{label}</p>
          <p className="text-xs text-gray-600 mt-0.5">{subtext}</p>
        </div>
        <button
          onClick={onToggle}
          className="relative w-9 h-5 rounded-full p-1 transition-colors duration-300 bg-gray-300"
          style={isOn ? { backgroundColor: '#c084fc' } : {}}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md ${
              isOn ? 'left-4' : 'left-0.5'
            }`}
          />
        </button>
      </div>
    );
  };

  return (
    <BentoCard delay={0.1} className="p-4 h-full flex flex-col">
      <div className="flex-1 flex flex-col space-y-3.5">
        {/* Section 1: AI Assistant Settings */}
        <div className="flex-1">
          <h3 className="text-base font-bold text-gray-900 mb-2">AI Assistant Settings</h3>
          <div className="space-y-0">
            <Toggle
              label="AI Explanations"
              subtext="Show timestamps & 'Why' tooltips."
              isOn={aiExplanations}
              onToggle={() => setAiExplanations(!aiExplanations)}
            />
            <Toggle
              label="Personalization"
              subtext="Use history for better prompts."
              isOn={personalization}
              onToggle={() => setPersonalization(!personalization)}
            />
          </div>
        </div>

        {/* Section 2: Transcript Grounding Info */}
        <div className="mt-2 mb-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-1.5">
            <Anchor className="w-4 h-3.5 text-gray-700" />
            <h4 className="text-xs font-semibold text-gray-900">Transcript Grounding</h4>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            Constraining the AI to the video transcript eliminates hallucinations and guarantees 100% source accuracy.
          </p>
        </div>
      </div>
    </BentoCard>
  );
};

// Card 3: Interactive Quiz
const QuizCard = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BentoCard delay={0.2} className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-1 px-4 pt-3.5 pb-2.5 h-full">
      <div className="h-full flex flex-col">
        <div className="mb-2.5">
          <h3 className="text-base font-bold text-gray-900 mb-1.5">Quiz Time</h3>
          <p className="text-xs text-gray-600 mb-2.5 leading-relaxed">
            The transcript compares transformers to RNNs when discussing reasoning and step-wise logic. Which issue about transformers is highlighted?
          </p>
        </div>

        <div
          className="flex-1 space-y-1.5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {quizOptions.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  x: 0,
                }}
                transition={{
                  delay: isHovered ? index * 0.1 : 0,
                  duration: 0.3,
                }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedOption(index)}
                className="w-full text-left px-2.5 py-1.5 rounded-md border-2 transition-all border-gray-200 bg-gray-50"
                style={
                  selectedOption === index
                    ? { borderColor: '#c084fc', backgroundColor: '#f3e8ff' }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (selectedOption !== index) {
                    e.currentTarget.style.borderColor = '#d8b4fe';
                    e.currentTarget.style.backgroundColor = 'rgba(243, 232, 255, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedOption !== index) {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.backgroundColor = '';
                  }
                }}
              >
                <span className="text-xs text-gray-700 leading-tight">{option}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-2.5 flex items-center justify-between text-xs text-gray-600">
          <span>1/5</span>
          <span>Select an answer to check</span>
        </div>
      </div>
    </BentoCard>
  );
};

// Card 4: Live Activity Feed
const ActivityFeedCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <BentoCard delay={0.3} className="md:row-span-2 p-8">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Activity Feed</h3>
          <p className="text-sm text-gray-600">Live updates from the community</p>
        </div>

        <div className="flex-1 space-y-4">
          {activityFeed.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: hoveredIndex === index ? 8 : 0,
                scale: hoveredIndex === index ? 1.02 : 1,
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                style={{
                  background: 'linear-gradient(to bottom right, #d8b4fe, #c084fc)'
                }}
              >
                {item.user[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{item.user}</p>
                <p className="text-xs text-gray-600 truncate">{item.action}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.color === "green"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
};

// Card 5: Smart Notes (Square Card)
const SmartNotesCard = () => {
  return (
    <BentoCard delay={0.4} className="p-3 sm:p-4 md:p-5 h-full flex flex-col cursor-pointer min-h-[140px]">
      <div className="flex-1 flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
        {/* Icon Container */}
        <div 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: 'linear-gradient(to bottom right, #3b82f6, #c084fc)'
          }}
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Smart Notes</h3>
        
        {/* Body Text */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
          Take organized notes with AI-suggested key points.
        </p>
      </div>
    </BentoCard>
  );
};

// Card 6: Quick Quiz (Square Card)
const QuickQuizCard = () => {
  return (
    <BentoCard delay={0.5} className="p-3 sm:p-4 md:p-5 h-full flex flex-col cursor-pointer min-h-[140px]">
      <div className="flex-1 flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
        {/* Icon Container */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Quick Quiz</h3>
        
        {/* Body Text */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
          Test your knowledge with auto-generated questions.
        </p>
      </div>
    </BentoCard>
  );
};

export const BentoGrid = () => {
  return (
    <div className="w-full bg-white p-4 sm:p-5 md:p-7 rounded-2xl border-2 border-gray-200 shadow-2xl">
      <div className="flex flex-col gap-3.5">
        {/* Hero Input - Always full width */}
        <HeroInputCard />
        
        {/* Main content grid - stacks on mobile, side-by-side on larger screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-[2.6fr_1.4fr] gap-4 lg:gap-5">
          {/* Left column: Stats + Feature cards */}
          <div className="flex flex-col gap-4">
            <StatsRow />
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <SmartNotesCard />
              <QuickQuizCard />
            </div>
          </div>
          
          {/* Right column: AI Transparency */}
          <div className="min-h-[280px] lg:min-h-0">
            <AITransparencyCard />
          </div>
        </div>
      </div>
    </div>
  );
};
