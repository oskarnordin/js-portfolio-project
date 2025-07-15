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
  font-size: 34px;
  margin-bottom: 10px;
`;

const ContactP = styled.p`
  font-family: 'DM Sans', sans-serif;
  color: #f8f8f8;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 16px;

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
  background-color: #fffbf9;
  justify-content: center;
  display: flex;
  color: #2d3748;
  font-weight: 600;
  width: 120px;
  height: 26px;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #afabc2;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;

    width: 30%; /* Full width on mobile */
  }
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  svg {
    width: 18px;
    height: 18px;
    fill: #2d3748;
  }
`;

const Socials = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

const SocialIcon = styled.a`
  display: inline-block;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.15);
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
      <ContactH2>Let's Talk</ContactH2>
      <ContactP>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </ContactP>
      <SelfieImage src='/img/selfie.jpg' alt='Selfie of Oskar Nordin' />
      <ContactIconsWrapper>
        <Button href='mailto:oskarnordin1@gmail.com'>
          <ButtonIcon>
            <svg viewBox='0 0 24 24'>
              <path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 6.99 8-6.99V20H4z' />
            </svg>
          </ButtonIcon>
          Email
        </Button>
        <Button href='tel:+46701774998'>
          <ButtonIcon>
            <svg viewBox='0 0 24 24'>
              <path d='M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z' />
            </svg>
          </ButtonIcon>
          Call
        </Button>
      </ContactIconsWrapper>
      <Socials>
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
          href='https://www.linkedin.com/in/oskar-nordin-908129b6/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <svg viewBox='0 0 24 24'>
            <path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z' />
          </svg>
        </SocialIcon>
      </Socials>
    </ContactCardContainer>
  );
};

export default ContactCard;
