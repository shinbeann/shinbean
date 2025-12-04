import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

 type KidneyQuestScreen = "quiz" | "success";

const screenVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const KidneyQuestInteractiveDemo = () => {
  const [currentScreen, setCurrentScreen] = useState<KidneyQuestScreen>("quiz");
  const [isShaking, setIsShaking] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const triggerShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  };

  const handleMissClick = () => {
    if (currentScreen === "quiz") {
      triggerShake();
    }
  };

  const handleCorrectAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowSuccessOverlay(true);
    setTimeout(() => {
      setShowSuccessOverlay(false);
      setCurrentScreen("success");
    }, 700);
  };


  const handleReplay = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setCurrentScreen("quiz");
  };

  return (
    <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-6 sm:flex-row">
      {/* Static Language screen phone */}
      <div
        className="relative flex aspect-[9/16] w-[70%] max-w-xs items-center justify-center rounded-[2.5rem] border border-border bg-gradient-to-b from-card to-background shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
        aria-label="KidneyQuest language selection screen"
      >
        {/* Dynamic island / notch */}
        <div className="pointer-events-none absolute top-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full bg-foreground/90 px-4 py-1.5">
          <span className="h-1.5 w-10 rounded-full bg-background/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-background/70" />
        </div>

        {/* Inner screen */}
        <div className="relative flex h-[92%] w-[92%] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary/10 to-accent/20">
          <img
            src="/kidneyquest-language.png"
            alt="KidneyQuest language selection screen with four language options"
            className="h-[92%] w-auto object-contain pointer-events-none select-none drop-shadow-xl"
          />
        </div>
      </div>

      {/* Interactive Quiz / Success phone */}
      <motion.div
        className="relative flex aspect-[9/16] w-[70%] max-w-xs items-center justify-center rounded-[2.5rem] border border-border bg-gradient-to-b from-card to-background shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
        animate={isShaking ? { x: [0, -4, 4, -3, 3, 0] } : { x: 0 }}
        transition={isShaking ? { duration: 0.4, ease: "easeInOut" } : undefined}
        onClick={handleMissClick}
        aria-label="Interactive KidneyQuest quiz demo"
      >
        {/* Dynamic island / notch */}
        <div className="pointer-events-none absolute top-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full bg-foreground/90 px-4 py-1.5">
          <span className="h-1.5 w-10 rounded-full bg-background/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-background/70" />
        </div>

        {/* Inner screen */}
        <div className="relative h-[92%] w-[92%] overflow-hidden rounded-[2rem] bg-background/95">
          <AnimatePresence mode="wait">
            {currentScreen === "quiz" && (
              <motion.div
                key="quiz"
                variants={screenVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-[hsl(var(--kidneyquest-gold))] to-[hsl(var(--kidneyquest-teal))]"
              >
                <img
                  src="/kidneyquest-quiz.png"
                  alt="KidneyQuest quiz question screen showing kidney function question and answer options"
                  className="h-[92%] w-auto object-contain pointer-events-none select-none drop-shadow-xl"
                />

                {/* Correct answer hotspot (Option B) */}
                <button
                  type="button"
                  data-hotspot
                  onClick={handleCorrectAnswer}
                  className="hover-scale absolute left-[8%] right-[8%] top-[56%] h-[10%] cursor-pointer rounded-xl bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/70"
                  aria-label="Select correct answer"
                />

                {/* Optional success overlay before transitioning */}
                <AnimatePresence>
                  {showSuccessOverlay && (
                    <motion.div
                      key="success-overlay"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/60"
                    >
                      <div className="flex flex-col items-center gap-2 rounded-2xl bg-card px-6 py-4 shadow-lg">
                        <CheckCircle2 className="h-8 w-8 text-success" />
                        <p className="text-sm font-medium text-foreground">Nice! That&apos;s correct.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {currentScreen === "success" && (
              <motion.div
                key="success"
                variants={screenVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-emerald-700/70 to-emerald-500/70"
              >
                <img
                  src="/kidneyquest-success.png"
                  alt="KidneyQuest success screen showing restored healthy kidney illustration"
                  className="h-[92%] w-auto object-contain pointer-events-none select-none drop-shadow-xl"
                />

                {/* Replay button overlay */}
                <button
                  type="button"
                  data-hotspot
                  onClick={handleReplay}
                  className="hover-scale absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                >
                  Replay demo
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
