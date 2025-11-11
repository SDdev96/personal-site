// src/pages/Portfolio.tsx
import { useAOS } from "../hooks/useAOS";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Portfolio/Hero/Hero";
import { Skills } from "../components/sections/Portfolio/Skills/Skills";
import { Experiences } from "../components/sections/Portfolio/Experiences/Experiences";
import { Footer } from "../components/layout/Footer";
import { Projects } from "../components/sections/Portfolio/Projects/Projects";

export const Portfolio = () => {
  useAOS({
    duration: 1000,
    easing: "ease-in-sine",
    once: false,
    offset: 100,
    delay: 0,
    mirror: true,
  });
  return (
    <div className="bg-light" style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
};
