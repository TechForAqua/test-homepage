"use client";

import { motion } from "framer-motion";
import { TextEffect } from "@/components/motion/text-effect";
import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "PhD in Machine Learning",
    university: "Stanford University",
    linkedin: "https://linkedin.com/in/sarahchen-ml",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote:
      "LeSearch's ability to parse references and execute code in one platform has revolutionized my research workflow. What used to take hours now takes minutes.",
  },
  {
    name: "Prof. Marcus Rodriguez",
    role: "Research Director, AI Lab",
    university: "MIT",
    linkedin: "https://linkedin.com/in/marcus-rodriguez-ai",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote:
      "The unified workspace eliminates the constant tool switching that plagued our research process. My team's productivity has increased by 40%.",
  },
  {
    name: "Dr. Priya Patel",
    role: "Postdoctoral Researcher",
    university: "Carnegie Mellon",
    linkedin: "https://linkedin.com/in/priya-patel-research",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    quote:
      "Being able to read papers with AI assistance while simultaneously testing code implementations is a game-changer for reproducibility research.",
  },
  {
    name: "Dr. James Liu",
    role: "Senior Research Scientist",
    university: "Google DeepMind",
    linkedin: "https://linkedin.com/in/james-liu-deepmind",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote:
      "LeSearch's privacy-first approach with local model support makes it perfect for working with sensitive research. The knowledge graph feature is brilliant.",
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Principal Researcher",
    university: "Microsoft Research",
    linkedin: "https://linkedin.com/in/elena-vasquez-nlp",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote:
      "The smart editor understands academic context unlike any other tool. Writing papers with research-aware autocomplete feels like having an AI research assistant.",
  },
  {
    name: "Dr. Ahmed Hassan",
    role: "Associate Professor",
    university: "Oxford University",
    linkedin: "https://linkedin.com/in/ahmed-hassan-oxford",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote:
      "The terminal agent that clones repos and executes code while I'm reading related papers is exactly what I needed. No more context switching between tools.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-80 bg-card p-6 rounded-lg shadow-sm border border-border">
      <p className="text-card-foreground mb-4 text-sm leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div>
            <h4 className="font-medium text-card-foreground text-sm">
              {testimonial.name}
            </h4>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.university}
            </p>
          </div>
        </div>
        <a
          href={testimonial.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1"
          aria-label={`Visit ${testimonial.name}'s LinkedIn profile`}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <TextEffect
            preset="fade-in-blur"
            as="h2"
            className="text-3xl sm:text-4xl font-bold mb-6 text-foreground"
          >
            Trusted by{" "}
            <span className="text-primary">Researchers Worldwide</span>
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            delay={0.2}
            as="p"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Join leading researchers who have transformed their workflow with
            LeSearch AI
          </TextEffect>
        </div>

        {/* Desktop Marquee */}
        <div className="relative hidden md:block">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            {/* Single animated container with both sets */}
            <div className="flex gap-8 animate-marquee">
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

        {/* Mobile Grid */}
        <div className="md:hidden space-y-6">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-medium text-card-foreground mb-2">
              Ready to Transform Your Research?
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Join thousands of researchers already using LeSearch AI to
              accelerate their work.
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Research Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
