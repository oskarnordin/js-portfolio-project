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
  z-index: 20;
  display: flex;
  flex-direction: column;

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
  padding: var(--space-2);
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
  font-family: var(--font-mono);
  font-weight: 400;
  padding: var(--space-3);

  @media (max-width: 768px) {
    font-size: 16px;
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
  cloud: [
    { name: 'aws', label: 'AWS (S3, Lambda)' }, // Expanded to include general AWS skill
  ],
  tools: [ // Renamed from misc
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
  /* Layout into 2 rows: items flow by column so they distribute evenly across two rows */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  grid-template-rows: repeat(2, auto);
  align-items: start;
  justify-content: center;
  width: min(900px, 100%);
  margin: 0 auto;
  gap: 12px;

  @media (max-width: 1024px) {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  grid-template-rows: repeat(2, auto);
  align-items: start;
  width: min(900px, 100%);
  margin: 0 auto;
  gap: 48px;
  }

  @media (max-width: 768px) {
    /* Mobile: switch back to two columns (single-column items per row) */
    display: grid;
    grid-auto-flow: initial;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    grid-template-rows: none;
    justify-content: center;
    column-gap: 32px;
    row-gap: 24px;
  }
`;

const Column = styled.div`
  width: min(200px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border-radius: 16px;

  @media (max-width: 1200px) {
  width: min(160px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border-radius: 16px;
  }

  @media (max-width: 768px) {
  width: min(160px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 16px;
  }
`;

const ColumnTitle = styled.h4`
  font-size: 16px;
  font-family: var(--font-mono);
  font-weight: 400;
  margin-top: 12px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  padding: 8px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 10px;
  min-width: 100px;

  @keyframes cardFade {
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 100%;
    max-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

// Single shared icon component for tech stack icons
const TechstackIcon = styled.img`
  display: block;
  width: 55px;
  height: 55px;
  object-fit: contain;
  margin-top: 42px;
  /* Force icon to render dark regardless of source colors */
  filter: brightness(0.2) saturate(100%);
`;

const SkillsSection = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <SectionContainer id='techstack' style={{ minHeight: '80vh' }}>
      <Inner>
        <SkillsContainer
          ref={ref}
          className={isVisible ? 'visible' : ''}
          $visible={isVisible}
        >
          <h1>Tech Stack</h1>
          <TechstackP>Tools and technologies I work with</TechstackP>
          <ColumnsWrapper>
            {Object.entries(techStack).map(([category, items]) => (
              <Column key={category}>
                <TechstackIcon src={`/img/${category}.svg`} alt={`${category} Icon`} />
                <ColumnTitle>{category.split(/[-_]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ')}</ColumnTitle>
                <CardsGrid>
                  {items.map((item, i) => (
                    <SmallCard key={item.name} style={{ animationDelay: `${i * 80}ms` }}>{item.label}</SmallCard>
                  ))}
                </CardsGrid>
              </Column>
            ))}
          </ColumnsWrapper>
        </SkillsContainer>
      </Inner>
    </SectionContainer>
  );
};

export default SkillsSection;
