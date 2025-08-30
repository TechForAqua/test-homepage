"use client";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Header from "@/components/Header";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { useEffect, useState } from "react";
import Download from "@/components/sections/Download";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <Features />
      <FAQ />
      <Download />
    </main>
  );
}
