import React, { useRef } from 'react';
import styled from 'styled-components';

const AboutMeCardContainer = styled.div`
  max-width: 100%;
  gap: 10px;
  text-align: left;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevent horizontal scroll */

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: auto;
    background-color: transparent;
    padding: 16px 0 32px 0; /* Reduce padding on mobile */
    margin: 0 16px; /* Add margin to prevent overflow */
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* center the cluster */
  align-content: center;
  gap: 4px
  width: 100%;
  box-sizing: border-box;
  padding: 8px 0;

  @media (max-width: 480px) {
    gap: 10px;
    padding: 6px 8px;
  }
`;

const ListBox = styled.div`
  border: 1px solid rgba(0,0,0,0.12);
  padding: 14px 18px;
  border-radius: 8px;
  background: #fff;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SmallCard = styled.div`
  background: #5438F7;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  color: #ffffff;
  opacity: 0;
  margin: 8px auto; /* center the inline-block */
  display: inline-block; /* shrink to fit content */
  width: fit-content;
  max-width: 100%;
  transform: translateY(12px);
  animation: cardFade 600ms ease-out forwards;
  /* allow per-column delay via --col-delay set on parent column */
  animation-delay: var(--col-delay, 0ms);
  text-align: center;

  @keyframes cardFade {
    to { opacity: 1; transform: translateY(0); }
  }
`;

const AboutMeH1 = styled.h1`
  color: --var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  padding: 16px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const InfoP = styled.p`
  font-weight: 400;
  max-width: auto;
  font-size: 18px;
  text-decoration: none;
  line-height: 1.6;
  margin-bottom: 18px; /* Add space between paragraphs */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

const WordSpan = styled.span`
  transition: font-style 0.2s ease;
  cursor: default;
`;

const AboutMeP = styled.p`
  color: var(--color-text);
  font-weight: 400;
  text-align: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const AboutMeCard = ({ title, info }) => {
  return (
    <AboutMeCardContainer className='visible'>
      <AboutMeH1>About Me</AboutMeH1>
      <AboutMeP>Things I believe in</AboutMeP>
      <ColumnsContainer>
        {(() => {
          const items = [
            'Traveling opens your mind',
            'Human connection',
            'Tech makes the World better',
            'Everybody needs a tribe',
            'Surround yourself with people you can learn from',
            'Your best work comes from following your curiosity',
            'Clear writing is clear thinking',
            'You can just change your mind if wrong',
            'Rest is productive',
            "Make things you’d actually use",
            'Quantity creates quality',
            'Great tech feels like magic because it removes friction',
            'Code is creativity in logic form',
            'Every line of code is a small act of optimism',
            "Pressure reveals who’s prepared",
            "Champions are built in the quiet hours",
            'The best teams play for each other, not themselves',
            'The best tech teams build trust before features',
            'Great teams debate ideas, not people',
            'Small teams with purpose beat big teams without direction',
            'A good team celebrates progress, not just launches',
            'Building is the best form of thinking',
            "You can’t innovate while staying comfortable",
            'Growth hides in discomfort',
            'Every failure is just data with feelings',
            'The long game is played one focused day at a time',
          ];

          return items.map((t, i) => (
            <SmallCard key={`item-${i}`} style={{ ['--col-delay']: `${i * 30}ms` }}>{t}</SmallCard>
          ));
        })()}
      </ColumnsContainer>
    </AboutMeCardContainer>
  );
};

export default AboutMeCard;
