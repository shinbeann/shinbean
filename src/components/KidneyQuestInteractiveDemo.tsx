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
      {/* Static Language screen phone using provided frame image */}
      <div
        className="relative flex w-[70%] max-w-xs items-center justify-center"
        aria-label="KidneyQuest language selection screen"
      >
        <img
          src="/kidneyquest-language-frame.png"
          alt="KidneyQuest language selection screen inside a mobile phone frame"
          className="h-auto w-full object-contain pointer-events-none select-none drop-shadow-xl"
        />
      </div>

      {/* Interactive Quiz / Success phone using provided frame image */}
      <motion.div
        className="relative flex w-[70%] max-w-xs items-center justify-center"
        animate={isShaking ? { x: [0, -4, 4, -3, 3, 0] } : { x: 0 }}
        transition={isShaking ? { duration: 0.4, ease: "easeInOut" } : undefined}
        onClick={handleMissClick}
        aria-label="Interactive KidneyQuest quiz demo"
      >
        {/* Base frame image */}
        <img
          src="/kidneyquest-quiz-frame.png"
          alt="KidneyQuest quiz question screen inside a mobile phone frame"
          className="h-auto w-full object-contain pointer-events-none select-none drop-shadow-xl"
        />

        {/* Interactive layer over the frame */}
        <div className="pointer-events-none absolute inset-0">
          <AnimatePresence mode="wait">
            {currentScreen === "quiz" && (
              <motion.div
                key="quiz"
                variants={screenVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative h-full w-full"
              >
                {/* Correct answer hotspot (Option B) */}
                <button
                  type="button"
                  data-hotspot
                  onClick={handleCorrectAnswer}
                  className="pointer-events-auto absolute left-[15%] right-[15%] top-[54%] h-[8%] cursor-pointer rounded-xl bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/70"
                  aria-label="Select correct answer"
                />

                {/* Optional success overlay before transitioning */}
                <AnimatePresence>
                  {showSuccessOverlay && (
                    <motion.div
                      key="success-overlay"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="pointer-events-none absolute inset-[22%_10%] flex items-center justify-center rounded-2xl bg-background/80 shadow-lg"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-8 w-8 text-success" />
                        <p className="text-sm font-medium text-foreground">
                          Nice! That&apos;s correct.
                        </p>
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
                className="pointer-events-none absolute inset-[22%_10%] flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-emerald-700/80 to-emerald-500/80 text-primary-foreground shadow-lg"
              >
                <CheckCircle2 className="mb-2 h-10 w-10" />
                <p className="mb-3 text-sm font-semibold tracking-wide">
                  Kidneys restored!
                </p>
                <button
                  type="button"
                  data-hotspot
                  onClick={handleReplay}
                  className="pointer-events-auto rounded-full bg-primary px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
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
