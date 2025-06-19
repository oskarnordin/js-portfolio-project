import React from 'react';
import Overlay from './components/Sections/Overlay';
import SkillsSection from './components/Sections/Skills';
import PrologueSection from './components/Sections/Prologue';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/Sections/Projects';
import MoodboardSection from './components/Sections/Moodboard';
import ContactSection from './components/Sections/Contact';
import BlurCursor from './components/Mouse';
import { ThemeProvider } from 'styled-components';
import { theme } from '/components/theme';
import './style.css';
import 'hamburgers/dist/hamburgers.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <HeroSection />
        <Overlay />
        <PrologueSection />
        <FeaturedProjects />
        <SkillsSection />
        <MoodboardSection />
        <ContactSection />
        <BlurCursor />
      </ThemeProvider>
      <main></main>
    </>
  );
}

export default App;
