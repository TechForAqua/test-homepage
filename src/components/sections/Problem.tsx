"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Problem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "Research is drowning in friction",
      subtitle:
        "Every breakthrough paper represents months of work, but accessing that knowledge takes hours of setup",
    },
    {
      number: "40%",
      text: "of productive time lost to context-switching",
      description:
        "Researchers constantly jump between papers, code editors, terminals, and note-taking apps",
    },
    {
      number: "5%",
      text: "of AI papers share source code",
      description:
        "Most breakthrough research remains locked away, impossible to reproduce or build upon",
    },
    {
      number: "81%",
      text: "of authors experiment with LLMs but report friction",
      description:
        "Current tools don't understand research context or integrate with existing workflows",
    },
  ];

  // Update current screen based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const screenIndex = Math.floor(progress * screens.length);
      setCurrentScreen(Math.min(screenIndex, screens.length - 1));
    });

    return unsubscribe;
  }, [scrollYProgress, screens.length]);

  return (
    <section
      ref={containerRef}
      className="relative bg-neutral-950 dark:bg-black text-white overflow-hidden"
      style={{ height: `${screens.length * 100}vh` }}
    >
      {/* Subtle background pattern - following Hero pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid-pattern h-full w-full" />
      </div>

      {/* Progress dots on the right - Monochrome */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 mb-6 ${
              index === currentScreen
                ? "bg-white border-white"
                : "bg-transparent border-white/40"
            }`}
          />
        ))}
      </div>

      {/* Sticky content container - Fixed positioning issue */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto container-padding text-center">
          {/* Screen 0: Title */}
          {currentScreen === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                {screens[0].title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {screens[0].subtitle}
              </p>
            </motion.div>
          )}

          {/* Screens 1-3: Stats */}
          {currentScreen > 0 && (
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Large number - Pure white, no color */}
              <div className="text-8xl md:text-9xl font-black text-white">
                {screens[currentScreen].number}
              </div>

              {/* Stat text */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {screens[currentScreen].text}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {screens[currentScreen].description}
                </p>
              </div>
            </motion.div>
          )}

          {/* Scroll indicator - Only on first screen */}
          {currentScreen === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center space-y-3">
                <span className="text-sm text-gray-400">
                  Scroll to explore the problem
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                >
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Problem;
