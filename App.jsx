import React from "react";
import Overlay from "./components/Sections/Overlay";
import SkillsSection from "./components/Sections/Skills";
import TechstackSection from "./components/Sections/Techstack";
import HeroVideo from "./components/HeroVideo";
import FeaturedProjects from "./components/Sections/Projects";
import MyWordsSection from "./components/Sections/MyWords";
import ContactSection from "./components/Sections/contact";
import "./style.css";

function App() {
  return (
    <>
      <HeroVideo />
      <Overlay />
      <TechstackSection />
      <FeaturedProjects />
      <MyWordsSection />
      <SkillsSection />
      <ContactSection />
      <main></main>
    </>
  );
}

export default App;
