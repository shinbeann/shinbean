import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IterationCard {
  id: number;
  title: string;
  heuristic: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeDescription: string;
  afterDescription: string;
}

interface StackedCardCarouselProps {
  cards: IterationCard[];
}

const StackedCardCarousel: React.FC<StackedCardCarouselProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(cards.length - 1, prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full pb-20">
      {/* Card Stack Container */}
      <div className="relative min-h-[680px] md:min-h-[520px]">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;
          const isFuture = index > activeIndex;
          const offset = index - activeIndex;

          // Calculate stacking position - cards behind peek out from bottom
          const stackOffset = isFuture ? offset : 0;
          const yOffset = isFuture ? stackOffset * 20 : isPast ? -30 : 0;
          const scale = 1; // All cards same size
          const zIndex = cards.length - index; // Higher index = lower z-index (behind)
          const opacity = isPast ? 0 : 1;

          // Subtle visual differentiation for stacked cards
          const bgOpacity = isFuture ? 0.6 - stackOffset * 0.15 : 1;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                y: yOffset,
                scale: scale,
                opacity: opacity,
                x: isPast ? -100 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ 
                zIndex: isActive ? cards.length + 1 : zIndex,
              }}
              className={`
                absolute top-0 left-0 right-0 w-full
                ${isActive ? "pointer-events-auto" : "pointer-events-none"}
              `}
            >
              <div
                className={`
                  bg-[#0A0A0A] border rounded-2xl p-8 md:p-10 transition-colors duration-300
                  ${isActive 
                    ? "border-purple-500/40 shadow-2xl shadow-purple-500/10" 
                    : isFuture 
                      ? "border-white/10" 
                      : "border-white/5"
                  }
                `}
                style={{
                  opacity: isFuture ? bgOpacity : 1,
                }}
              >
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    {/* Step indicator */}
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg">
                      {card.id}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                  </div>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-wider w-fit">
                    {card.heuristic}
                  </span>
                </div>

                {/* Comparison Grid - 50/50 Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before Column */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-orange-400">Before</h4>
                    <div className="aspect-video bg-neutral-900/50 border border-orange-500/20 rounded-lg overflow-hidden">
                      <img
                        src={card.beforeImage}
                        alt={card.beforeAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {card.beforeDescription}
                    </p>
                  </div>

                  {/* After Column */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-emerald-400">After</h4>
                    <div className="aspect-video bg-neutral-900/50 border border-emerald-500/20 rounded-lg overflow-hidden">
                      <img
                        src={card.afterImage}
                        alt={card.afterAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {card.afterDescription}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-24 md:mt-32">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`
            w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200
            ${activeIndex === 0
              ? "border-white/10 text-neutral-600 cursor-not-allowed"
              : "border-zinc-700 text-zinc-200 hover:border-purple-500/50 hover:text-purple-400"
            }
          `}
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${index === activeIndex
                  ? "bg-purple-500 w-8"
                  : "bg-white/20 hover:bg-white/40"
                }
              `}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={activeIndex === cards.length - 1}
          className={`
            w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200
            ${activeIndex === cards.length - 1
              ? "border-white/10 text-neutral-600 cursor-not-allowed"
              : "border-zinc-700 text-zinc-200 hover:border-purple-500/50 hover:text-purple-400"
            }
          `}
          aria-label="Next card"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Card Counter */}
      <p className="text-center text-sm text-neutral-500 mt-4 font-mono">
        {activeIndex + 1} / {cards.length}
      </p>
    </div>
  );
};

export default StackedCardCarousel;
