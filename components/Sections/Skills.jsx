// components/SkillsSection.jsx
import React from "react";
import InfoCard from "../Cards/InfoCard";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const Background = styled.div`
  position: relative;
  background-color: #f8f8f8;
  min-height: 100vh;
  min-width: 100%;
  z-index: 20;
`;

const SkillsContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f8f8;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Dynamically adjust columns */
  gap: 20px; /* Space between grid items */
  padding: 2rem; /* Add padding for spacing */
  margin: 0 auto; /* Center the grid container horizontally */
  box-sizing: border-box; /* Include padding in width calculations */
  justify-content: center; /* Center the grid items horizontally */
  align-items: center; /* Center the grid items vertically */
  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* 1 card per row on smaller screens */
    width: 100%; /* Make the container span the full width */
  }
`;

const SkillsSection = () => {
  return (
    <Background>
      <SkillsContainer id="skills">
        <InfoCard
          icon="img/cursor.webp"
          title="Frontend"
          info={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "React Hooks",
          ]}
        />
        <InfoCard icon="img/server.webp" title="Backend" info={["Node.js"]} />
        <InfoCard
          icon="img/handshake.webp"
          title="Methodologies"
          info={["Agile"]}
        />
        <InfoCard
          icon="img/chart-histogram.webp"
          title="Data Analysis"
          info={[
            "Google Analytics 4",
            "Google Tag Manager",
            "Google Looker Studio",
            "Google Optimize",
            "Python (Pandas, NumPy, Matplotlib, Seaborn)",
            "R",
            "SQL",
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
      </SkillsContainer>
    </Background>
  );
};

export default SkillsSection;
