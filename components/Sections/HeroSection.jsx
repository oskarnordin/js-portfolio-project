import React from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';

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
`;

const BgVideo = styled.video`
  width: 100%;
  height: 60%;
  object-fit: cover;
  display: block;
`;

const HeroSection = () => {
  return (
    <FullHero id="herosection">
      <VideoWrapper>
        <BgVideo
          id="hero-bg-video"
          src="/img/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </VideoWrapper>
    </FullHero>
  );
};

export default HeroSection;
