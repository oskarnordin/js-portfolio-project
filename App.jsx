import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Overlay from './components/Sections/Overlay';
const SkillsSection = React.lazy(() => import('./components/Sections/Techstack'));
const AboutMeSection = React.lazy(() => import('./components/Sections/AboutMe'));
const Home = React.lazy(() => import('./components/Sections/Home'));
const FeaturedProjects = React.lazy(() => import('./components/Sections/Showroom'));
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
import BlobCanvas from './components/Blob';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app-root">
          <div id="bg-overlay" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.40)', zIndex: -1 }} />
          <Navbar />
          <main className="app-main">
            <Suspense fallback={<Spinner size="lg" overlay={false} />}>
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aboutme" element={<AboutMeSection />} />
                <Route path="/showroom" element={<FeaturedProjects />} />
                <Route path="/techstack" element={<SkillsSection />} />
                <Route path="/moodboard" element={<MoodboardSection />} />
                <Route path="/contact" element={<ContactSection />} />
              </Routes>
            </Suspense>
            <BlobCanvas/>
          </main>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
