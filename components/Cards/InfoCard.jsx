import React, { useRef } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const InfoCardContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  border-radius: 28px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 650px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  gap: 10px;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
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
  color: black;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoH3 = styled.h3`
  background-color: #e2e8f0;
  justify-content: center;
  align-items: center;
  font-family: DM sans;
  display: flex;
  color: #2d3748;
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
  flex-wrap: wrap; /* Allow wrapping if there are too many items */
`;

const InfoCard = ({ title, info }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <InfoCardContainer ref={ref} className={isVisible ? "visible" : ""}>
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
