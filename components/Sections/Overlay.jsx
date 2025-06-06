import React, { useRef, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { AngleDownImage } from '../SharedComponents';
import { MarginArrowContainer } from '../SharedComponents';
import 'hamburgers/dist/hamburgers.min.css';

// Global styles for typewriter effect
const GlobalStyle = createGlobalStyle`
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #4b4efc; }
  }
  .typewriter h1 {
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    letter-spacing: normal;
    animation:
      typing 2.4s steps(32, end),
      blink-caret .75s step-end infinite;
    width: fit-content;
    max-width: 100vw;
    text-align: center;
    margin: 0 auto;
  }
  .messenger-icon:hover {
    transform: scale(1.1);
  }

  .hamburger--emphatic .hamburger-inner,
  .hamburger--emphatic .hamburger-inner::before,
  .hamburger--emphatic .hamburger-inner::after {
    background-color: #fcfcfc !important; 
  }

  @media (max-width: 768px) {
    .typewriter h1 {
      font-size: 32px;
      width: 100vw;
      max-width: 100vw;
      padding: 0 8px;
    }
    .messenger-icon{
      display: none;
    }
  }
`;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
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
  justify-content: center;
  align-items: center;
  margin: 0;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: #4527b1;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 8000;
  display: flex;
  flex-direction: row;
  padding: 24px 24px 24px 24px;
  transition: transform 0.3s;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};

  @media (max-width: 768px) {
    height: 100vh;
    margin: 0;
    border: none;
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
  font-size: 34px;
  font-family: 'DM Sans', sans-serif;
  color: #fbfbfb;
  text-decoration: none;
  margin: 0 12px;
  font-weight: 600;
  transition: color 0.2s;
  &:hover {
    color: #6f71ff;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 14px 0;
    width: 100vw;
    padding: 18px 0;
    justify-content: center;
  }
`;

function Overlay() {
  const overlayRef = useRef(null);
  const isOverlayVisible = useIntersectionObserver(overlayRef, {
    threshold: 0.1,
  });
  const [menuOpen, setMenuOpen] = useState(false);
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
      <button
        className={`hamburger hamburger--emphatic
${menuOpen ? ' is-active' : ''}`}
        type='button'
        aria-label='Menu'
        aria-controls='navigation'
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          zIndex: 10001,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
      {/* Slide-out Menu */}
      <MenuOverlay open={menuOpen}>
        <MenuLink href='#prologue' onClick={() => setMenuOpen(false)}>
          Prologue
        </MenuLink>
        <MenuLink href='#techstack' onClick={() => setMenuOpen(false)}>
          Tech Stack
        </MenuLink>
        <MenuLink href='#projects' onClick={() => setMenuOpen(false)}>
          Showroom
        </MenuLink>
        <MenuLink href='#moodboard' onClick={() => setMenuOpen(false)}>
          Moodboard
        </MenuLink>
        <MenuLink href='#contact' onClick={() => setMenuOpen(false)}>
          Let's Talk
        </MenuLink>
      </MenuOverlay>
      <GlobalStyle />
      <OverlayContainer>
        <OverlayCard
          ref={overlayRef}
          className={isOverlayVisible ? 'visible' : ''}
        >
          {/* {showTypewriter && (
            <div className='typewriter'>
              <H1overlay>I'm Oskar Nordin, a Web Developer.</H1overlay>
            </div>
          )} */}
        </OverlayCard>

      </OverlayContainer>
    </>
  );
}

export default Overlay;
