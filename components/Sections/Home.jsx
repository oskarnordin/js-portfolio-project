import React from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';
import Overlay from './Overlay';

const FullHero = styled.section`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    /* Ensure the hero fits inside the viewport on mobile while accounting for the navbar height (assumed 60px). Adjust the 60px if your navbar differs. */
    display: flex;
    align-items: center;
    justify-content: center;  
    height: auto;
  }
`;


const VideoWrapper = styled.div`
  width: min(1100px, 100%); /* match site content width but respect small viewports */
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 600ms ease-out forwards;

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
    height: 70%;
    box-sizing: border-box;
    border-radius: 24px;
    max-width: 100%; /* ensure it doesn't exceed viewport */
  }
`;

const BgVideo = styled.video`
  width: 100%;

  object-fit: cover;
  display: block;
  /* Ensure the video itself has rounded corners so it visually matches the wrapper
     even when the wrapper has padding on mobile. Use the same radius by default. */
  border-radius: 32px;

  @media screen and (max-width: 768px) {
    /* Reduce the video's radius inside the wrapper padding so corners look correct */
    border-radius: calc(32px - 15px);
    height: 100%;
  }
`;

const Home = () => {
  return (
    <FullHero id="home">
      <VideoWrapper>
        <Overlay />
      </VideoWrapper>
    </FullHero>
  );
};

export default Home;