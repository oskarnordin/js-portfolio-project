import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

// Keep empty GlobalStyle placeholder for future global overrides
const GlobalStyle = createGlobalStyle``;

const OverlayContainer = styled.div`
  /* Cover the parent (video wrapper) so children can be positioned over the video */
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  pointer-events: none; /* let clicks pass to the video/content unless needed */

  @media (max-width: 768px) {
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* prevent horizontal scrolling on mobile */
  pointer-events: none; /* let clicks pass to the video/content unless needed */

  }
`;

const OverlayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
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
  font-family: --var(--font-heading);
  color: #131313;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 44px;
    text-align: center;
    padding: 0 8px;
    white-space: normal; /* allow text wrapping on mobile */
    word-break: break-word; /* break long words if necessary */
  }
`;

const MenuOverlay = styled.div`
  /* Make the slide-out menu part of the page flow so it pushes content
     instead of covering it. Using relative positioning keeps it in flow. */
  position: relative;
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

  @media (max-width: 758px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;


const HamburgerContainer = styled.div`
  background: ${({ open }) => (open ? '#3D4CFB' : '#3D4CFB')};
  border-radius: 50%;
  padding: 3px;
  position: relative;
  margin: 8px;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypewriterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10002;
  pointer-events: none; /* allow clicks to pass through */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  padding: 8px 16px;
  width: 100%;
  max-width: 1100px; /* match video wrapper width */
  opacity: 0;
  transition: opacity 360ms cubic-bezier(0.22, 1, 0.36, 1), transform 360ms cubic-bezier(0.22, 1, 0.36, 1);

  &.visible {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 32px); /* respect viewport bounds with padding */
    padding: 8px;
  }
`;

const TypewriterText = styled.h1`
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 60px;
  white-space: nowrap;
  text-shadow: 0 6px 18px rgba(0,0,0,0.5);
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    white-space: normal;
  }
`;


const Char = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 160ms ease-out, transform 220ms cubic-bezier(0.2,0.9,0.2,1);
  will-change: opacity, transform;
  /* preserve spacing for spaces */
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
/* Cursor removed per request */

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
  const [typedText, setTypedText] = useState('');
  const fullText = "";

  // Typing effect: type out fullText one character at a time when showTypewriter becomes true
  useEffect(() => {
    if (!showTypewriter) {
      setTypedText('');
      return;
    }

    let idx = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      // move forward one character
      idx += 1;
      // immediately consume any following spaces so we don't pause on whitespace
      while (idx < fullText.length && fullText[idx] === ' ') {
        idx += 1;
      }
      setTypedText(fullText.slice(0, idx));
      if (idx < fullText.length) {
        // schedule next visible character
        timeoutId = setTimeout(tick, 80);
      }
    };

    let timeoutId = setTimeout(tick, 80);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [showTypewriter]);

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
      <OverlayContainer ref={overlayRef}>
        {/* Typewriter text placed above background video */}
        <TypewriterContainer aria-hidden={!isOverlayVisible} className={showTypewriter ? 'visible' : ''}>
          <TypewriterText aria-live="polite">
            {fullText.split('').map((ch, i) => (
              <Char key={`c-${i}`} className={i < typedText.length ? 'visible' : ''} aria-hidden={i >= typedText.length}>
                {ch === ' ' ? '\u00A0' : ch}
              </Char>
            ))}
          </TypewriterText>
        </TypewriterContainer>
        <OverlayCard className={isOverlayVisible ? 'visible' : ''}></OverlayCard>
      </OverlayContainer>
      {/* Footer moved to App layout */}
    </>
  );
}

export default Overlay;
