import React from "react";
import { Hand, ArrowLeftRight, Lightbulb, MessageSquare, Layers } from "lucide-react";
import ftDemoVideo from "@/assets/Screen Recording 2026-01-29 143535.mp4";
import ftChatFeature from "@/assets/ft_main.png";
import ftQuizVideo from "@/assets/ft_quiz.mp4";

// Dark Theme Container Component
const FeatureVisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-white/10 bg-white/5 overflow-hidden shadow-2xl">
    {children}
  </div>
);

// Row 1 Visual: Video Demo
const WorkspaceVisual = () => (
  <FeatureVisualContainer>
    <div className="w-[561px] h-[263px] max-w-full bg-neutral-900/50">
      <video
        src={ftDemoVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </FeatureVisualContainer>
);

// Row 2 Visual: Chat Feature Screenshot
const ChatBubbleVisual = () => (
  <FeatureVisualContainer>
    <div className="w-[561px] h-[263px] max-w-full bg-neutral-900/50 relative">
      <img
        src={ftChatFeature}
        alt="FlowTutor context-aware AI chatbot"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-neutral-800/60" />
    </div>
  </FeatureVisualContainer>
);

// Row 3 Visual: Ergonomics Screenshot
const DividerVisual = () => (
  <FeatureVisualContainer>
    <div className="w-[561px] h-[263px] max-w-full bg-neutral-900/50 relative">
      <img
        src={ftChatFeature}
        alt="FlowTutor ergonomic split-screen layout"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-neutral-800/60" />
    </div>
  </FeatureVisualContainer>
);

// Row 4 Visual: Quiz Video
const QuizModalVisual = () => (
  <FeatureVisualContainer>
    <div className="w-[561px] h-[263px] max-w-full bg-neutral-900/50">
      <video
        src={ftQuizVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </FeatureVisualContainer>
);

// Feature Row Component
interface FeatureRowProps {
  number: string;
  headline: string;
  body: string;
  visual: React.ReactNode;
  isReversed?: boolean;
}

const FeatureRow = ({ number, headline, body, visual, isReversed = false }: FeatureRowProps) => (
  <div className={`grid grid-cols-1 gap-6 lg:gap-10 items-center ${isReversed ? 'lg:grid-cols-[3fr_2fr]' : 'lg:grid-cols-[2fr_3fr]'}`}>
    {/* Text Column */}
    <div className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
      {/* Large decorative number */}
      <span className="absolute -left-2 -top-8 text-[80px] md:text-[100px] font-bold leading-none text-white/10 select-none pointer-events-none">
        {number}
      </span>
      <div className="relative z-10 space-y-3 pt-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">{headline}</h3>
        <p className="text-sm md:text-base text-neutral-400 leading-relaxed">{body}</p>
      </div>
    </div>
    
    {/* Visual Column */}
    <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
      {visual}
    </div>
  </div>
);

// Main Component
const ZigZagFeatures = () => {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-12 md:gap-16">
      {/* Row 1: Customizable Split View */}
      <FeatureRow
        number="01"
        headline="Customizable Split View."
        body="Resize the video and workspace effortlessly with a draggable divider that preserves video proportions. FlowTutor adapts to how you learn, letting you focus on the content that matters most at any moment."
        visual={<WorkspaceVisual />}
        isReversed={false}
      />
      
      {/* Row 2: Context-Aware AI Tutor */}
      <FeatureRow
        number="02"
        headline="Context-Aware AI Tutor."
        body="Ask questions naturally while you learn. Powered by AI that understands the video itself, FlowTutor delivers accurate, relevant explanations exactly when you need them—no searching, no guesswork."
        visual={<ChatBubbleVisual />}
        isReversed={true}
      />
      
      {/* Row 3: Smart Notes */}
      <FeatureRow
        number="03"
        headline="Smart Notes."
        body="Capture ideas as you watch with flexible, formatted notes designed for real learning. Organize key concepts your way and turn passive watching into active understanding."
        visual={<DividerVisual />}
        isReversed={false}
      />
      
      {/* Row 4: Instant Knowledge Checks */}
      <FeatureRow
        number="04"
        headline="Instant Knowledge Checks."
        body="Reinforce learning with quick, built-in quizzes generated from the tutorial content. Instantly see what you've mastered and what needs another look, so learning actually sticks."
        visual={<QuizModalVisual />}
        isReversed={true}
      />
    </div>
  );
};

export default ZigZagFeatures;
