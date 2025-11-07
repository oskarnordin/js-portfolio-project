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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    width: auto; /* Prevent overflow */
    max-width: 100vw;
    padding: 0 16px; /* Add a little horizontal padding */
    box-sizing: border-box;
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
  background: #5438F7;;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  color: #ffffff;);
  opacity: 0;
  margin: 8px;
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
            'Grit > talent',
            'You can just change your mind if wrong',
            'Clear writing is clear thinking',
            'Be the person taking notes, even if it’s just for yourself',
            'Being helpful compounds',
            'Study what worked for others, then take your own path',
            'Your best work comes from following your curiosity',
            'Growth potential > current skill',
            'Hire people you can learn from',
            'Listen, build, ship, tell the customer, then repeat forever',
            'More to come...'
          ];

          // distribute into 3 columns evenly
          const cols = [[], [], []];
          items.forEach((it, idx) => {
            cols[idx % 3].push(it);
          });

          return cols.map((colItems, colIndex) => (
            <div key={`col-${colIndex}`} style={{ ['--col-delay']: `${colIndex * 80}ms` }}>
              {colItems.map((t, i) => (
                <SmallCard key={`c${colIndex}-${i}`}>{t}</SmallCard>
              ))}
            </div>
          ));
        })()}
      </ColumnsContainer>
    </AboutMeCardContainer>
  );
};

export default AboutMeCard;
