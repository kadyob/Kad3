import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Certifications } from "../components/Certifications";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
    </>
  );
};
