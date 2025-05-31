"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [terminalContent, setTerminalContent] = useState<
    Array<{ type: string; text: string; delay: number; cursor?: boolean }>
  >([]);
  const [isTyping, setIsTyping] = useState(false);

  const terminalSequence = [
    { type: "command", text: "$ lesearch", delay: 100 },
    {
      type: "output",
      text: "LeSearch Terminal Agent v1.0.0 - Safe Sandbox Mode",
      delay: 500,
    },
    { type: "output", text: "Ready to help with your research...", delay: 300 },
    { type: "output", text: "", delay: 500 },
    {
      type: "command",
      text: '$ ask "What does this authentication function do?"',
      delay: 1000,
    },
    { type: "output", text: "Analyzing codebase...", delay: 800 },
    { type: "output", text: "", delay: 200 },
    { type: "command", text: "$ cat auth/middleware.py", delay: 500 },
    {
      type: "output",
      text: `def verify_jwt_token(token: str) -> dict:
    """Verify and decode JWT authentication token"""
    try:
        payload = jwt.decode(
            token, 
            settings.SECRET_KEY, 
            algorithms=["HS256"]
        )
        return payload
    except jwt.ExpiredSignatureError:
        raise AuthenticationError("Token has expired")`,
      delay: 100,
    },
    { type: "output", text: "", delay: 800 },
    { type: "output", text: "📊 Analysis:", delay: 400 },
    {
      type: "output",
      text: "This function implements JWT (JSON Web Token) authentication:",
      delay: 300,
    },
    {
      type: "output",
      text: "• Validates incoming JWT tokens using a secret key",
      delay: 200,
    },
    {
      type: "output",
      text: "• Uses HS256 algorithm for signature verification",
      delay: 200,
    },
    { type: "output", text: "• Returns decoded payload if valid", delay: 200 },
    {
      type: "output",
      text: "• Raises AuthenticationError if token is expired",
      delay: 200,
    },
    { type: "output", text: "", delay: 400 },
    {
      type: "output",
      text: "💡 Security considerations: Consider using RS256 for production",
      delay: 300,
    },
    { type: "output", text: "", delay: 500 },
    { type: "command", text: "$ ", delay: 0, cursor: true },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      animateTerminal();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const animateTerminal = () => {
    let index = 0;
    const animate = () => {
      if (index < terminalSequence.length) {
        setTerminalContent((prev) => [...prev, terminalSequence[index]]);
        index++;
        const nextDelay = terminalSequence[index - 1]?.delay || 300;
        setTimeout(animate, nextDelay);
      }
    };
    animate();
  };

  const restartAnimation = () => {
    setTerminalContent([]);
    setIsTyping(false);
    setTimeout(() => {
      setIsTyping(true);
      animateTerminal();
    }, 100);
  };

  return (
    <div id="hero" className="min-h-screen grid-pattern pt-20">
      {/* Hero Section */}
      <section className="relative container-padding pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            {/* Badge */}
            <motion.div
              className="badge-blue mb-8 mx-auto w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
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
              Early Access 2025
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-balance text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The Research
              <br />
              Operating System
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Read papers, extract insights, run code, and write ideas—all in
              one minimalist workspace.{" "}
              <span className="font-bold text-primary">
                Less Searching, More Creating.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button className="btn-primary">Join the waitlist</button>
              <button className="btn-secondary flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch the demo
              </button>
            </motion.div>
          </div>

          {/* Terminal Agent Demo */}
          <motion.div
            className="relative mt-24 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* Hand-drawn arrow pointing to terminal */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 hidden md:block">
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
              className="terminal cursor-pointer h-[450px] overflow-hidden relative"
              onClick={restartAnimation}
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-400 font-medium">
                    LeSearch Terminal Agent
                  </span>
                </div>
                <div className="badge-green">
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
                </div>
              </div>

              <div className="overflow-y-auto h-[calc(100%-80px)] font-mono text-sm">
                {terminalContent.map((item, index) => {
                  if (!item || typeof item.type === "undefined") return null;

                  return (
                    <div
                      key={index}
                      className={`${
                        item.type === "command"
                          ? "text-[#4ade80]"
                          : "text-[#e5e5e5] ml-5"
                      } mb-1`}
                    >
                      {item.type === "command" && !item.cursor && "$ "}
                      <span
                        dangerouslySetInnerHTML={{ __html: item.text || "" }}
                      />
                      {item.cursor && <span className="animate-pulse">█</span>}
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
            <p className="text-sm font-medium text-tertiary">
              Trusted by researchers at CMU, MIT, Stanford, and leading AI labs
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
