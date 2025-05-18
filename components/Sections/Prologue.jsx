import React from "react";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { SectionContainer } from "../SharedComponents";
import PrologueCard from "../Cards/PrologueCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; // Add this
  align-items: center;
  background-color: #eeeeee;
  min-height: 100vh;
  width: 100%;
  z-index: 20;
`;

const LogoContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 16px;
  background-color: #90b6d7;
`;

const TechstackContainer = styled.div`
  width: 100%;
  background-color: #c48484;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 32px;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
  max-height: 50vh;
  overflow: hidden;
  animation: fadeIn 1s ease-in;
  opacity: 0;
  animation-fill-mode: forwards;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 14px;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 16px;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  // ...rest of your styles
`;

const MarginArrowContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FadeInContainer = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PrologueSection = () => {
  const ref = React.useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background id="prologue">
      <SectionContainer>
        <FadeInContainer ref={ref} className={isVisible ? "visible" : ""}>
          <PrologueCard />
        </FadeInContainer>
      </SectionContainer>
      <MarginArrowContainer>
        <a href="#projects">
          <AngleDownImage
            src="img/angle-square-down.png"
            alt="Angle down icon"
          />
        </a>
      </MarginArrowContainer>
    </Background>
  );
};

export default PrologueSection;
