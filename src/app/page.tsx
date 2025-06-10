import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import FinalCTA from "@/components/sections/FinalCTA";
import Header from "@/components/Header";
import Team from "@/components/sections/Team";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
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
