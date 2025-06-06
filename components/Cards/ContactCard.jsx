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
  min-height: 650px;
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
    border-radius: 18px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SelfieImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    padding: 6px;
  }
`;

const ContactH2 = styled.h2`
  font-family: 'DM Sans', sans-serif;
  color: black;
  font-size: 44px;
  margin-bottom: 10px;
`;

const ContactIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 42px;
  margin-top: 24px;
`;

const ContactIcon = styled.a`
  display: flex;
  width: 55px;
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

const ContactCard = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <ContactCardContainer ref={ref} className={isVisible ? 'visible' : ''}>
      <ContactH2>Let's Talk</ContactH2>
      <SelfieImage src='/img/selfie.png' alt='Selfie of Oskar Nordin' />
      <ContactIconsWrapper>
        <ContactIcon
          id='SocialsIcon'
          href='https://www.linkedin.com/in/oskarnordin/'
        >
          <img src='/img/mail-logo.png' alt='LinkedIn' width='60' height='60' />
        </ContactIcon>
        <ContactIcon id='SocialsIcon' href='mailto:oskarnordin1@gmail.com'>
          <img src='/img/call-logo.png' alt='LinkedIn' width='60' height='60' />
        </ContactIcon>
        <ContactIcon
          id='SocialsIcon'
          href='https://www.facebook.com/profile.php?id=1078076440'
        >
          <img src='/img/fb-logo.png' alt='Facebook' width='60' height='60' />
        </ContactIcon>
        <ContactIcon
          id='SocialsIcon'
          href='https://www.instagram.com/oskaralexander/'
        >
          <img src='/img/ig-logo.png' alt='Instagram' width='60' height='60' />
        </ContactIcon>
        <ContactIcon
          id='SocialsIcon'
          href='https://www.linkedin.com/in/oskarnordin/'
        >
          <img src='/img/li-logo.png' alt='LinkedIn' width='60' height='60' />
        </ContactIcon>
      </ContactIconsWrapper>
    </ContactCardContainer>
  );
};

export default ContactCard;
