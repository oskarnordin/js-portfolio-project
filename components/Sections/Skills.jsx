// components/SkillsSection.jsx
import React from 'react';
import styled from 'styled-components';
import { AngleDownImage } from '../SharedComponents';
import { MarginArrowContainer } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import StackIcon from 'tech-stack-icons';

const Background = styled.div`
  position: relative;
  background-color: #240e66;
  min-height: 80vh;
  width: 100%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 72px;

  @media (max-width: 768px) {
    height: auto;
    padding: 0 0 2rem 0;
  }
`;

const SkillsContainer = styled.div`
  max-width: 1080px;
  background-color: transparent;
  font-family: Teko, sans-serif;
  color: #2d3748;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
  font-family: 'DM Sans', sans-serif;
  color: #f8f8f8;
  font-weight: 600;
  font-size: 34px;
  padding: 32px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;

  width: auto;
  text-align: center;
`;

const techStack = {
  frontend: [
    { name: 'html5', label: 'HTML' },
    { name: 'css3', label: 'CSS' },
    { name: 'js', label: 'JavaScript' },
    { name: 'typescript', label: 'TypeScript' },
    { name: 'reactjs', label: 'React' },
  ],
  backend: [
    { name: 'nodejs', label: 'Node.js' },
    { name: 'mongodb', label: 'MongoDB' },
  ],
  misc: [
    { name: 'npm', label: 'NPM' },
    { name: 'git', label: 'Git' },
    { name: 'github', label: 'GitHub' },
    { name: 'vitejs', label: 'Vite' },
    { name: 'eslint', label: 'ESLint' },
  ],
  analysis: [
    { name: 'Python', label: 'Python' },
    { name: 'Pandas', label: 'Pandas' },
    { name: 'Matplotlib', label: 'Matplotlib' },
    { name: 'Seaborn', label: 'Seaborn' },
    { name: 'Jupyter', label: 'Jupyter' },
  ],
};

const SkillsSection = () => {
  const ref = React.useRef(null);
  const visible = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  const Column = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      width: 90%;
    }
  `;

  const ColumnTitle = styled.h4`
    font-size: 28px;
    margin-bottom: 1rem;
    color: #f8f8f8;
    text-align: left; /* ensure text is aligned left */
    width: 100%; /* optional, but ensures alignment within the full column */

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center; /* center text on smaller screens */
    }
  `;

  const IconGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  `;

  const SkillItem = styled.div`
    width: 90%;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    color: #f8f8f8;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    text-align: left;
    background-color: transp;
    border-radius: 16px;
    transition: transform 0.2s ease;

    @media screen {
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  `;

  const Label = styled.p`
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    color: #f8f8f8;
  `;

  return (
    <Background id='techstack'>
      <SkillsContainer ref={ref} className={visible ? 'visible' : ''}>
        <TechstackH3>Tech Stack</TechstackH3>
        <ColumnsWrapper>
          <Column>
            <ColumnTitle>Frontend</ColumnTitle>
            <IconGrid>
              {techStack.frontend.map((item) => (
                <SkillItem key={item.name}>
                  <Label>{item.label}</Label>
                </SkillItem>
              ))}
            </IconGrid>
          </Column>
          <Column>
            <ColumnTitle>Backend</ColumnTitle>
            <IconGrid>
              {techStack.backend.map((item) => (
                <SkillItem key={item.name}>
                  <Label>{item.label}</Label>
                </SkillItem>
              ))}
            </IconGrid>
          </Column>
          <Column>
            <ColumnTitle>Misc</ColumnTitle>
            <IconGrid>
              {techStack.misc.map((item) => (
                <SkillItem key={item.name}>
                  <Label>{item.label}</Label>
                </SkillItem>
              ))}
            </IconGrid>
          </Column>
          <Column>
            <ColumnTitle>Analysis</ColumnTitle>
            <IconGrid>
              {techStack.analysis.map((item) => (
                <SkillItem key={item.name}>
                  <Label>{item.label}</Label>
                </SkillItem>
              ))}
            </IconGrid>
          </Column>
        </ColumnsWrapper>
      </SkillsContainer>
    </Background>
  );
};

export default SkillsSection;
