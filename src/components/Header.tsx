"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20">
      <nav className="container-padding py-3 flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <Image
                src="/Lesearch-logo.svg"
                alt="LeSearch Logo"
                width={20}
                height={20}
                className="w-5 h-5 filter-none dark:invert"
              />
            </div>
            <span className="text-lg font-bold text-black dark:text-white">
              LeSearch
            </span>
          </div>
        </motion.div>

        {/* Center Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-6 text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="#problem"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          >
            Problem
          </a>
          <a
            href="#features"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          >
            About
          </a>
          <a
            href="#pricing"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          >
            Pricing
          </a>
        </motion.div>

        {/* Right side: Dark mode toggle + CTA */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Dark mode toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-100/70 dark:bg-gray-800/70 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all duration-200 border border-gray-200/30 dark:border-gray-700/30"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg
                className="w-4 h-4 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm hidden md:inline-block">
            Join the waitlist
          </button>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
