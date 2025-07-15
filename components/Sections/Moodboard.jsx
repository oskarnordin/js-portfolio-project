import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fffbf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 20;

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
  background-color: #fffbf9;
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
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
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
  text-align: center;
`;

const MoodboardP = styled.p`
  font-weight: 400;
  color: #4a5568;
  font-size: 16px;
  text-align: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const PinterestWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PinterestBoardContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  box-sizing: border-box;
  overflow-x: auto;

  @media (max-width: 768px) {
    max-width: 360px;
    width: 100%;
  }
`;

const MoodboardSection = () => {
  const boardContainerRef = useRef(null);

  useEffect(() => {
    const renderPinterestBoard = () => {
      if (boardContainerRef.current) {
        boardContainerRef.current.innerHTML = '';
        const a = document.createElement('a');
        a.setAttribute('data-pin-do', 'embedBoard');
        a.setAttribute(
          'data-pin-board-width',
          window.innerWidth <= 768 ? '360' : '1080'
        );
        a.setAttribute(
          'data-pin-scale-height',
          window.innerWidth <= 768 ? '400' : '800'
        );
        a.setAttribute(
          'data-pin-scale-width',
          window.innerWidth <= 768 ? '80' : '120'
        );
        a.href = 'https://se.pinterest.com/oskarnordin/tech/';
        a.style.width = '100%';
        boardContainerRef.current.appendChild(a);
        if (window.PinUtils && window.PinUtils.build) {
          window.PinUtils.build();
        }
      }
    };

    if (
      !document.querySelector(
        'script[src="https://assets.pinterest.com/js/pinit.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://assets.pinterest.com/js/pinit.js';
      script.async = true;
      script.defer = true;
      script.onload = renderPinterestBoard;
      document.body.appendChild(script);
    } else {
      renderPinterestBoard();
    }
  }, []);

  return (
    <Background id='moodboard'>
      <MoodboardH3>Moodboard</MoodboardH3>
      <MoodboardP>
        My collection of tech content I draw inspiration from.
      </MoodboardP>
      <PinterestBoardContainer
        ref={boardContainerRef}
      ></PinterestBoardContainer>
    </Background>
  );
};

export default MoodboardSection;
