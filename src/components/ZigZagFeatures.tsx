import React from "react";
import { Hand, ArrowLeftRight, Lightbulb, MessageSquare, Layers } from "lucide-react";
import ftDemoVideo from "@/assets/flowtutor/flowtutor-demo-recording.mp4";
import ftChatFeature from "@/assets/flowtutor/ft_main.png";
import ftF2 from "@/assets/flowtutor/ft_f2.png";
import ftNotes from "@/assets/flowtutor/ft_notes.png";
import ftQuizVideo from "@/assets/flowtutor/ft_quiz.mp4";

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

// Row 2 Visual: Chat Feature Screenshot with Purple Highlight
const ChatBubbleVisual = () => (
  <FeatureVisualContainer>
    <div className="w-[561px] h-[263px] max-w-full bg-neutral-900/50 relative">
      <img
        src={ftChatFeature}
        alt="FlowTutor context-aware AI chatbot"
        className="w-full h-full object-cover"
      />
      {/* Dim overlay for non-highlighted area */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Purple rectangle border on the right side with ft_f2.png inside */}
      <div className="absolute right-0 top-[0%] bottom-[0%] w-[50%] border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] overflow-hidden">
        <img
          src={ftF2}
          alt="FlowTutor chat panel detail"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </FeatureVisualContainer>
);

// Row 3 Visual: Notes Panel with Purple Highlight
const DividerVisual = () => (
  <FeatureVisualContainer>
    <div className="w-[561px] h-[263px] max-w-full bg-neutral-900/50 relative">
      <img
        src={ftChatFeature}
        alt="FlowTutor ergonomic split-screen layout"
        className="w-full h-full object-cover"
      />
      {/* Dim overlay for non-highlighted area */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Purple rectangle border on the left side with ft_notes.png inside - highlighting notes panel */}
      <div className="absolute left-0 bottom-[0%] w-[49.8%] h-[39%] border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] overflow-hidden">
        <img
          src={ftNotes}
          alt="FlowTutor notes panel detail"
          className="w-full h-full object-cover"
        />
      </div>
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
        headline="Draggable Divider"
        body="Users can resize the video and workspace dynamically."
        visual={<WorkspaceVisual />}
        isReversed={false}
      />
      
      {/* Row 2: Context-Aware AI Tutor */}
      <FeatureRow
        number="02"
        headline="Context-Aware AI Tutor."
        body="Ask questions in real time."
        visual={<ChatBubbleVisual />}
        isReversed={true}
      />
      
      {/* Row 3: Smart Notes */}
      <FeatureRow
        number="03"
        headline="Notes."
        body="Capture and organise key ideas."
        visual={<DividerVisual />}
        isReversed={false}
      />
      
      {/* Row 4: Instant Knowledge Checks */}
      <FeatureRow
        number="04"
        headline="Instant Knowledge Checks."
        body="Validate your understanding instantly with auto-generated quizzes."
        visual={<QuizModalVisual />}
        isReversed={true}
      />
    </div>
  );
};

export default ZigZagFeatures;
