"use client";

import {
  Terminal,
  FileText,
  PenTool,
  Shield,
  Network,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/motion/text-effect";
import { useState, useEffect } from "react";

// Static predefined patterns to avoid hydration issues
const STATIC_PATTERNS = [
  [
    [7, 1],
    [8, 3],
    [9, 2],
    [10, 4],
    [7, 5],
  ],
  [
    [8, 2],
    [9, 4],
    [7, 3],
    [10, 1],
    [8, 5],
  ],
  [
    [9, 1],
    [7, 4],
    [8, 2],
    [10, 5],
    [9, 3],
  ],
  [
    [10, 2],
    [8, 1],
    [9, 5],
    [7, 3],
    [10, 4],
  ],
  [
    [7, 2],
    [9, 1],
    [8, 4],
    [10, 3],
    [7, 5],
  ],
  [
    [8, 3],
    [10, 1],
    [9, 4],
    [7, 2],
    [8, 5],
  ],
] as [number, number][][];

// GridPattern Component for card backgrounds
function GridPattern({
  width = 20,
  height = 20,
  x = -12,
  y = 4,
  squares,
  className = "",
  ...props
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: [number, number][];
  className?: string;
  [key: string]: any;
}) {
  const [patternId] = useState(
    () => `pattern-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  return (
    <svg
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: [number, number], index: number) => (
            <rect
              key={index}
              strokeWidth="0"
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Clean feature mapping - no colors, just clean monochromatic design
const features = [
  {
    title: "Terminal Agent",
    description:
      "Clone GitHub repos, execute safe commands, and get intelligent codebase insights. The only tool combining paper reading with seamless code execution.",
    icon: Terminal,
    category: "Code Execution",
  },
  {
    title: "AI-Powered PDF Reader",
    description:
      "Advanced PDF viewer with highlighting, audio reading, and grounded citations. One-click citation fetcher with GitHub URL extraction.",
    icon: FileText,
    category: "Paper Reading",
  },
  {
    title: "Smart Editor",
    description:
      "Notion-style markdown editor with research-aware autocomplete and LaTeX support. Built for academic context, not generic coding.",
    icon: PenTool,
    category: "Writing",
  },
  {
    title: "Research Vault",
    description:
      "Local model support for sensitive papers with privacy-first design. On-premise processing for confidential research data.",
    icon: Shield,
    category: "Privacy",
  },
  {
    title: "Knowledge Graph",
    description:
      "Visual connections between papers, notes, and insights. Your 'second brain' for researchers with intelligent pattern recognition.",
    icon: Network,
    category: "Organization",
  },
  {
    title: "Unified Workspace",
    description:
      "Single interface for papers, code, notes, web, and LLM interactions. Eliminates tool switching for seamless research workflow.",
    icon: Layers,
    category: "Integration",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [pattern, setPattern] = useState<[number, number][]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Use static pattern based on index to ensure consistency
    setPattern(STATIC_PATTERNS[index % STATIC_PATTERNS.length]);
  }, [index]);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-border/60 hover:bg-muted/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        bounce: 0.2,
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2 },
      }}
    >
      {/* Subtle Grid Pattern Background - only visible on hover and after mount */}
      {isMounted && (
        <div
          className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-30"
          style={{
            maskImage: "linear-gradient(white, transparent)",
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-muted/20 to-muted/5 opacity-100"
            style={{
              maskImage:
                "radial-gradient(farthest-side at top, white, transparent)",
            }}
          >
            <GridPattern
              className="fill-foreground/[0.01] stroke-foreground/[0.03] mix-blend-overlay"
              squares={pattern}
            />
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="relative z-10 mb-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        <feature.icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      {/* Category Badge */}
      <div className="relative z-10 mb-3">
        <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {feature.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="mb-3 text-lg font-semibold text-card-foreground transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      {/* Minimal Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <TextEffect
            preset="fade-in-blur"
            as="h2"
            className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Six Research Tools,{" "}
            <span className="text-primary">One Platform</span>
          </TextEffect>

          <TextEffect
            per="line"
            preset="fade-in-blur"
            delay={0.3}
            as="p"
            className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl"
          >
            From paper reading to code execution, LeSearch AI eliminates tool
            switching and accelerates your research workflow.
          </TextEffect>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-medium text-card-foreground mb-2">
              Built for Researchers
            </p>
            <p className="text-xs text-muted-foreground">
              Transform your research workflow with tools designed specifically
              for AI researchers who need both paper comprehension and code
              execution in one unified environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
