import React, { useRef } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const MyWordsCardContainer = styled.div`
  background-color: #f8f8f8; /* Match the background color of other cards */
  display: flex;
  flex-direction: column; /* Align content vertically */
  align-items: center;
  border-radius: 16px; /* Adjust to match other cards */
  height: 454px; /* Adjust height */
  width: 553px; /* Adjust width */
  padding: 40px;
  margin-bottom: 50px;
  text-align: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Match shadow style */
  transform: translateY(20px); /* Start with offset */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

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
  height: 200px; /* Adjust height */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 12px; /* Match other cards */
`;

const MyWordsH2 = styled.h2`
  color: #333; /* Adjust color */
  font-size: 24px; /* Adjust font size */
  font-weight: bold;
  margin: 10px 0;
  word-wrap: break-word; /* Prevent long words from breaking layout */
  text-align: center; /* Center text */
`;

const MyWordsH3 = styled.h3`
  color: #666; /* Adjust color */
  font-size: 16px; /* Adjust font size */
  font-weight: normal;
  margin: 5px 0;
  font-family: "DM Sans", sans-serif;
  word-wrap: break-word; /* Prevent long words from breaking layout */
  text-align: center; /* Center text */
`;

const MyWordsCard = ({ imgSrc, title, info }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <MyWordsCardContainer ref={ref} className={isVisible ? "visible" : ""}>
      <MyWordsImage src={imgSrc} alt={title} />
      <MyWordsH2>{title}</MyWordsH2>
      {info.map((info, index) => (
        <MyWordsH3 key={index}>{info}</MyWordsH3>
      ))}
    </MyWordsCardContainer>
  );
};

export default MyWordsCard;
