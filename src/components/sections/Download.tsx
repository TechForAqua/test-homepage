"use client";

import { motion } from "framer-motion";
import { downloadSectionContent } from "@/lib/Newcomponents-data";
import { Button } from "@/components/ui/button";
import { DownloadCloud, Apple, Mic, GitBranch } from "lucide-react";
import React from "react";

const iconMap: { [key: string]: React.ElementType } = {
  apple: Apple,
  linux: GitBranch,
  windows: Mic,
  default: DownloadCloud,
};

const Download = () => {
  return (
    <section
      id="download"
      className="relative bg-background text-foreground py-16 sm:py-24 md:py-32 overflow-hidden"
    >
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
            {downloadSectionContent.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {downloadSectionContent.subheadline}
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
        >
          {downloadSectionContent.downloads.map((download, index) => {
            const Icon = iconMap[download.icon] || iconMap.default;
            return (
              <motion.a
                key={index}
                href={download.link}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <div className="w-full bg-card border border-border rounded-lg p-4 sm:p-6 text-foreground hover:bg-muted/50 transition-colors flex items-center">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-4" />
                  <span className="text-sm sm:text-base font-semibold">
                    {download.os}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
