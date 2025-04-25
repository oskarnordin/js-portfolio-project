import React from "react";
import styled from "styled-components";

const MyWordsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  padding: 15px;
  position: relative;
  height: 500px;
  max-width: 450px;
`;

const MyWordsCard = ({ icon, title, info }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <img src={icon} alt={title} className="h-40 w-full object-cover" />
      <h2 className="text-xl font-bold text-left">{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default MyWordsCard;
