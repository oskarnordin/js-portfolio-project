import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AngleDownImage } from '../SharedComponents';
import { MarginArrowContainer } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  position: relative;
  background-color: #fffbf9;
  height: 100vh;
  width: 100%;
  z-index: 20;

  @media (max-width: 768px) {
    height: auto;
    width: auto;
    padding: 0 0 1rem 0;
  }
`;

const GridLayout = styled.div`
  height: 100%;
  max-width: 1080px;
  width: auto;
  background-color: #fffbf9;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 64px 32px;
  margin: 0 auto;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 1rem;
  }
`;

const MoodboardH3 = styled.h3`
  font-family: 'DM Sans', sans-serif;
  color: #2d3748;
  font-weight: 600;
  font-size: 34px;
  padding: 32px 32px 12px 32px;
  text-decoration: none;
  text-align: left;
`;

const MoodboardP = styled.p`
  font-family: 'Courier New', Courier, monospace;
  color: #4a5568;
  font-size: 16px;
  text-align: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const MoodboardSection = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const boardRef = useRef(null);

  useEffect(() => {
    // Add Pinterest script if not already present
    if (
      !document.querySelector(
        'script[src="https://assets.pinterest.com/js/pinit.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://assets.pinterest.com/js/pinit.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.PinUtils && window.PinUtils.build) {
          window.PinUtils.build();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, build widgets
      if (window.PinUtils && window.PinUtils.build) {
        window.PinUtils.build();
      }
    }
  }, []);

  // Responsive Pinterest board width
  useEffect(() => {
    const updateBoardWidth = () => {
      if (boardRef.current) {
        if (window.innerWidth <= 768) {
          boardRef.current.setAttribute('data-pin-board-width', '100%');
        } else {
          boardRef.current.setAttribute('data-pin-board-width', '1000');
        }
        // Rebuild Pinterest widget if script is loaded
        if (window.PinUtils && window.PinUtils.build) {
          window.PinUtils.build();
        }
      }
    };
    updateBoardWidth();
    window.addEventListener('resize', updateBoardWidth);
    return () => window.removeEventListener('resize', updateBoardWidth);
  }, []);

  return (
    <Background id='moodboard'>
      <GridLayout ref={ref} className={isVisible ? 'visible' : ''}>
        <MoodboardH3>Moodboard</MoodboardH3>
        <MoodboardP>My collection of inspirational tech content</MoodboardP>
        <a
          ref={boardRef}
          data-pin-do='embedBoard'
          data-pin-board-width='1000'
          data-pin-scale-height='800'
          data-pin-scale-width='140'
          href='https://se.pinterest.com/oskarnordin/tech/'
          style={{ width: '100%' }}
        ></a>
      </GridLayout>
    </Background>
  );
};

export default MoodboardSection;
