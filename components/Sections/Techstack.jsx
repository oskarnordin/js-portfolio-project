// components/SkillsSection.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';
import { SectionContainer } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  scroll-margin-top: 90px;
  position: relative;
  height: auto;
  width: 100%;
  max-width: 100vw;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  background-color: transparent;
  color: #2d3748;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TechstackP = styled.p`
  color: var(--color-text);
  font-weight: 400;
  text-align: center;
  padding: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 12px 0;
  }
`;

const techStack = {
  frontend: [
    { name: 'html5', label: 'HTML5' },
    { name: 'css3', label: 'CSS3' },
    { name: 'javascript', label: 'JavaScript' },
    { name: 'typescript', label: 'TypeScript' },
    { name: 'react', label: 'React' },
    { name: 'react-router', label: 'React Router' },
    { name: 'tailwindcss', label: 'Tailwind CSS' }, // Added CSS for clarity
    { name: 'nextjs', label: 'Next.js' },
    { name: 'sass', label: 'Sass' },
    { name: 'accessibility', label: 'Accessibility (a11y)' },
  ],
  backend: [
    { name: 'nodejs', label: 'Node.js' },
    { name: 'express', label: 'Express.js' },
    { name: 'rest-apis', label: 'REST APIs' },
    // Removed: MongoDB, SQL, AWS, Terraform
  ],
  database: [
    { name: 'mongodb', label: 'MongoDB' },
    { name: 'sql', label: 'SQL' },
  ],
  devops: [
    { name: 'git', label: 'Git' },
    { name: 'github', label: 'GitHub' },
    { name: 'terraform', label: 'Terraform' },
  ],
  cloud: [{ name: 'aws', label: 'AWS (S3, Lambda)' }],
  tools: [
    // Renamed from misc
    { name: 'npm', label: 'NPM' },
    { name: 'vite', label: 'Vite' },
    { name: 'eslint', label: 'ESLint' },
  ],
  analysis: [
    { name: 'python', label: 'Python' },
    { name: 'pandas', label: 'Pandas' },
    { name: 'matplotlib', label: 'Matplotlib' },
    { name: 'seaborn', label: 'Seaborn' },
    { name: 'jupyter', label: 'Jupyter' },
    { name: 'numpy', label: 'NumPy' },
    { name: 'ab-testing', label: 'A/B Testing' },
  ],
};

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;
  justify-items: center;
  justify-content: center;
  width: min(1000px, 100%);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 2fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 16px;
  width: 100%;
`;

const ColumnTitle = styled.h4`
  font-size: 20px;
  font-family: var(--font-mono);
  font-weight: 600;
  margin: 0 0 12px 0;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 16px;
  border-radius: 12px;
  align-items: start;
  box-shadow: var(--shadow-1);
  background: rgba(255, 255, 255, 0.6);
  margin-bottom: 12px;
  width: 100%;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(12px);

  @keyframes cardFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.visible {
    animation: cardFadeIn 600ms ease-out forwards;
    animation-delay: calc(var(--i, 0) * 80ms);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SmallCard = styled.div`
  background: var(--color-primary);
  font-family: var(--font-mono);
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 12px;
  color: #ffffff;
  opacity: 0;
  transform: translateY(12px);
  animation: cardFade 600ms ease-out forwards;
  box-shadow: var(--shadow-1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 36px;
  width: 100%;

  @keyframes cardFade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TechstackIcon = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin: 0 auto 8px;
  filter: brightness(0.2) saturate(100%);
`;

const SkillsSection = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background>
      <SectionContainer id="techstack" style={{ minHeight: '80vh' }}>
        <Inner>
          <SkillsContainer ref={ref} className={isVisible ? 'visible' : ''} $visible={isVisible}>
            <h2>Tech Stack</h2>
            <TechstackP>Technologies and tools I use</TechstackP>
            <ColumnsWrapper>
              {Object.entries(techStack).map(([category, items], colIndex) => (
                <Column key={category}>
                  <TechstackIcon src={`/img/${category}.png`} alt={`${category} Icon`} />
                  <ColumnTitle>
                    {category
                      .split(/[-_]/)
                      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
                      .join(' ')}
                  </ColumnTitle>
                  <Card className={isVisible ? 'visible' : ''} style={{ ['--i']: colIndex }}>
                    {items.map((item) => (
                      <SmallCard key={item.name}>{item.label}</SmallCard>
                    ))}
                  </Card>
                </Column>
              ))}
            </ColumnsWrapper>
          </SkillsContainer>
        </Inner>
      </SectionContainer>
    </Background>
  );
};

export default SkillsSection;
