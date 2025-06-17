"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { submitFinalCTA } from "@/lib/supabase/waitlist";
import { toast } from "sonner";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    institution: "",
    feature: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitFinalCTA({
        name: formData.name,
        email: formData.email,
        role: formData.role,
        institution: formData.institution || undefined,
        feature: formData.feature || undefined,
      });

      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section className="relative bg-background text-foreground py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">
              You&apos;re on the list!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              We&apos;ll notify you as soon as LeSearch AI is ready. Get ready to
              transform your research workflow.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Follow us on our{" "}
              <a href="https://www.linkedin.com/company/lesearch-ai" className="text-primary underline hover:opacity-80">
                LinkedIn
              </a>{" "}
              for updates
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-background text-foreground py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid-pattern h-full w-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 text-primary">
            Ready to revolutionize
            <br />
            your research?
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of
            research workflows.
          </p>
        </motion.div>

        {/* Social Proof Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-4 sm:space-x-8 mb-8 sm:mb-12"
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              100+
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Researchers</div>
          </div>
          <div className="w-px h-8 sm:h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">15+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Universities</div>
          </div>
          <div className="w-px h-8 sm:h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              24/7
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Available</div>
          </div>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="Your full name"
                  suppressHydrationWarning
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="your@email.com"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2"
                >
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  suppressHydrationWarning
                >
                  <option value="" className="text-foreground bg-background">
                    Select your role
                  </option>
                  <option value="researcher" className="text-foreground bg-background">
                    Researcher
                  </option>
                  <option value="phd-student" className="text-foreground bg-background">
                    PhD Student
                  </option>
                  <option value="professor" className="text-foreground bg-background">
                    Professor
                  </option>
                  <option value="engineer" className="text-foreground bg-background">
                    Engineer
                  </option>
                  <option value="data-scientist" className="text-foreground bg-background">
                    Data Scientist
                  </option>
                  <option value="other" className="text-foreground bg-background">
                    Other
                  </option>
                </select>
              </div>

              {/* Institution */}
              <div>
                <label
                  htmlFor="institution"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2"
                >
                  Institution/Company
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="University or Company"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Most Excited Feature */}
            <div>
              <label
                htmlFor="feature"
                className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2"
              >
                Most Excited Feature
              </label>
              <select
                id="feature"
                name="feature"
                value={formData.feature}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                suppressHydrationWarning
              >
                <option value="" className="text-foreground bg-background">
                  What excites you most?
                </option>
                <option value="terminal-agent" className="text-foreground bg-background">
                  Terminal Agent
                </option>
                <option value="pdf-qa" className="text-foreground bg-background">
                  PDF Q&A
                </option>
                <option value="smart-editor" className="text-foreground bg-background">
                  Smart Editor
                </option>
                <option value="unified-workspace" className="text-foreground bg-background">
                  Unified Workspace
                </option>
                <option value="knowledge-graph" className="text-foreground bg-background">
                  Knowledge Graph
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-primary-foreground py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </motion.button>
          </form>

          {/* Privacy Note */}
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
