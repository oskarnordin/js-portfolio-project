import React from 'react';
import styled from 'styled-components';
import { AngleDownImage } from '../SharedComponents';
import { SectionContainer } from '../SharedComponents';
import PrologueCard from '../Cards/PrologueCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  position: relative;
  scroll-margin-top: 90px; // Adjust to your navbar height
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffbf9;
  height: 100vh;
  width: auto;
  z-index: 20;

  padding: 0 0 2rem 0;

  @media (max-width: 768px) {
    padding: 0 0 1rem 0;
    height: auto;
  }
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
    <Background id='prologue'>
      <SectionContainer style={{ position: 'relative', zIndex: 30 }}>
        <FadeInContainer ref={ref} className={isVisible ? 'visible' : ''}>
          <PrologueCard />
        </FadeInContainer>
      </SectionContainer>
    </Background>
  );
};

export default PrologueSection;
