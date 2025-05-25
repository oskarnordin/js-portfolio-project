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
  min-height: 100vh; /* Changed from height to min-height */
  width: 100%;
  z-index: 20;
`;

const SkillsContainer = styled.div`
  max-width: 1080px;
  background-color: #f4f4f4;
  font-family: Teko, sans-serif;
  color: #000000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
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

const techStack = [
  { name: "html5", label: "HTML" },
  { name: "css3", label: "CSS" },
  { name: "js", label: "JavaScript" },
  { name: "typescript", label: "TypeScript" },
  { name: "reactjs", label: "React" },
  { name: "npm", label: "NPM" },
  { name: "mongodb", label: "MongoDB" }, // fixed typo
];

const SkillsSection = () => {
  const ref = React.useRef(null);
  const visible = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  return (
    <Background>
      <SkillsContainer ref={ref} className={visible ? "visible" : ""}>
        {techStack.map((item) => (
          <div key={item.name}>{item.label}</div>
        ))}
      </SkillsContainer>
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
