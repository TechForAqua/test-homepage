"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
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

const bentoCards = [
  {
    type: "large",
    className: "lg:col-span-2 lg:row-span-2",
    badge: {
      icon: (
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      text: "Terminal Agent",
      color:
        "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 border border-green-300 dark:border-green-700",
    },
    title: "Run paper code instantly",
    desc: "No setup, no dependencies, no friction. Just paste a paper URL and start exploring the code in seconds.",
    content: (
      <div className="bg-background/80 rounded-lg p-4 font-mono text-sm border border-border mt-6">
        <div className="flex items-center mb-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-muted-foreground">LeSearch Terminal</span>
        </div>
        <div className="space-y-1">
          <div className="text-green-500">$ lesearch run attention-paper</div>
          <div className="text-muted-foreground">✓ Environment ready</div>
          <div className="text-muted-foreground">✓ Dependencies installed</div>
          <div className="text-green-500">$ python train.py</div>
          <div className="text-muted-foreground">Training started...</div>
        </div>
      </div>
    ),
    bg: "bg-card dark:bg-card/80",
    text: "text-foreground",
    border: "border border-border",
    hover: "hover:shadow-2xl hover:border-primary/40",
  },
  {
    type: "small",
    badge: {
      icon: (
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
      ),
      text: "PDF Q&A",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-300 dark:border-blue-700",
    },
    title: "Chat with papers",
    desc: "Ask questions about any research paper and get answers with exact citations and page references.",
    bg: "bg-card dark:bg-card/80",
    text: "text-foreground",
    border: "border border-border",
    hover: "hover:shadow-xl hover:border-primary/30",
  },
  {
    type: "small",
    badge: {
      icon: (
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
      ),
      text: "Smart Editor",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-300 dark:border-blue-700",
    },
    title: "Code-aware writing",
    desc: "Write notes and papers with full context of the code you&apos;re exploring. Auto-complete with research insights.",
    bg: "bg-card dark:bg-card/80",
    text: "text-foreground",
    border: "border border-border",
    hover: "hover:shadow-xl hover:border-primary/30",
  },
  {
    type: "small",
    badge: {
      icon: (
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
      ),
      text: "Graph View",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-300 dark:border-blue-700",
    },
    title: "Connect ideas",
    desc: "Visualize connections between papers, code, and your notes. See the bigger picture of your research.",
    extra: (
      <div className="absolute top-4 right-4">
        <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 px-2 py-1 rounded-full border border-yellow-300 dark:border-yellow-700">
          Coming Soon
        </span>
      </div>
    ),
    bg: "bg-card dark:bg-card/80",
    text: "text-foreground",
    border: "border border-border",
    hover: "hover:shadow-xl hover:border-primary/30",
  },
  {
    type: "medium",
    className: "lg:col-span-2",
    title: "Everything in one place",
    desc: "Stop juggling between 10 different tools. LeSearch AI brings papers, code, terminal, and notes into one seamless workspace.",
    tags: ["PDF Viewer", "Code Editor", "Terminal", "Notes", "AI Assistant"],
    bg: "bg-card dark:bg-card/80",
    text: "text-foreground",
    border: "border border-border",
    hover: "hover:shadow-xl hover:border-primary/30",
  },
];

const Solution = () => {
  return (
    <section
      id="solution"
      className="relative bg-background py-24 md:py-32 text-foreground grid-pattern"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0.2, y: 30 }}
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
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            LeSearch AI eliminates the friction between reading papers and
            running code. Everything you need in one minimalist interface.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {bentoCards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`relative rounded-2xl p-6 md:p-8 group overflow-hidden ${
                card.bg
              } ${card.text} ${card.border} ${card.className || ""} ${
                card.hover
              } transition-all duration-300`}
            >
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="grid-pattern h-full w-full" />
              </div>
              <div className="relative z-10">
                {card.badge && (
                  <div
                    className={`inline-flex items-center mb-4 px-3 py-1 rounded-full text-xs font-semibold ${card.badge.color}`}
                  >
                    {card.badge.icon}
                    {card.badge.text}
                  </div>
                )}
                <h3
                  className={`font-bold mb-3 text-lg md:text-2xl ${card.text} ${
                    card.type === "large" ? "md:text-3xl" : ""
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mb-4 md:mb-6 ${
                    card.type === "large" ? "text-lg" : "text-sm"
                  } text-muted-foreground`}
                >
                  {card.desc}
                </p>
                {card.content}
                {card.tags && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-background dark:bg-muted rounded-full text-sm font-medium text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {card.extra}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ready to transform your research workflow?
          </p>
          <button className="btn-secondary">Join the waitlist</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
