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
  flex-wrap: wrap;  gap: 4px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
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

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.li`
  background: var(--color-primary);
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  color: #ffffff;
  opacity: 0;
  transform: translateY(12px);
  animation: itemFade 600ms ease-out forwards;
  animation-delay: var(--col-delay, 0ms);
  text-align: center;

  @keyframes itemFade {
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Two-column text layout for About Me
const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ColText = styled.div`
  p {
    margin: 0 0 1rem 0;
    line-height: 1.6;
    color: var(--color-text);
    font-family: var(--font-mono);
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
      <h2>About Me</h2>
      <AboutMeP>My journey</AboutMeP>
      <ColumnsContainer>
        <TwoColGrid>
          <ColText>
            <p>Growing up in the ’90s and early 2000s was something special for someone like me with a natural interest in technology. Experiencing the rise of personal computers in every home, paired with the advent of internet access, gave me a portal into a whole new world. It was exciting, uncharted, and full of possibility—no one really knew what it would become. I still remember websites and platforms that most people under 30 today never got to experience. Back then, the web had a certain threshold; it could be tricky to navigate, and if you weren’t careful, you might end up with a virus. Today, the internet is a much safer and more polished place (and “surfing the web” is a phrase you hardly hear anymore). While I prefer the internet as it is now, I’m grateful to have witnessed its earlier, messier version—it shaped my curiosity and taught me to explore.</p>

            <p>When I was 10, I convinced my dad to help me build my first website. I wrote the HTML, and he read from a thick manual as we pair-programmed—without even knowing that was a thing. It was challenging, and the result wasn’t exactly beautiful, but it was mine—and I was proud of it.</p>
          </ColText>

          <ColText>
            <p>Recently, I decided to build on those early experiences and learn how to create more advanced (and better-looking) websites. I applied to Technigo’s JavaScript Developer Bootcamp and was thrilled to be accepted. The six-month course has been packed with the tools, techniques, and mindset a good front-end developer needs. From the very beginning, it felt like the best decision I’d made in a long time. The teaching style matched how I learn, and I’ve grown a lot because of it.</p>

            <p>This portfolio is one of the projects I’ve created during my time at Technigo—and it’s just the beginning. I plan to keep updating it with apps I build, thoughts I have about programming, and, of course, ways for you to connect with me.</p>
          </ColText>
        </TwoColGrid>
      </ColumnsContainer>
    </AboutMeCardContainer>
  );
};

export default AboutMeCard;
