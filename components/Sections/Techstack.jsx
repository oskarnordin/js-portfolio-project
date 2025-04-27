import React from "react";
import InfoCard from "../Cards/InfoCard";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const Background = styled.div`
  position: relative;
  background-color: #eeeeee;
  min-height: 100vh;
  min-width: 100%;
  z-index: 20;
`;

const TechstackContainer = styled.div`
  min-height: 100vh;
  background-color: #eeeeee;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
  max-width: 100%; /* Prevent container from exceeding screen width */
  overflow: hidden; /* Prevent content overflow */

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding on smaller screens */
    font-size: 14px; /* Adjust font size for better readability */
  }
`;

const TechstackSection = () => {
  return (
    <Background>
      <TechstackContainer id="techstack">
        <InfoCard
          icon=""
          title="Tech Stack"
          info={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "React Hooks",
            "Node.js",
            "MongoDB",
            "Python",
            "GitHub",
            "Web Accessibility",
            "APIs",
          ]}
        />

        <a href="#projects">
          <CenteredContainer>
            <AngleDownImage
              src="img/angle-square-down.png"
              alt="Angle down icon"
            />
          </CenteredContainer>
        </a>
      </TechstackContainer>
    </Background>
  );
};

export default TechstackSection;
