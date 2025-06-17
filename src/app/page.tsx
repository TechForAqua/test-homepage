"use client";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import FinalCTA from "@/components/sections/FinalCTA";
import Header from "@/components/Header";
import Team from "@/components/sections/Team";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { useEffect, useState } from "react";

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
      <Team />
      <Features />
      <Testimonials />
      <FinalCTA />
      <FAQ />
    </main>
  );
}
