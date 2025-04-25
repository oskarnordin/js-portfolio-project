import React from "react";
import InfoCard from "../Cards/InfoCard";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const GridLayout = styled.div`
  height: 100vh;
  background-color: #e8e8e8;
  font-family: Teko, sans-serif;
  font-size: 2em;
  color: #000000;
  position: relative;
  z-index: 30;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  place-items: center;
`;

const MyWordsSection = () => {
  return (
    <GridLayout id="myWords">
      <InfoCard
        icon="../img/weather-1.png"
        title="My Words"
        info={["Hello World"]} // Changed to an array
      />
      <CenteredContainer>
        <AngleDownImage src="img/angle-square-down.png" alt="Angle down icon" />
      </CenteredContainer>
    </GridLayout>
  );
};

export default MyWordsSection;
