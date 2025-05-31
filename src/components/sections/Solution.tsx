"use client";

import { motion } from "framer-motion";

const Solution = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative bg-white dark:bg-neutral-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-primary">
            One workspace.
            <br />
            Infinite possibilities.
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
            LeSearch AI eliminates the friction between reading papers and
            running code. Everything you need in one minimalist interface.
          </p>
        </motion.div>

        {/* Bento Grid - Original Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Terminal Agent - Large Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 lg:row-span-2 bg-neutral-950 dark:bg-neutral-900 rounded-2xl p-8 text-white relative overflow-hidden group"
          >
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid-pattern h-full w-full" />
            </div>

            <div className="relative z-10">
              <div className="badge-green mb-6 w-fit">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                Terminal Agent
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Run paper code instantly
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                No setup, no dependencies, no friction. Just paste a paper URL
                and start exploring the code in seconds.
              </p>

              {/* Mini Terminal Preview */}
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border border-white/10">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400">LeSearch Terminal</span>
                </div>
                <div className="space-y-1">
                  <div className="text-green-400">
                    $ lesearch run attention-paper
                  </div>
                  <div className="text-gray-300">✓ Environment ready</div>
                  <div className="text-gray-300">✓ Dependencies installed</div>
                  <div className="text-green-400">$ python train.py</div>
                  <div className="text-gray-300">Training started...</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PDF Q&A - Small Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 dark:bg-neutral-800 rounded-2xl p-6 group hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid-pattern h-full w-full" />
            </div>

            <div className="relative z-10">
              <div className="badge-blue mb-4 w-fit">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                PDF Q&A
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Chat with papers
              </h3>
              <p className="text-secondary text-sm">
                Ask questions about any research paper and get answers with
                exact citations and page references.
              </p>
            </div>
          </motion.div>

          {/* Smart Editor - Small Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 dark:bg-neutral-800 rounded-2xl p-6 group hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid-pattern h-full w-full" />
            </div>

            <div className="relative z-10">
              <div className="badge-blue mb-4 w-fit">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Smart Editor
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Code-aware writing
              </h3>
              <p className="text-secondary text-sm">
                Write notes and papers with full context of the code you're
                exploring. Auto-complete with research insights.
              </p>
            </div>
          </motion.div>

          {/* Knowledge Graph - Small Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 dark:bg-neutral-800 rounded-2xl p-6 group hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid-pattern h-full w-full" />
            </div>

            <div className="relative z-10">
              <div className="badge-blue mb-4 w-fit">
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Graph View
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Connect ideas
              </h3>
              <p className="text-secondary text-sm">
                Visualize connections between papers, code, and your notes. See
                the bigger picture of your research.
              </p>
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
          </motion.div>

          {/* Unified Workspace - Medium Card spanning 2 columns */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bg-gray-50 dark:bg-neutral-800 rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid-pattern h-full w-full" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                Everything in one place
              </h3>
              <p className="text-secondary text-lg mb-6 max-w-2xl">
                Stop juggling between 10 different tools. LeSearch AI brings
                papers, code, terminal, and notes into one seamless workspace.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-sm font-medium text-secondary border">
                  PDF Viewer
                </span>
                <span className="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-sm font-medium text-secondary border">
                  Code Editor
                </span>
                <span className="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-sm font-medium text-secondary border">
                  Terminal
                </span>
                <span className="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-sm font-medium text-secondary border">
                  Notes
                </span>
                <span className="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-sm font-medium text-secondary border">
                  AI Assistant
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Subtle CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-secondary mb-4">
            Ready to transform your research workflow?
          </p>
          <button className="btn-secondary">Join the waitlist</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
