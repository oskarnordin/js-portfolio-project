// components/SkillsSection.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  /* Adjust to your navbar height */
  scroll-margin-top: 90px;
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
  align-items: center;
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
    { name: 'react-router', label: 'React Router' },
    { name: 'tailwindcss', label: 'Tailwind' },
    { name: 'nextjs', label: 'Next.js' },
    { name: 'sass', label: 'SASS' },
    { name: 'accessibility', label: 'Accessibility' },
  ],
  backend: [
    { name: 'nodejs', label: 'Node.js' },
    { name: 'expressjs', label: 'Express.js' },
    { name: 'rest-apis', label: 'REST APIs' },
    { name: 'mongodb', label: 'MongoDB' },
    { name: 'sql', label: 'SQL' },
  { name: 'aws', label: 'AWS (S3, Lambda)' },
    { name: 'terraform', label: 'Terraform' },
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
    { name: 'NumPy', label: 'NumPy' },
    { name: 'ab-testing', label: 'A/B testing' },
  ],  
};

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  align-items: center;
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
  margin-top: 12px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  padding: 8px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SmallCard = styled.div`
  background: #5438f7;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 12px;
  color: #ffffff;
  opacity: 0;
  transform: translateY(12px);
  animation: cardFade 600ms ease-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 10px;

  @keyframes cardFade {
    to { opacity: 1; transform: translateY(0); }
  }
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

const SkillsSection = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background id='techstack'>
      <Inner>
        <SkillsContainer
          ref={ref}
          className={isVisible ? 'visible' : ''}
          $visible={isVisible}
        >
          <TechstackH1>Tech Stack</TechstackH1>
          <TechstackP>Tools and technologies I work with</TechstackP>
          <ColumnsWrapper>
            <Column>
              <TechstackIcon src='/img/frontend.svg' alt='Frontend Icon' />
              <ColumnTitle>Frontend</ColumnTitle>
              <CardsGrid>
                {techStack.frontend.map((item, i) => (
                  <SmallCard key={item.name} style={{ animationDelay: `${i * 80}ms` }}>{item.label}</SmallCard>
                ))}
              </CardsGrid>
            </Column>

            <Column>
              <TechstackIcon src='/img/database.svg' alt='Database Icon' />
              <ColumnTitle>Backend</ColumnTitle>
              <CardsGrid>
                {techStack.backend.map((item, i) => (
                  <SmallCard key={item.name} style={{ animationDelay: `${i * 80}ms` }}>{item.label}</SmallCard>
                ))}
              </CardsGrid>
            </Column>

            <Column>
              <TechstackIcon src='/img/misc.svg' alt='Misc Icon' />
              <ColumnTitle>Misc</ColumnTitle>
              <CardsGrid>
                {techStack.misc.map((item, i) => (
                  <SmallCard key={item.name} style={{ animationDelay: `${i * 80}ms` }}>{item.label}</SmallCard>
                ))}
              </CardsGrid>
            </Column>

            <Column>
              <TechstackIcon src='/img/analysis.svg' alt='Analysis Icon' />
              <ColumnTitle>Analysis</ColumnTitle>
              <CardsGrid>
                {techStack.analysis.map((item, i) => (
                  <SmallCard key={item.name} style={{ animationDelay: `${i * 80}ms` }}>{item.label}</SmallCard>
                ))}
              </CardsGrid>
            </Column>
          </ColumnsWrapper>
        </SkillsContainer>
      </Inner>
    </Background>
  );
};

export default SkillsSection;
