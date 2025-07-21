import React from 'react';
import Overlay from './components/Sections/Overlay';
import SkillsSection from './components/Sections/Techstack';
import PrologueSection from './components/Sections/Prologue';
import HeroSection from './components/Sections/HeroSection';
import FeaturedProjects from './components/Sections/Projects';
import MoodboardSection from './components/Sections/Moodboard';
import ContactSection from './components/Sections/Contact';
import { ThemeProvider } from 'styled-components';
import { theme } from '/components/theme';
import './style.css';
import 'hamburgers/dist/hamburgers.css';
import Navbar from './components/Navbar';
import Footer from './components/Sections/Footer';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProgressBar />
        <Navbar />
        <HeroSection />
        <Overlay />
        <PrologueSection />
        <FeaturedProjects />
        <SkillsSection />
        <MoodboardSection />
        <ContactSection />
        {/* <Footer /> */}
        {/* <BlurCursor /> */}
      </ThemeProvider>
      <main></main>
    </>
  );
}

export default App;
