// components/SkillsSection.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { AngleDownImage, Inner } from '../SharedComponents';
import { MarginArrowContainer } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  scroll-margin-top: 90px; // Adjust to your navbar height
  position: relative;
  height: 80vh;
  width: 100%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 0 0 2rem 0;
  }
`;

const SkillsContainer = styled.div`
  max-width: 100%; 

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
  align-items: center; /* Center horizontally */
  padding: 2rem;
  box-sizing: border-box;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TechstackH1 = styled.h1`
  font-size: 60px;
  padding: 16px 32px;
  border-radius: 16px;
  text-decoration: none;

  width: auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const TechstackP = styled.p`

  font-size: 14px;
  font-weight: 400;
  text-align: center;
  padding: 0 32px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const techStack = {
  frontend: [
    { name: 'html5', label: 'HTML5' },
    { name: 'css3', label: 'CSS3' },
    { name: 'js', label: 'JavaScript' },
    { name: 'typescript', label: 'TypeScript' },
    { name: 'reactjs', label: 'React' },
    { name: 'tailwindcss', label: 'Tailwind CSS' },
    { name: 'styled-components', label: 'Styled Comp.' },
    { name: 'zustand', label: 'Zustand' },
  ],
  backend: [
    { name: 'nodejs', label: 'Node.js' },
    { name: 'mongodb', label: 'MongoDB' },
    { name: 'expressjs', label: 'Express.js' },
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
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: center; /* Center columns horizontally */
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    gap: 12%; /* Add some space between columns */

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;
    }
  `;

  const Column = styled.div`
    width: 15%;
    min-width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content in column */
    justify-content: center;
    background-color:transparent;
    border-radius: 16px;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      width: 90%;
    }
  `;

  const ColumnTitle = styled.h4`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-top: 6px;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 26px;
      text-align: center;
    }
  `;

  const IconGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; /* Center vertically */
    gap: 14px;
  `;

  const SkillItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; /* Stack label vertically */
    align-items: center; /* Center label horizontally */
    justify-content: center;
    font-size: 14px;
    text-align: center;
    background-color: transparent;
    border-radius: 16px;
    transition: transform 0.2s ease;
  `;

  const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  `;

  // Single shared icon component for tech stack icons
  const TechstackIcon = styled.img`
    display: block;
    width: 55px;
    height: 55px;
    object-fit: contain;
    border-radius: 50%;
    margin-top: 42px;
    /* Force icon to render dark regardless of source colors */
    filter: brightness(0.2) saturate(100%);
  `;

  return (
    <Background id='techstack'>
      <Inner>
        <SkillsContainer
          ref={ref}
          className={isVisible ? 'visible' : ''}
          $visible={isVisible}
        >
          <TechstackH1>Tech Stack</TechstackH1>
          <ColumnsWrapper>
          <Column>
            <TechstackIcon src='/img/frontend.svg' alt='Frontend Icon' />
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
            <TechstackIcon src='/img/database.svg' alt='Database Icon' />
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
            <TechstackIcon src='/img/misc.svg' alt='Misc Icon' />
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
            <TechstackIcon src='/img/analysis.svg' alt='Analysis Icon' />
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
      </Inner>
    </Background>
  );
};

export default SkillsSection;
