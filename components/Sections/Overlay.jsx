import React from "react";
import styled from "styled-components";
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

  @media (max-width: 768px) {
    height: 100vh; /* Full viewport height on mobile */
    width: 100vh; /* Full width on mobile */
    border-radius: 0; /* Remove border radius for a full-screen effect */
    padding: 0px;
    margins: 0px;
  }
`;

const SelfieImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  padding: 10px;
`;

const Heading = styled.h2`
  margin: 10px 0;
`;

const HighlightedHeading = styled.h1`
  color: #f5f5f5; /* Example highlight color */
  margin: 10px 0;
  font-size: 5em;
`;

const TechStackLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const TechStackContainer = styled.div`
  font-size: 24px;
  font-family: "Agdasima", sans-serif;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
const SectionCards = styled.div`
  display: flex;
  justify-content: flex-start; /* Align content to the top */
  align-items: center; /* Center content vertically */
  flex-direction: column; /* Stack items vertically */
  gap: 20px; /* Space between cards */
  width: 100%; /* Full width of the container */
  height: 100%; /* Full height of the container */
  opacity: 1;
`;

const H2overlay = styled.h2`
  font-size: 32px;
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
`;

const Menu = styled.div`
  /* Change from h2 to div for better semantics */
  position: absolute;
  top: 20px;
  font-size: 24px;
  font-family: "Agdasima", sans-serif;
  color: #fcfcfc;
  display: flex; /* Use flexbox for layout */
  flex-direction: row; /* Stack links vertically */
  align-items: center; /* Center links horizontally */
  gap: 14px; /* Add spacing between links */
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 5px 0; /* Optional: Add additional spacing if needed */
`;

function Overlay() {
  return (
    <OverlayContainer>
      <Menu>
        <a href="#techstack">Tech Stack</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#myWords">My Words</a>
        <a href="#contact">Contact</a>
      </Menu>
      <OverlayCard>
        <SelfieImage src="img/Selfie-round.png" alt="Selfie of Oskar Nordin" />
        <H2overlay>Hi, I'm Oskar Nordin</H2overlay>
        <H1overlay>Web Developer</H1overlay>
        <H2overlay>
          With a background in A/B-testing and data analysis.
        </H2overlay>
      </OverlayCard>
      <a href="#techstack">
        <CenteredContainer>
          <AngleDownImage
            src="img/angle-square-light.webp"
            alt="Angle down icon"
          />
        </CenteredContainer>
      </a>
    </OverlayContainer>
  );
}

export default Overlay;
