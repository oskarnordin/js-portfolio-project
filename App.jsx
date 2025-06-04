import React from 'react';
import Overlay from './components/Sections/Overlay';
import SkillsSection from './components/Sections/Skills';
import PrologueSection from './components/Sections/Prologue';
import HeroVideo from './components/HeroVideo';
import FeaturedProjects from './components/Sections/Projects';
import MoodboardSection from './components/Sections/Moodboard';
import ContactSection from './components/Sections/Contact';
import { ThemeProvider } from 'styled-components';
import { theme } from '/components/theme';
import './style.css';
import 'hamburgers/dist/hamburgers.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeroVideo />
        <Overlay />
        <PrologueSection />
        <FeaturedProjects />
        <MoodboardSection />
        <SkillsSection />
        <ContactSection />
      </ThemeProvider>
      <main></main>
    </>
  );
}

export default App;
