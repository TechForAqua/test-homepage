"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

    // TODO: Integrate with Supabase
    console.log("Form submitted:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
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
      <section className="relative bg-black text-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-black"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              You're on the list!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We'll notify you as soon as LeSearch AI is ready. Get ready to
              transform your research workflow.
            </p>
            <p className="text-gray-400">
              Follow us on{" "}
              <a href="#" className="text-white hover:underline">
                Twitter
              </a>{" "}
              for updates
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Subtle background pattern - Gray only */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern h-full w-full" />
      </div>

      <div className="max-w-4xl mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Ready to revolutionize
            <br />
            your research?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of
            research workflows.
          </p>
        </motion.div>

        {/* Social Proof Numbers - Simple white text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              100+
            </div>
            <div className="text-sm text-gray-400">Researchers</div>
          </div>
          <div className="w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
            <div className="text-sm text-gray-400">Universities</div>
          </div>
          <div className="w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              24/7
            </div>
            <div className="text-sm text-gray-400">Available</div>
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                >
                  <option value="" className="text-gray-900 bg-white">
                    Select your role
                  </option>
                  <option value="researcher" className="text-gray-900 bg-white">
                    Researcher
                  </option>
                  <option
                    value="phd-student"
                    className="text-gray-900 bg-white"
                  >
                    PhD Student
                  </option>
                  <option value="professor" className="text-gray-900 bg-white">
                    Professor
                  </option>
                  <option value="engineer" className="text-gray-900 bg-white">
                    Engineer
                  </option>
                  <option
                    value="data-scientist"
                    className="text-gray-900 bg-white"
                  >
                    Data Scientist
                  </option>
                  <option value="other" className="text-gray-900 bg-white">
                    Other
                  </option>
                </select>
              </div>

              {/* Institution */}
              <div>
                <label
                  htmlFor="institution"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Institution/Company
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="University or Company"
                />
              </div>
            </div>

            {/* Most Excited Feature */}
            <div>
              <label
                htmlFor="feature"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Most Excited Feature
              </label>
              <select
                id="feature"
                name="feature"
                value={formData.feature}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              >
                <option value="" className="text-gray-900 bg-white">
                  What excites you most?
                </option>
                <option
                  value="terminal-agent"
                  className="text-gray-900 bg-white"
                >
                  Terminal Agent
                </option>
                <option value="pdf-qa" className="text-gray-900 bg-white">
                  PDF Q&A
                </option>
                <option value="smart-editor" className="text-gray-900 bg-white">
                  Smart Editor
                </option>
                <option
                  value="unified-workspace"
                  className="text-gray-900 bg-white"
                >
                  Unified Workspace
                </option>
                <option
                  value="knowledge-graph"
                  className="text-gray-900 bg-white"
                >
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
              className="w-full bg-white text-black py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </motion.button>
          </form>

          {/* Privacy Note */}
          <p className="text-center text-sm text-gray-400 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
