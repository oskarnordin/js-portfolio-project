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
  max-width: 540;
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
  border-radius: 40%;
  width: 255px;
  height: 255px;
  padding: 16px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const ContactH3 = styled.h3`
  font-family: 'DX Slight Medium';
  font-style: italic;
  letter-spacing: 4px;
  color: #f8f8f8;
  font-size: 84px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const ContactP = styled.p`
  color: #f8f8f8;
  font-size: 22px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const ContactIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 18px;
`;

const Button = styled.a`
  justify-content: center;
  display: flex;
  color: #2d3748;
  font-weight: 600;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  /* Remove fixed width/height */
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 6px;
  transition: opacity 0.3s, transform 0.3s;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 36px;
    height: 36px;
    /* Make icon white */
    filter: invert(1) brightness(2);
  }
  /* For SVG icons, if you use them in the future */
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`;

const SocialIcon = styled.a`
  display: inline-block;
  transition: opacity 0.3s, transform 0.3s; // Add opacity to transition
  &:hover {
    opacity: 0.8;
  }
  svg {
    width: 48px;
    height: 48px;
    fill: #f8f8f8;
  }
`;

const ContactCard = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <ContactCardContainer ref={ref} className={isVisible ? 'visible' : ''}>
      <ContactH3>Let's Talk</ContactH3>
      <ContactP>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </ContactP>
      <SelfieImage src='/img/selfie.jpg' alt='Selfie of Oskar Nordin' />
      <ContactIconsWrapper>
        <Button href='mailto:oskarnordin1@gmail.com' id='email-button'>
          <ButtonIcon>
            <img
              src='/img/mail.png'
              alt='Mail icon'
              style={{
                width: 48,
                height: 49,
              }}
            />
          </ButtonIcon>
        </Button>
        <Button href='tel:+46701774998' id='phone-button'>
          <ButtonIcon>
            <img
              src='/img/call.png'
              alt='Phone icon'
              style={{
                width: 48,
                height: 48,
              }}
            />
          </ButtonIcon>
        </Button>
        <SocialIcon
          href='https://github.com/oskarnordin'
          target='_blank'
          aria-label='GitHub'
        >
          <svg viewBox='0 0 24 24'>
            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z' />
          </svg>
        </SocialIcon>
        <SocialIcon
          src='/img/linkedin.png'
          href='https://www.linkedin.com/in/oskar-nordin-908129b6/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <img
            src='/img/linkedin.svg'
            alt='LinkedIn icon'
            style={{
              width: 48,
              height: 48,
              padding: 4,
              filter: 'invert(1) brightness(2)',
            }}
          />
        </SocialIcon>
      </ContactIconsWrapper>
    </ContactCardContainer>
  );
};

export default ContactCard;
