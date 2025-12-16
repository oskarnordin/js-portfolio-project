import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../SharedComponents';
import AboutMeCard from '../Cards/AboutMeCard';
import { Inner } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  position: relative;
  scroll-margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: auto;
  z-index: 20;
  padding: var(--space-6);

  @media (max-width: 768px) {
    padding: var(--space-3);
    height: auto;
  }
`;

const FadeInContainer = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 2s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutMeSection = () => {
  const ref = React.useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background id='aboutme '>
      <SectionContainer style={{ position: 'relative', zIndex: 30 }}>
        <Inner>
          <FadeInContainer ref={ref} className={isVisible ? 'visible' : ''}>
            <AboutMeCard />
          </FadeInContainer>
        </Inner>
      </SectionContainer>
    </Background>
  );
};

export default AboutMeSection;
