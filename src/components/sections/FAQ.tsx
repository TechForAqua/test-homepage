"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TextEffect } from "@/components/motion/text-effect";
import { faqContent } from "@/lib/Newcomponents-data";

const faqs = faqContent;

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FAQItem = ({
  question,
  answer,
  isOpen,
  toggleOpen,
  index,
}: FAQItemProps) => (
  <motion.div
    className="border-b border-border overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
    <button
      className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
      onClick={toggleOpen}
    >
      <span className="font-medium text-lg">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 text-muted-foreground">{answer}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 pb-8 sm:py-28 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-hidden">
          <TextEffect
            preset="fade-in-blur"
            as="h2"
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Frequently&nbsp; Asked&nbsp; Questions
          </TextEffect>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-lg border border-border">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
    
        </motion.div>
      </div>
    </section>
  );
}
