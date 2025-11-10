import React from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';
import Overlay from './Overlay';

const FullHero = styled.section`
  width: 100%;
  min-height: 80vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    /* Ensure the hero fits inside the viewport on mobile while accounting for the navbar height (assumed 60px). Adjust the 60px if your navbar differs. */
    min-height: calc(100vh - 60px);
    height: calc(100vh - 60px);
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
    /* Use 100% so the wrapper fills the FullHero height (which is calc(100vh - nav)) without adding extra viewport height */
    height: 90%;
    box-sizing: border-box;
    border-radius: 24px;
  }
`;

const BgVideo = styled.video`
  width: 100%;
  height: 60%;
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
        <BgVideo
          id="hero-bg-video"
          src="/img/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <Overlay />
      </VideoWrapper>
    </FullHero>
  );
};

export default Home;