import React, { useRef } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OverlayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  max-height: 600px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 28px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border-radius: 36px;
  padding: 50px;
  border-left: 10px solid blue;
  border-bottom: 10px solid blue;
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start with offset */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    border-radius: 0;
    padding: 0px;
    margins: 0px;
  }
`;

const SelfieImage = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const H2overlay = styled.h2`
  font-size: 26px;
  font-family: "Agdasima", sans-serif;
  font-weight: 400;
  color: #000000;
  text-align: center;
  margin-bottom: 0px;
`;

const H1overlay = styled.h1`
  font-size: 64px;
  font-family: "Agdasima", sans-serif;
  color: black;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

function Overlay() {
  const overlayRef = useRef(null);
  const isOverlayVisible = useIntersectionObserver(overlayRef, {
    threshold: 0.1,
  });

  return (
    <OverlayContainer>
      <OverlayCard
        ref={overlayRef}
        className={isOverlayVisible ? "visible" : ""}
      >
        <SelfieImage src="/img/Selfie-round.png" alt="Selfie of Oskar Nordin" />
        <H2overlay>Hi, I'm Oskar Nordin</H2overlay>
        <H1overlay>Web Developer</H1overlay>
        <H2overlay>
          With a background in A/B-testing and data analysis.
        </H2overlay>
      </OverlayCard>
      <a href="#techstack">
        <CenteredContainer>
          <AngleDownImage
            src="/img/angle-square-light.webp"
            alt="Angle down icon"
          />
        </CenteredContainer>
      </a>
    </OverlayContainer>
  );
}

export default Overlay;
