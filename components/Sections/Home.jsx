import React from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';
import Overlay from './Overlay';

const FullHero = styled.section`
  width: 100%;
  max-width: 100vw;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    overflow-x: hidden;
  }
`;


const VideoWrapper = styled.div`
  width: min(1100px, 100%);
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 600ms ease-out forwards;
  box-sizing: border-box;

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
    height: 70%;
    box-sizing: border-box;
    border-radius: 24px;
    max-width: 100vw;
    width: 100%;
  }
`;

const BgVideo = styled.video`
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 32px;

  @media screen and (max-width: 768px) {
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