import React, { useRef } from 'react';
import styled from 'styled-components';

const PrologueCardContainer = styled.div`
  width: 100%;
  max-width: 1000px;
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
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    width: auto; /* Prevent overflow */
    max-width: 100vw;
    padding: 0 16px; /* Add a little horizontal padding */
    box-sizing: border-box;
  }
`;

const PrologueH3 = styled.h3`
  font-family: 'DX Slight Medium';
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f8f8;
  font-size: 64px;
  letter-spacing: 4px;
  padding: 16px;
  text-decoration: none;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 64px;
    padding: 32px;
    margin: 5px 0;
  }
`;

const InfoP = styled.p`
  color: #f8f8f8;
  /* font-family: 'Source Code Pro', monospace; */
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.6;
  margin-bottom: 18px; /* Add space between paragraphs */
`;

const WordSpan = styled.span`
  transition: font-style 0.2s ease;
  cursor: default;

  &:hover {
    font-style: italic;
  }
`;

const PrologueP = styled.p`
  /* font-family: 'Source Code Pro', monospace; */
  color: #f8f7f7;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const PrologueCard = ({ title, info }) => {
  return (
    <PrologueCardContainer className='visible'>
      <PrologueH3>Prologue</PrologueH3>
      <PrologueP>Some forewords before we start.</PrologueP>
      <ColumnsContainer>
        <div>
          <InfoP>
            Growing up in the ’90s and early 2000s was something special for
            someone like me with a natural interest in technology. Experiencing
            the rise of personal computers in every home, paired with the advent
            of internet access, gave me a portal into a whole new world. It was
            exciting, uncharted, and full of possibility—no one really knew what
            it would become. I still remember websites and platforms that most
            people under 30 today never got to experience. Back then, the web
            had a certain threshold; it could be tricky to navigate, and if you
            weren’t careful, you might end up with a virus. Today, the internet
            is a much safer and more polished place (and “surfing the web” is a
            phrase you hardly hear anymore). While I prefer the internet as it
            is now, I’m grateful to have witnessed its earlier, messier
            version—it shaped my curiosity and taught me to explore.
          </InfoP>
          <InfoP>
            When I was 10, I convinced my dad to help me build my first website.
            I wrote the HTML, and he read from a thick manual as we
            pair-programmed—without even knowing that was a thing. It was
            challenging, and the result wasn’t exactly beautiful, but it was
            mine—and I was proud of it.
          </InfoP>
        </div>
        <div>
          <InfoP>
            Recently, I decided to build on those early experiences and learn
            how to create more advanced (and better-looking) websites. I applied
            to Technigo’s JavaScript Developer Bootcamp and was thrilled to be
            accepted. The six-month course has been packed with the tools,
            techniques, and mindset a good front-end developer needs. From the
            very beginning, it felt like the best decision I’d made in a long
            time. The teaching style matched how I learn, and I’ve grown a lot
            because of it.
          </InfoP>
          <InfoP>
            This portfolio is one of the projects I’ve created during my time at
            Technigo—and it’s just the beginning. I plan to keep updating it
            with apps I build, thoughts I have about programming, and, of
            course, ways for you to connect with me.
          </InfoP>
        </div>
      </ColumnsContainer>
    </PrologueCardContainer>
  );
};

export default PrologueCard;
