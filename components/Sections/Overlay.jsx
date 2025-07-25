import React, { useRef, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import 'hamburgers/dist/hamburgers.min.css';

// Global styles for typewriter effect
const GlobalStyle = createGlobalStyle`

  .hamburger--emphatic .hamburger-inner,
  .hamburger--emphatic .hamburger-inner::before,
  .hamburger--emphatic .hamburger-inner::after {
    background-color: #F7F6F6 !important;
  }

  .hamburger-box {
    display: none;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ff5656;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 8000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  transition: transform 0.4s;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  height: 100vh;

  @media (min-width: 768px) {
    height: 150px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    width: 100%;
    background: #ff5656;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8000;
    transition: transform 0.4s;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    display: flex;
  }

  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  margin: 0 12px;
  font-weight: 400;
  transition: color 0.4s;
  &:hover {
    color: #ffc8c8;
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
  background: ${({ open }) => (open ? '#ff5656' : '#ff5656')};
  border-radius: 50%;
  padding: 3px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1500px) {
    display: none;
  }
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
      <HamburgerContainer open={menuOpen}>
        <button
          className={`hamburger hamburger--emphatic${
            menuOpen ? ' is-active' : ''
          }`}
          type='button'
          aria-label='Menu'
          aria-controls='navigation'
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </HamburgerContainer>
      {/* Slide-out Menu for mobile */}
      <MenuOverlay open={menuOpen}>
        <MenuLink href='#prologue' onClick={() => setMenuOpen(false)}>
          Prologue
        </MenuLink>
        <MenuLink href='#showroom' onClick={() => setMenuOpen(false)}>
          Showroom
        </MenuLink>
        <MenuLink href='#moodboard' onClick={() => setMenuOpen(false)}>
          Moodboard
        </MenuLink>
        <MenuLink href='#techstack' onClick={() => setMenuOpen(false)}>
          Tech Stack
        </MenuLink>
        <MenuLink href='#contact' onClick={() => setMenuOpen(false)}>
          Let's Talk
        </MenuLink>
      </MenuOverlay>
      {/* Desktop Menu */}
      {/* <DesktopMenu>
        <MenuLink href='#prologue'>Prologue</MenuLink>
        <MenuLink href='#showroom'>Showroom</MenuLink>
        <MenuLink href='#moodboard'>Moodboard</MenuLink>
        <MenuLink href='#techstack'>Tech Stack</MenuLink>
        <MenuLink href='#contact'>Let's Talk</MenuLink>
      </DesktopMenu> */}
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
