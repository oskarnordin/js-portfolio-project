import React from "react";
import styled from "styled-components";

const InfoCardContainer = styled.div`
  display: flex;
  border-radius: 28px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 450px;
  max-width: 450px;
  gap: 20px;
  padding: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  @media (max-width: 768px) {
    height: 50vh; /* Full viewport height on mobile */
    width: 100%; /* Full width on mobile */
    border-radius: 18px; /* Remove border radius for a full-screen effect */
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;

const InfoIcons = styled.img`
  display: none;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const InfoH2 = styled.h2`
  color: black;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const infoP = styled.p`
  color: black;
  margin-bottom: 10px;
`;

const InfoCard = ({ icon, title, info }) => {
  return (
    <InfoCardContainer>
      <InfoIcons src={icon} alt={`${title} icon`} />
      <InfoH2>{title}</InfoH2>
      {info.map((info, index) => (
        <infoP key={index}>{info}</infoP>
      ))}
    </InfoCardContainer>
  );
};

export default InfoCard;
