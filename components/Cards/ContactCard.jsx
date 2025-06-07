import React, { useRef } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ContactCardContainer = styled.div`
  background-color: transparent;
  display: flex;
  border-radius: 28px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px;
  width: 450px;
  gap: 10px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 450px;
    border-radius: 18px;
    padding: 0px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SelfieImage = styled.img`
  border-radius: 12px;
  width: 240px;
  height: 240px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    padding: 6px;
  }
`;

const ContactH2 = styled.h2`
  font-family: 'DM Sans', sans-serif;
  color: #f8f8f8;
  font-size: 44px;
  margin-bottom: 10px;
`;

const ContactIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 18px;
`;

const ContactIcon = styled.a`
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 55px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  img {
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const Button = styled.a`
  background-color: #331993;
  justify-content: center;
  display: flex;
  color: white;
  font-weight: 600;
  width: 120px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #4220bd;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;

    width: 30%; /* Full width on mobile */
  }
`;

const ContactCard = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <ContactCardContainer ref={ref} className={isVisible ? 'visible' : ''}>
      <ContactH2>Let's Talk</ContactH2>
      <SelfieImage src='/img/selfie.png' alt='Selfie of Oskar Nordin' />
      <ContactIconsWrapper>
        <Button href='mailto:oskarnordin1@gmail.com'>Email</Button>
        <Button href='tel:+46701234567'>Call</Button>
        <Button href='https://www.linkedin.com/in/oskarnordin/'>
          LinkedIn
        </Button>
      </ContactIconsWrapper>
    </ContactCardContainer>
  );
};

export default ContactCard;
