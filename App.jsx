import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Overlay from './components/Sections/Overlay';
const SkillsSection = React.lazy(() => import('./components/Sections/Techstack'));
const PrologueSection = React.lazy(() => import('./components/Sections/Prologue'));
const HeroSection = React.lazy(() => import('./components/Sections/HeroSection'));
const FeaturedProjects = React.lazy(() => import('./components/Sections/Projects'));
const MoodboardSection = React.lazy(() => import('./components/Sections/Moodboard'));
const ContactSection = React.lazy(() => import('./components/Sections/Contact'));
import { ThemeProvider } from 'styled-components';
import { theme } from '/components/theme';
import './style.css';
import 'hamburgers/dist/hamburgers.css';
import Navbar from './components/Navbar';
import Footer from './components/Sections/Footer';
import ProgressBar from './components/ProgressBar';
import Spinner from './components/Spinner';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <div id="bg-overlay" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.40)', zIndex: -1 }} />
        <Navbar />
        <Suspense fallback={<Spinner size="lg" overlay={true} />}>
          <Routes>
            <Route path="/" element={<Navigate to="/herosection" replace />} />
            <Route path="/herosection" element={<HeroSection />} />
            <Route path="/prologue" element={<PrologueSection />} />
            <Route path="/showroom" element={<FeaturedProjects />} />
            <Route path="/techstack" element={<SkillsSection />} />
            <Route path="/moodboard" element={<MoodboardSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </Suspense>
        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
