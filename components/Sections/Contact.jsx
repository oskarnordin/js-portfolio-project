import React, { useRef } from 'react';
import ContactCard from '../Cards/ContactCard';
import { Inner } from '../SharedComponents';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  position: relative;
  display: flex;
  height: auto;
  width: 100%;
  z-index: 20;
`;

const GridLayout = styled.div`
  height: auto;
  min-height: 80vh;
  color: #f8f8f8;
  position: relative;
  z-index: 30;
  font-weight: 300;
  grid-column: span 4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const FadeInContainer = styled.div`
  opacity: 0;
  transform: translateY(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 2s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactSection = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background>
      <GridLayout id='contact'>
        <Inner>
          <FadeInContainer ref={ref} className={isVisible ? 'visible' : ''}>
            <ContactCard />
          </FadeInContainer>
        </Inner>
      </GridLayout>
    </Background>
  );
};

export default ContactSection;
