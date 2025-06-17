"use client";

import { motion } from "framer-motion";
import { TextEffect } from "@/components/motion/text-effect";
import { ExternalLink } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";

const testimonials = [
  {
    name: "Dr. Raj Patel",
    role: "Professor of Computer Science",
    university: "Carnegie Mellon University",
    linkedin: "https://linkedin.com/in/raj-patel-cmu",
    initials: "RP",
    quote:
      "LeSearch has transformed how my graduate students approach literature reviews. The integrated code execution with paper analysis has reduced our research iteration time by 60%.",
  },
  {
    name: "Sarah Chen",
    role: "PhD Candidate, Machine Learning",
    university: "Carnegie Mellon University",
    linkedin: "https://linkedin.com/in/sarah-chen-ml-cmu",
    initials: "SC",
    quote:
      "As a CMU PhD student, I need tools that keep up with rapid experimentation. LeSearch's unified workspace lets me seamlessly move from reading papers to implementing and testing ideas.",
  },
  {
    name: "Dr. Marcus Thompson",
    role: "Research Scientist",
    university: "Google Research",
    linkedin: "https://linkedin.com/in/marcus-thompson-research",
    initials: "MT",
    quote:
      "After graduating from CMU, I needed a platform that could handle enterprise-scale research. LeSearch's privacy-first architecture makes it perfect for sensitive AI research projects.",
  },
  {
    name: "Priya Sharma",
    role: "Research Associate",
    university: "Microsoft Research",
    linkedin: "https://linkedin.com/in/priya-sharma-msft",
    initials: "PS",
    quote:
      "Fresh out of my Master's program, LeSearch helped me transition from academic research to industry. The knowledge graph feature bridges the gap between theoretical understanding and practical implementation.",
  },
  {
    name: "Dr. James Liu",
    role: "Director of AI Research",
    university: "OpenAI",
    linkedin: "https://linkedin.com/in/james-liu-openai",
    initials: "JL",
    quote:
      "Managing a team of researchers requires tools that scale with complexity. LeSearch's collaborative features and terminal integration have streamlined our entire research pipeline.",
  },
  {
    name: "Elena Rodriguez",
    role: "Graduate Research Assistant",
    university: "Carnegie Mellon University",
    linkedin: "https://linkedin.com/in/elena-rodriguez-cmu",
    initials: "ER",
    quote:
      "Working on my thesis at CMU, I needed something more powerful than traditional research tools. LeSearch's AI-assisted paper analysis has been invaluable for my computer vision research.",
  },
  {
    name: "Dr. Ahmed Hassan",
    role: "Principal Research Scientist",
    university: "DeepMind",
    linkedin: "https://linkedin.com/in/ahmed-hassan-deepmind",
    initials: "AH",
    quote:
      "The reproducibility crisis in ML research demanded better tools. LeSearch's ability to execute code directly from papers while maintaining proper documentation has been a game-changer.",
  },
  {
    name: "Melissa Park",
    role: "Postdoctoral Researcher",
    university: "Carnegie Mellon University",
    linkedin: "https://linkedin.com/in/melissa-park-cmu",
    initials: "MP",
    quote:
      "Transitioning from my PhD to postdoc work at CMU, LeSearch helped me quickly get up to speed with new research domains. The intelligent search across papers and code saves hours daily.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-full max-w-sm sm:w-80 lg:w-96 xl:w-[400px] bg-card border border-border p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-ring/20">
      <p className="text-card-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed font-medium">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs sm:text-sm flex-shrink-0">
            {testimonial.initials}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-card-foreground text-sm sm:text-base leading-tight">
              {testimonial.name}
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">
              {testimonial.role}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
              {testimonial.university}
            </p>
          </div>
        </div>
        <a
          href={testimonial.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1.5 sm:p-2 hover:bg-accent rounded-full flex-shrink-0"
          aria-label={`Visit ${testimonial.name}'s LinkedIn profile`}
        >
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { openDialog } = useWaitlist();
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 xl:py-28 relative overflow-hidden bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <TextEffect
            preset="fade-in-blur"
            as="h2"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-foreground leading-tight"
          >
            Trusted by{" "}
            <span className="text-primary">Researchers Worldwide</span>
          </TextEffect>
          <div className="mt-3 sm:mt-4 lg:mt-6">
            <TextEffect
              preset="fade-in-blur"
              delay={0.2}
              as="p"
              className="text-sm sm:text-base lg:text-xl xl:text-2xl text-muted-foreground max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed"
            >
              Join leading researchers who have transformed their workflow with
              LeSearch AI
            </TextEffect>
          </div>
        </div>

        {/* Desktop & Tablet Marquee */}
        <div className="relative hidden sm:block">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-48 xl:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 lg:w-48 xl:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden mask-gradient-horizontal">
            {/* Faster animated container */}
            <div className="flex gap-4 sm:gap-6 lg:gap-8 animate-marquee-fast">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`first-${index}`}
                  testimonial={testimonial}
                />
              ))}
              {/* Second set for seamless looping */}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`second-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="sm:hidden">
          <div className="space-y-4">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="w-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Mobile show more button */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2 rounded-lg border border-border hover:border-ring/30">
              View More Testimonials
            </button>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-card-foreground">
                Ready to Transform Your Research?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Join thousands of researchers already using LeSearch AI to
                accelerate their work.
              </p>
              <motion.button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-10 rounded-lg transition-all duration-200 text-sm sm:text-base lg:text-lg shadow-sm hover:shadow-md border border-primary/20 hover:border-primary/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Research Journey
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
