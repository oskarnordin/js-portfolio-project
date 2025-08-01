// components/SkillsSection.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { AngleDownImage } from '../SharedComponents';
import { MarginArrowContainer } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  scroll-margin-top: 90px; // Adjust to your navbar height

  position: relative;
  background-color: #ff5656;
  min-height: 80vh;
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
  max-width: 1100px;
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
  width: 100%;
  opacity: 0;
  transition: opacity 2s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
  }
`;

const TechstackH3 = styled.h3`
  color: #f8f8f8;
  font-family: 'DX Slight Medium';
  font-style: italic;
  letter-spacing: 4px;
  color: #f8f8f8;
  font-size: 84px;
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
  color: #f8f8f8;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding: 0px 32px px 32px;

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
    background-color: #ff5656;
    border-radius: 16px;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      width: 90%;
    }
  `;

  const ColumnTitle = styled.h4`
    font-size: 28px;
    font-family: 'Tomorrow', sans-serif;
    font-weight: 400;
    margin-top: 6px;
    color: #f8f8f8;
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
    color: #f8f8f8;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    text-align: center;
    background-color: transparent;
    border-radius: 16px;
    transition: transform 0.2s ease;
  `;

  const Label = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #f8f8f8;
    text-align: center;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease;
    }
  `;

  const FrontendIcon = styled.img`
    display: block;

    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    margin-top: 42px;
  `;

  const BackendIcon = styled.img`
    display: block;

    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    margin-top: 42px;
  `;

  const AnalysisIcon = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    margin-top: 42px;
  `;

  const MiscIcon = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    margin-top: 42px;
  `;

  return (
    <Background id='techstack'>
      <SkillsContainer
        ref={ref}
        className={isVisible ? 'visible' : ''}
        $visible={isVisible}
      >
        <TechstackH3>Tech Stack</TechstackH3>
        <TechstackP>Here are some of the technologies I work with.</TechstackP>
        <ColumnsWrapper>
          <Column>
            <FrontendIcon src='/img/frontend.svg' alt='Frontend Icon' />
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
            <BackendIcon src='/img/database.svg' alt='Database Icon' />
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
            <MiscIcon src='/img/misc.svg' alt='Misc Icon' />
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
            <AnalysisIcon src='/img/analysis.svg' alt='Analysis Icon' />
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
