import React from "react";
import styled from "styled-components";

const MyWordsCardContainer = styled.div`
  background-color: #F8F8F8; /* Match the background color of other cards */
  display: flex;
  flex-direction: column; /* Align content vertically */
  align-items: center;
  border-radius: 16px; /* Adjust to match other cards */
  height: 454px; /* Adjust height */
  width: 553px; /* Adjust width */
  padding: 20px; /* Adjust padding */
  text-align: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Match shadow style */


  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
  }
`;

const MyWordsImage = styled.img`
  width: 100%;
  height: 200px; /* Adjust height */
  object-fit: cover;
  border-radius: 12px; /* Match other cards */
`;

const MyWordsH2 = styled.h2`
  color: #333; /* Adjust color */
  font-size: 24px; /* Adjust font size */
  font-weight: bold;
  margin: 10px 0;
`;

const MyWordsH3 = styled.h3`
  color: #666; /* Adjust color */
  font-size: 16px; /* Adjust font size */
  font-weight: normal;
  margin: 5px 0;
  font-family: "DM Sans", sans-serif;
`;

const MyWordsCard = ({ imgSrc, title, info }) => {
  return (
    <MyWordsCardContainer>
      <MyWordsImage src={imgSrc} alt={title} />
      <MyWordsH2>{title}</MyWordsH2>
      {info.map((info, index) => (
        <MyWordsH3 key={index}>{info}</MyWordsH3>
      ))}
    </MyWordsCardContainer>
  );
};

export default MyWordsCard;
