import React from 'react';
import styled from 'styled-components';

const MyWordsCardContainer = styled.div`
  background-color: transp;
  display: flex;
  flex-direction: column; /* Align content vertically */
  align-items: left;
  border-radius: 16px; /* Adjust to match other cards */
  height: 454px; /* Adjust height */
  width: 450px; /* Adjust width */
  padding: 40px;
  margin-bottom: 50px;
  text-align: center;
  gap: 10px;
  transform: translateY(20px); /* Start with offset */
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
  }
`;

const MyWordsImage = styled.img`
  width: 100%; /* Ensure the image scales with the container */
  height: 300px; /* Adjust height */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 12px; /* Match other cards */
`;

const MyWordsH2 = styled.h2`
  color: #333; /* Adjust color */
  font-family: 'DM Sans';
  font-size: 28px; /* Adjust font size */
  font-weight: bold;
  margin: 10px 0;
  word-wrap: break-word;
  text-align: left; /* Center text */
`;

const Description = styled.p`
  color: #000000; /* Adjust color */
  font-family: 'DM Sans';
  font-size: 16px; /* Adjust font size */
  font-weight: normal;
  margin: 5px 0;
  font-family: 'DM Sans', sans-serif;
  word-wrap: break-word; /* Prevent long words from breaking layout */
  text-align: left; /* Center text */
`;

const Button = styled.a`
  background-color: #4b4efc;
  justify-content: center;
  display: flex;
  color: white;
  font-weight: 600;
  width: 120px;
  font-size: 16px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #6f71ff;
  }
`;

const MyWordsCard = ({ imgSrc, title, info }) => {
  return (
    <MyWordsCardContainer>
      <MyWordsImage src={imgSrc} alt={title} />
      <MyWordsH2>{title}</MyWordsH2>
      {info.map((item, index) => (
        <Description key={index}>{item}</Description>
      ))}
      <Button>Read more</Button>
    </MyWordsCardContainer>
  );
};

export default MyWordsCard;
