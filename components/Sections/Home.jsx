import React from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';
import Overlay from './Overlay';

const FullHero = styled.section`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const BgVideo = styled.video`
  width: 100%;
  height: 60%;
  object-fit: cover;
  display: block;
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
        {/* Overlay (typewriter) sits above the background video */}
        <Overlay />
      </VideoWrapper>
    </FullHero>
  );
};

export default Home;