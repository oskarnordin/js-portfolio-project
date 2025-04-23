import React from "react";
import styled from "styled-components";

const InfoIcons = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const InfoH2 = styled.h2`
  color: black;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoCard = ({ icon, title, info }) => {
  return (
    <div className="sectionCards">
      <InfoIcons src={icon} alt={`${title} icon`} />
      <InfoH2>{title}</InfoH2>
      {info.map((info, index) => (
        <p key={index}>{info}</p>
      ))}
    </div>
  );
};

export default InfoCard;
