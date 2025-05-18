import React, { useRef } from "react";
import styled from "styled-components";

const PrologueCardContainer = styled.div`
  background-color: transparent;
  display: flex;
  border-radius: 28px;
  flex-wrap: wrap;
  height: 100%;
  padding: 40px;
  padding-bottom: 70px;
  width: 100%;
  max-width: 1000px;
  gap: 10px;
  text-align: left;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr; // Each column is now twice as wide as before
  gap: 24px;
  width: 100%;
  height: 600px;
`;

const PrologueH3 = styled.h3`
  font-family: DM sans;
  display: flex;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically (optional)
  color: #2d3748;
  font-weight: 600;
  font-size: 34px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
`;

const InfoP = styled.p`
  display: -webkit-box;
  line-height: normal;
  -webkit-line-clamp: 32; /* Adjust number of lines as needed */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #2d3748;
  font-size: 16px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;

  @media (max-width: 1200px) {
    padding: 0px;
  }
`;

const InfoPContainer = styled.div`
  display: flex;
  flex-direction: column; /* Arrange InfoH3 elements in a row */
  gap: 10px; /* Add spacing between the elements */
  justify-content: center; /* Center the row */
  flex-wrap: wrap; /* Allow wrapping if there are too many items */
`;

const PrologueCard = ({ title, info }) => {
  return (
    <PrologueCardContainer className="visible">
      <PrologueH3>Prologue</PrologueH3>
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
          <img src="/img/sign.png" style={{ width: "220px" }} alt="Signature" />
        </div>
      </ColumnsContainer>
    </PrologueCardContainer>
  );
};

export default PrologueCard;
