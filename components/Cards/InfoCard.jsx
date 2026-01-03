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
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
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

const InfoPContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoCard = ({ title, info }) => {
  return (
    <InfoCardContainer className="visible">
      <InfoH2>{title}</InfoH2>
      <InfoPContainer>
        {info.map((item, index) => (
          <InfoH3 key={index}>{item}</InfoH3>
        ))}
      </InfoPContainer>
    </InfoCardContainer>
  );
};

export default InfoCard;
