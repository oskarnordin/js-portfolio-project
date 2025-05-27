import React, { useRef } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  background-color: #cdcdcd;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const HeroVideoStyle = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: 90%;
  object-fit: cover;
  background-color: rgb(233, 233, 233);
  z-index: 1;
  overflow: hidden !important;
`;

function HeroVideo() {
  const videoRef = useRef(null);

  return (
    <VideoContainer>
      <HeroVideoStyle
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        aria-label='Background video'
      >
        <source src='/img/bgvideo4.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </HeroVideoStyle>
    </VideoContainer>
  );
}

export default HeroVideo;
