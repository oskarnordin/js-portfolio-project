import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const OverlayContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  pointer-events: none;

  @media (max-width: 768px) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    pointer-events: none;
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
  padding: 0;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

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

const MenuOverlay = styled.div`
  position: relative;
  max-width: 100%;
  background: #3d4cfb;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 8000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  transition: transform 0.4s;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: 758px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;

const TypewriterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10002;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  padding: 8px 16px;
  width: 100%;
  max-width: 1100px;
  opacity: 0;
  transition:
    opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;

  &.visible {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    max-width: calc(100vw - 32px);
    padding: 8px;
    width: calc(100vw - 32px);
  }
`;

const TypewriterText = styled.h1`
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 60px;
  white-space: nowrap;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 20px;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

const Char = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 160ms ease-out,
    transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1);
  will-change: opacity, transform;

  &.visible {
    opacity: 1;
    transform: translateY(0);
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
  const [typedText, setTypedText] = useState('');
  const fullText = '';

  useEffect(() => {
    if (!showTypewriter) {
      setTypedText('');
      return;
    }

    let idx = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      idx += 1;
      while (idx < fullText.length && fullText[idx] === ' ') {
        idx += 1;
      }
      setTypedText(fullText.slice(0, idx));
      if (idx < fullText.length) {
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
      const timeout = setTimeout(() => setShowTypewriter(true), 600);
      return () => clearTimeout(timeout);
    } else {
      setShowTypewriter(false);
    }
  }, [isOverlayVisible]);

  return (
    <>
      <OverlayContainer ref={overlayRef}>
        <TypewriterContainer
          aria-hidden={!isOverlayVisible}
          className={showTypewriter ? 'visible' : ''}
        >
          <TypewriterText aria-live="polite">
            {fullText.split('').map((ch, i) => (
              <Char
                key={`c-${i}`}
                className={i < typedText.length ? 'visible' : ''}
                aria-hidden={i >= typedText.length}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </Char>
            ))}
          </TypewriterText>
        </TypewriterContainer>
        <OverlayCard className={isOverlayVisible ? 'visible' : ''}></OverlayCard>
      </OverlayContainer>
    </>
  );
}

export default Overlay;
