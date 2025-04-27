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
  background-color: #f4f4f4;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  grid-column: span 4;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-column: span 1;
    width: 100%;
  }
`;

const SkillsSection = () => {
  return (
    <Background>
      <SkillsContainer id="skills">
        <InfoCard
          icon="img/front.png"
          title="Frontend"
          info={["HTML5", "CSS3", "JavaScript", "TypeScript", "React"]}
        />
        <InfoCard icon="" title="Backend" info={["Node.js"]} />
        <InfoCard icon="" title="Methodologies" info={["Agile"]} />
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
        <a href="#contact">
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
