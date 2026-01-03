import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Overlay from './components/Sections/Overlay';
const SkillsSection = React.lazy(() => import('./components/Sections/Techstack'));
const AboutMeSection = React.lazy(() => import('./components/Sections/AboutMe'));
const Home = React.lazy(() => import('./components/Sections/Home'));
const FeaturedProjects = React.lazy(() => import('./components/Sections/Showroom'));
const MoodboardSection = React.lazy(() => import('./components/Sections/Moodboard'));
const ContactSection = React.lazy(() => import('./components/Sections/Contact'));
const CurriculumVitae = React.lazy(() => import('./components/Sections/CurriculumVitae'));
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
  const KeyNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
    const routes = ['/aboutme', '/cv', '/techstack', '/showroom', '/moodboard', '/contact'];

      const handler = (e) => {
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
        const active = document.activeElement;
        if (!active) return;
        const tag = active.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || active.isContentEditable) return;

        if (location.pathname === '/home') {
          if (e.key === 'ArrowRight') {
            const next = routes[0];
            if (next) navigate(next);
          } else if (e.key === 'ArrowLeft') {
            const prev = routes[routes.length - 1];
            if (prev) navigate(prev);
          }
          return;
        }

        const idx = routes.indexOf(location.pathname);
        if (idx === -1) return;

        if (e.key === 'ArrowRight') {
          const next = routes[(idx + 1) % routes.length];
          if (next && next !== location.pathname) navigate(next);
        } else if (e.key === 'ArrowLeft') {
          const prev = routes[(idx - 1 + routes.length) % routes.length];
          if (prev && prev !== location.pathname) navigate(prev);
        }
      };

      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }, [navigate, location]);

    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app-root">
          <div id="bg-overlay" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.40)', zIndex: -1 }} />
          <Navbar />
          <KeyNav />
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
                <Route path="/cv" element={<CurriculumVitae />} />
              </Routes>
            </Suspense>
            <BlobCanvas/>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
