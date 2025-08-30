"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShinyButton } from "../magicui/shiny-button";
import { Badge } from "../ui/badge";
import { heroSectionContent } from "@/lib/Newcomponents-data";
import Link from "next/link";
import { Github } from "lucide-react";

const Hero = () => {
  const [terminalContent, setTerminalContent] = useState<
    Array<{ type: string; text: string; delay?: number; cursor?: boolean }>
  >([]);

  const terminalSequence = useMemo(
    () => heroSectionContent.terminalAnimation.sequence,
    []
  );

  const animateTerminal = useCallback(() => {
    let index = 0;
    const animate = () => {
      if (index < terminalSequence.length) {
        setTerminalContent((prev) => [...prev, terminalSequence[index]]);
        index++;
        const nextDelay =
          (terminalSequence[index - 1] as { delay?: number })?.delay || 300;
        setTimeout(animate, nextDelay);
      }
    };
    animate();
  }, [terminalSequence]);

  useEffect(() => {
    const timer = setTimeout(() => {
      animateTerminal();
    }, 1000);

    return () => clearTimeout(timer);
  }, [animateTerminal]);

  const restartAnimation = () => {
    setTerminalContent([]);
    setTimeout(() => {
      animateTerminal();
    }, 100);
  };

  return (
    <div className=" min-h-screen mt-10 ">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-background">
        <div className="grid-pattern h-full" />
        <div className="grid-pattern h-full" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container-padding pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href={heroSectionContent.badge.link}>
                <ShinyButton className="flex mb-8 mx-auto w-fit px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {heroSectionContent.badge.text}
                </ShinyButton>
              </Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-balance text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {heroSectionContent.headline}
            </motion.h1>
            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {heroSectionContent.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href={heroSectionContent.cta.primary.link}>
                <Button size="lg" className="px-8">
                  {heroSectionContent.cta.primary.text}
                </Button>
              </Link>
              <Link href={heroSectionContent.cta.secondary.link}>
                <Button variant="outline" size="lg" className="px-8">
                  <Github className="w-5 h-5 mr-2" />
                  {heroSectionContent.cta.secondary.text}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Terminal Agent Demo */}
          <motion.div
            className="relative mt-24 max-w-5xl mx-auto border border-gray-200/50 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* Hand-drawn arrow pointing to terminal */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 hidden md:block ">
              <svg className="w-40 h-20" viewBox="0 0 160 80">
                <path
                  className="stroke-current opacity-60 text-primary"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20,15 Q80,5 120,25 L115,20 M120,25 L118,18"
                />
                <text
                  x="10"
                  y="12"
                  fontSize="15"
                  fill="currentColor"
                  stroke="none"
                  fontWeight="600"
                  className="text-primary"
                >
                  See it in action
                </text>
              </svg>
            </div>

            <div
              className={cn(
                "terminal cursor-pointer h-[500px] overflow-hidden relative rounded-lg",
                "border border-zinc-300/50 bg-zinc-950/95  backdrop-blur-sm",
                "shadow-lg hover:shadow-xl transition-all duration-300"
              )}
              onClick={restartAnimation}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between  py-4 border-b border-zinc-800/50 px-4 bg-zinc-950/95">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-zinc-400 font-medium">
                    LeSearch Terminal Agent
                  </span>
                </div>
                <Badge
                  className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/20 px-3 py-1 text-xs"
                >
                  <svg
                    className="w-3 h-3 mr-1.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Safe Sandbox
                </Badge>
              </div>

              {/* Terminal Content */}
              <div className="overflow-y-auto h-[calc(100%-80px)] font-mono text-sm px-4 py-2 bg-zinc-950/50 scrollbar-hide">
                {terminalContent.map((item, index) => {
                  if (!item || typeof item.type === "undefined") return null;

                  return (
                    <div
                      key={index}
                      className={cn(
                        "mb-1.5 whitespace-pre-wrap break-words",
                        item.type === "command"
                          ? "text-green-400"
                          : "text-zinc-400 ml-5"
                      )}
                    >
                      {item.type === "command" && !item.cursor && (
                        <span className="text-zinc-500">$ </span>
                      )}
                      <span
                        className={cn(
                          item.type === "output" && item.text.includes("📊") && "text-blue-400",
                          item.type === "output" && item.text.includes("💡") && "text-yellow-400",
                          item.type === "output" && item.text.includes("•") && "text-zinc-300"
                        )}
                        dangerouslySetInnerHTML={{ __html: item.text || "" }}
                      />
                      {item.cursor && (
                        <span className="animate-pulse text-zinc-500">█</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <p className="text-sm font-medium text-muted-foreground">
              Trusted by researchers at CMU, MIT, Stanford, and leading AI labs
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
