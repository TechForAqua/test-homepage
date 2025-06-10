"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

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

export default function Problem() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const [hasViewedAll, setHasViewedAll] = useState(false);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Track if all screens have been viewed
  useEffect(() => {
    if (current === screens.length - 1) {
      setHasViewedAll(true);
    }
  }, [current]);

  // Prevent main page scroll when section is at top and not all screens viewed
  useEffect(() => {
    if (!isAtTop || hasViewedAll) return;

    const preventScroll = (e: WheelEvent) => {
      if (current < screens.length - 1) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    return () => window.removeEventListener("wheel", preventScroll);
  }, [isAtTop, current, hasViewedAll]);

  // Intersection Observer for visibility and top position
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        setIsAtTop(entry.boundingClientRect.top <= 0 && entry.isIntersecting);
      },
      { 
        threshold: [0, 1],
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Wheel navigation with smooth snap - only active when section is at top
  useEffect(() => {
    if (!isAtTop) return;

    const onWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (Math.abs(e.deltaY) < 10) return;
      
      isScrolling.current = true;
      if (e.deltaY > 0 && current < screens.length - 1) {
        setCurrent((c) => c + 1);
      }
      if (e.deltaY < 0 && current > 0) {
        setCurrent((c) => c - 1);
      }
      
      setTimeout(() => (isScrolling.current = false), 1000);
      e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [current, isAtTop]);

  // Touch navigation with smooth snap - only active when section is at top
  useEffect(() => {
    if (!isAtTop) return;

    const onTouchStart = (e: TouchEvent) => (touchStartY.current = e.touches[0].clientY);
    const onTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      
      isScrolling.current = true;
      if (diff > 0 && current < screens.length - 1) {
        setCurrent((c) => c + 1);
      }
      if (diff < 0 && current > 0) {
        setCurrent((c) => c - 1);
      }
      
      setTimeout(() => (isScrolling.current = false), 1000);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [current, isAtTop]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-background text-foreground snap-start"
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      {/* Enhanced background pattern with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{ y: y1 }}
      >
        <div className="grid-pattern h-full w-full" />
      </motion.div>

      {/* Progress Dots with enhanced styling */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6">
        {screens.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer
              ${idx === current 
                ? "bg-primary border-primary scale-125 shadow-lg" 
                : "bg-transparent border-border hover:border-primary/50"}`}
            aria-label={`Go to screen ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Animated Screens with enhanced animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 flex flex-col items-center justify-center h-full w-full z-10"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -60, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        >
          <div className="max-w-4xl mx-auto container-padding text-center w-full">
            {/* Title screen */}
            {current === 0 && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-6xl mb-6 block">{screens[0].icon}</span>
                  <h2 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-8 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    {screens[0].title}
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
                    {screens[0].subtitle}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-sm text-muted-foreground">
                      {isAtTop ? "Scroll to explore the problem" : "Scroll to this section"}
                    </span>
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
                    >
                      <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
            {/* Stat screens with enhanced styling */}
            {current > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-6xl mb-6 block">{screens[current].icon}</span>
                <div className="text-8xl md:text-9xl font-black text-primary drop-shadow-xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  {screens[current].number}
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-foreground">
                    {screens[current].text}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {screens[current].description}
                  </p>
                </div>
                {/* Show continue indicator on last screen */}
                {current === screens.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <span className="text-sm text-muted-foreground">
                        Continue scrolling to explore the solution
                      </span>
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
                      >
                        <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
