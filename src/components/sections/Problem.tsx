"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screens = [
  {
    title: "Research is drowning in friction",
    subtitle:
      "Every breakthrough paper represents months of work, but accessing that knowledge takes hours of setup",
    icon: "🔍",
  },
  {
    number: "40%",
    text: "of productive time lost to context-switching",
    description:
      "Researchers constantly jump between papers, code editors, terminals, and note-taking apps",
    icon: "⏱️",
  },
  {
    number: "5%",
    text: "of AI papers share source code",
    description:
      "Most breakthrough research remains locked away, impossible to reproduce or build upon",
    icon: "🔒",
  },
  {
    number: "81%",
    text: "of authors experiment with LLMs but report friction",
    description:
      "Current tools don't understand research context or integrate with existing workflows",
    icon: "🤖",
  },
];

const Problem = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(Date.now());

  const handleWheel = (e: WheelEvent) => {
    if (!sectionRef.current) return;

    const now = Date.now();
    if (now - lastScrollTime.current < 1000) return; // Debounce scroll events
    lastScrollTime.current = now;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();

    // Check if section is in viewport
    const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
    if (!isInView) return;

    // Prevent default scroll only if we're going to handle it
    if (
      (e.deltaY > 0 && currentScreen < screens.length - 1) ||
      (e.deltaY < 0 && currentScreen > 0)
    ) {
      e.preventDefault();
    }

    if (isScrolling) return;

    setIsScrolling(true);

    if (e.deltaY > 0 && currentScreen < screens.length - 1) {
      setCurrentScreen((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Add wheel event listener with passive: false to allow preventDefault
    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, [currentScreen, isScrolling]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" && currentScreen < screens.length - 1) {
        setIsScrolling(true);
        setCurrentScreen((prev) => prev + 1);
        setTimeout(() => setIsScrolling(false), 800);
      } else if (e.key === "ArrowUp" && currentScreen > 0) {
        setIsScrolling(true);
        setCurrentScreen((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentScreen, isScrolling]);

  return (
    <div
      ref={sectionRef}
      id="problem"
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      <div ref={containerRef} className="relative h-full w-full">
        {/* Progress Dots - Contained within the section */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
          {screens.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentScreen === index
                  ? "bg-primary scale-125"
                  : "bg-primary/30"
              }`}
              onClick={() => setCurrentScreen(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Screens */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-8 max-w-4xl">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-6xl mb-8"
                  initial={{ scale: 0.5, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {screens[currentScreen].icon}
                </motion.div>
                {screens[currentScreen].number && (
                  <motion.div
                    className="text-6xl font-bold mb-4 text-primary"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {screens[currentScreen].number}
                  </motion.div>
                )}
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6 text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {screens[currentScreen].title || screens[currentScreen].text}
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl text-primary max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {screens[currentScreen].subtitle ||
                    screens[currentScreen].description}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Problem;
