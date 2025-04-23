import React from "react";
import InfoCard from "../Cards/InfoCard";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const TechStackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #dddddd;
  font-family: Teko, sans-serif;
  font-size: 2em;
  color: #1f1f1f;
  position: relative;
  z-index: 20;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  grid-template-areas:
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . .";
`;

const TechstackSection = () => {
  return (
    <TechStackContainer id="techStack">
      <div className="sectionFourContainer">
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
            "Python ()",
            "GitHub",
            "Web Accessibility",
            "APIs",
          ]}
        />
      </div>
      <a href="#skills">
        <CenteredContainer>
          <h2>Skills</h2>
          <AngleDownImage
            src="img/angle-square-light.webp"
            alt="Angle down icon"
          />
        </CenteredContainer>
      </a>
    </TechStackContainer>
  );
};

export default TechstackSection;
