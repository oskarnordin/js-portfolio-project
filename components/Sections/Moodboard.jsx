import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Inner } from '../SharedComponents';

const Background = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 20;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    height: auto;
    width: auto;
    padding: 0 0 1rem 0;
  }
`;

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Teko, sans-serif;
  color: #000000;

  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  padding: 32px 32px 64px 32px;
  margin: 0 auto;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 2s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  overflow-x: hidden; /* Prevent horizontal scroll */
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MoodboardH3 = styled.h3`
  color: #2d3748;
  font-size: 60px;
  margin-bottom: 10px;
  padding: 32px 32px 16px 32px;
  text-decoration: none;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const MoodboardP = styled.p`
  font-weight: 400;
  color: #4a5568;
  font-size: 14px;
  text-align: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const PinterestWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const PinterestBoardContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; /* hide any internal scrolling from the embed */

  /* Let the embed size itself but provide a sensible minimum */
  min-height: auto;
  height: auto;

  /* Ensure any children (anchor/iframe) fill the parent completely */
  & > * {
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
    display: block !important;
    box-sizing: border-box !important;
  }

  @media (max-width: 768px) {
    max-width: 360px;
    width: 100%;
    min-height: 400px;
  }
`;

// Add this styled-component for the Pinterest embed anchor
const PinterestEmbed = styled.a`
  width: 100% !important;
  height: 100% !important;
  display: block;
`;

const MoodboardSection = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const boardContainerRef = useRef(null);

  useEffect(() => {
    const renderPinterestBoard = () => {
      if (!boardContainerRef.current) return;

      // remove any previous content
      boardContainerRef.current.innerHTML = '';

      // create the anchor Pinterest expects
      const a = document.createElement('a');
      a.setAttribute('data-pin-do', 'embedBoard');

  // board width: Pinterest uses pixel values here. Increasing this value
  // causes the embed to render more columns and therefore smaller-looking
  // tiles/cards. Tweak DESKTOP_BOARD_WIDTH to adjust card size on large screens.
  const DESKTOP_BOARD_WIDTH = 720; // increase for smaller cards
  const MOBILE_BOARD_WIDTH = 320; // smaller value for phones
  const boardWidth = window.innerWidth <= 768 ? MOBILE_BOARD_WIDTH : DESKTOP_BOARD_WIDTH;
  a.setAttribute('data-pin-board-width', String(boardWidth));

      // set scale-height dynamically from the container's current height so the iframe won't be too short
      const measuredHeight = Math.max(boardContainerRef.current.clientHeight || 600, 400);
      a.setAttribute('data-pin-scale-height', String(Math.round(measuredHeight)));

      // keep scale width high so the board fills horizontally
      a.setAttribute('data-pin-scale-width', '100');

      a.href = 'https://se.pinterest.com/oskarnordin/tech/';
      a.style.width = '100%';
      a.style.maxWidth = '100%';
      a.style.display = 'block';
      // set explicit heights so child iframe will inherit correctly
      a.style.height = measuredHeight + 'px';
      a.style.boxSizing = 'border-box';

      boardContainerRef.current.appendChild(a);

      if (window.PinUtils && window.PinUtils.build) {
        // build the new embed
        window.PinUtils.build();
      }
    };
    // initial render (and load script if needed)
    if (!document.querySelector('script[src="https://assets.pinterest.com/js/pinit.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.pinterest.com/js/pinit.js';
      script.async = true;
      script.defer = true;
      script.onload = renderPinterestBoard;
      document.body.appendChild(script);
    } else {
      renderPinterestBoard();
    }

    // Re-render on resize so Pinterest iframe can be recreated with new scale-height
    const onResize = () => {
      // throttle via rAF for smoothness
      window.requestAnimationFrame(() => renderPinterestBoard());
    };
    window.addEventListener('resize', onResize);

    // cleanup
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Background id='moodboard'>
      <GridLayout ref={ref} className={isVisible ? 'visible' : ''}>
        <MoodboardH3>Moodboard</MoodboardH3>
        <MoodboardP>
          My collection of tech content I draw inspiration from.
        </MoodboardP>
        <Inner>
          <PinterestBoardContainer ref={boardContainerRef}></PinterestBoardContainer>
        </Inner>
      </GridLayout>
    </Background>
  );
};

export default MoodboardSection;
