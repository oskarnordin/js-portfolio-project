// components/SkillsSection.jsx
import React from "react";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { MarginArrowContainer } from "../SharedComponents";
import { SectionContainer } from "../SharedComponents";
import StackIcon from "tech-stack-icons";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Background = styled.div`
  position: relative;
  background-color: #f4f4f4;
  height: 100vh;
  width: 100%;
  z-index: 20;
`;

const SkillsContainer = styled.div`
  max-width: 1080px;
  background-color: #f4f4f4;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: column; /* Stack heading and icons vertically */
  justify-content: center;
  align-items: center;
  gap: 32px; /* Space between heading and icons */
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TechstackH3 = styled.h3`
  font-family: "DM Sans", sans-serif;
  color: #2d3748;
  font-weight: 600;
  font-size: 34px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
  text-align: left;
  width: 100%;
`;

const IconContainer = styled.div`
  background-color: transparent;
  width: 80px;
  height: 80px;
  padding: 20px;
`;

const IconLabel = styled.div`
  font-size: 16px;
  color: #444;
  text-align: center;
  margin-top: 6px;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
`;

const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 28px;
  width: 100%;
  background: transparent;
  position: relative;
  margin: 0;
  overflow: visible;
`;

const techStack = [
  { name: "html5", label: "HTML" },
  { name: "css3", label: "CSS" },
  { name: "js", label: "JavaScript" },
  { name: "typescript", label: "TypeScript" },
  { name: "reactjs", label: "React" },
  { name: "npm", label: "NPM" },
  { name: "mongodb", label: "MongoBD" },
];

const SkillsSection = () => {
  const ref = React.useRef(null);
  const visible = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  return (
    <Background>
      <SectionContainer id="techstack">
        <SkillsContainer ref={ref} className={visible ? "visible" : ""}>
          <TechstackH3>Tech Stack</TechstackH3>
          <IconsGrid>
            {techStack.map((tech) => (
              <IconContainer key={tech.name}>
                <StackIcon name={tech.name} />
                <IconLabel>{tech.label}</IconLabel>
              </IconContainer>
            ))}
          </IconsGrid>
        </SkillsContainer>
      </SectionContainer>
      <a href="#contact">
        <MarginArrowContainer>
          <AngleDownImage
            src="img/angle-square-down.png"
            alt="Angle down icon"
          />
        </MarginArrowContainer>
      </a>
    </Background>
  );
};

export default SkillsSection;
