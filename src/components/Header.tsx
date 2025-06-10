"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      return window.scrollY > 10;
    }
    return false;
  });
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300`}
    >
      <div className={`mx-auto transition-all duration-300 ${
        scrolled 
          ? "max-w-3xl px-4 bg-background/90 backdrop-blur-md py-3 shadow-lg rounded-lg mt-4 border border-border/50" 
          : "max-w-7xl px-4 bg-transparent py-5"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                scrolled ? "scale-90" : ""
              } bg-accent/10 group-hover:bg-accent/20`}>
                <Image src={resolvedTheme === "dark" ? "/logo/Lesearch Logo Dark.svg" : "/logo/Lesearch Logo.svg"} alt="Logo" width={32} height={32}/>
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent transition-all duration-300 ${
                scrolled ? "text-base" : ""
              }`}>LeSearch</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center space-x-6 text-sm font-medium transition-all duration-300 ${
              scrolled ? "scale-95" : ""
            }`}
          >
            <Link href="#problem" className="text-muted-foreground hover:text-primary transition-colors">
              Problem
            </Link>
            <Link href="#solution" className="text-muted-foreground hover:text-primary transition-colors">
              Solution
            </Link>
            <Link href="#teams" className="text-muted-foreground hover:text-primary transition-colors">
              Teams
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
          </div>

          {/* Right side: Dark mode toggle + CTA */}
          <div
            className={`flex items-center space-x-3 transition-all duration-300 ${
              scrolled ? "scale-95" : ""
            }`}
          >
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-200 text-secondary-foreground"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg
                  className="w-4 h-4"
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
                  className="w-4 h-4"
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
            <Button variant="default" className="hidden md:inline-block">
              Join the waitlist
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 text-secondary-foreground"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center p-4 border-b border-border/50">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Search className="h-6 w-6 text-accent" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">LeSearch</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-secondary/50 text-secondary-foreground"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            href="#problem"
            className="text-lg font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Problem
          </Link>
          <Link
            href="#solution"
            className="text-lg font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Solution
          </Link>
          <Link
            href="#teams"
            className="text-lg font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Teams
          </Link>
          <Link
            href="#features"
            className="text-lg font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <div className="pt-4 border-t border-border/50 flex flex-col space-y-4">
            <button className="w-full bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm">
              Join the waitlist
            </button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
