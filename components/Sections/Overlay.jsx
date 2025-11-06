import React, { useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

// Keep empty GlobalStyle placeholder for future global overrides
const GlobalStyle = createGlobalStyle``;

const OverlayContainer = styled.div`
  /* Participate in normal document flow so header/navbar remains above and
     content below is pushed when the overlay area grows */
  position: relative;
  width: 100%;
  height: auto;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const OverlayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  background: transparent;
  border-radius: 36px;
  padding: 0; /* Remove extra padding */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    background-color: transparent;
    border: none;
    height: auto;
    width: auto;
    border-radius: 0;
    padding: 0;
    margin: 0;
  }
`;

const H1overlay = styled.h1`
  font-size: 72px;
  font-family: 'Agdasima', sans-serif;
  color: #f8f8f8;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
    line-height: 1.1;
    padding: 0 8px;
    white-space: nowrap;
  }
`;

const MenuOverlay = styled.div`
  /* Make the slide-out menu part of the page flow so it pushes content
     instead of covering it. Using relative positioning keeps it in flow. */
  position: relative;
  width: 300px; /* changed from 600px to 300px */
  max-width: 100%;
  background: #3D4CFB;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 8000;
  display: flex;
  flex-direction: column; /* column layout */
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  transition: transform 0.4s;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')}; /* slide from right */
  height: auto;

  @media (max-width: 758px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;

const MenuLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-family: 'Tomorrow', sans-serif;
  color: #f8f7f7;
  text-decoration: none;
  margin: 32px 0; // increased vertical gap between links
  font-weight: 400;
  transition: color 0.4s;
  &:hover {
    color: #c6ccff;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 14px 0;
    width: 100vw;
    padding: 18px 0;
    justify-content: center;
  }
`;

const HamburgerContainer = styled.div`
  background: ${({ open }) => (open ? '#3D4CFB' : '#3D4CFB')};
  border-radius: 50%;
  padding: 3px;
  /* Keep the hamburger in the document flow so it doesn't overlap the navbar */
  position: relative;
  margin: 8px; /* small offset from surrounding content */
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Overlay() {
  const overlayRef = useRef(null);
  const isOverlayVisible = useIntersectionObserver(overlayRef, {
    threshold: 0.1,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide menu overlay on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (isOverlayVisible) {
      // Delay slightly to ensure transition is visible
      const timeout = setTimeout(() => setShowTypewriter(true), 600);
      return () => clearTimeout(timeout);
    } else {
      setShowTypewriter(false);
    }
  }, [isOverlayVisible]);

  return (
    <>
      <GlobalStyle />
      <OverlayContainer>
        <OverlayCard
          ref={overlayRef}
          className={isOverlayVisible ? 'visible' : ''}
        ></OverlayCard>
      </OverlayContainer>
    </>
  );
}

export default Overlay;
