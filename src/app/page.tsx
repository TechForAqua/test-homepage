import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <FinalCTA />
    </main>
  );
}
