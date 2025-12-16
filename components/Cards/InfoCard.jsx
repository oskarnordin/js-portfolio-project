import React, { useRef } from 'react';
import styled from 'styled-components';

const InfoCardContainer = styled.div`
  background-color: transparent;
  display: flex;
  border-radius: 28px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 600px;
  padding: 40px;
  width: 100%;
  max-width: 350px;
  gap: 10px;
  text-align: center;
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start with offset */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InfoIcons = styled.img`
  display: none;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

const InfoH2 = styled.h2`
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

const InfoH3 = styled.h3`
  background-color: var(--color-primary);
  min-width: 120px;
  justify-content: center;
  align-items: center;
  font-family: DM sans;
  display: flex;
  color: #f8f8f8;
  font-weight: 600;
  font-size: 18px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
`;

const infoP = styled.p`
  background-color: #434343;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #2d3748;
  font-weight: 600;
  width: 120px;
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
  flex-direction: row; /* Arrange InfoH3 elements in a row */
  gap: 10px; /* Add spacing between the elements */
  justify-content: center; /* Center the row */
  flex-wrap: wrap; /* Allow wrapping if tF too many items */
`;

const InfoCard = ({ title, info }) => {
  return (
    <InfoCardContainer className={'visible'}>
      <InfoH2>{title}</InfoH2>
      <InfoPContainer>
        {info.map((info, index) => (
          <InfoH3 key={index}>{info}</InfoH3>
        ))}
      </InfoPContainer>
    </InfoCardContainer>
  );
};

export default InfoCard;
