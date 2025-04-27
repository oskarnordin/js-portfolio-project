import React from "react";
import styled from "styled-components";

const ContactCardContainer = styled.div`
  background-color: transparent;
  display: flex;
  border-radius: 28px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 650px;
  padding: 40px;
  width: 450px;
  gap: 10px;
  text-align: center;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  /* backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px); */
  @media (max-width: 1200px) {
    width: 100%;
    height: 450px; /* Full viewport height on mobile */
    border-radius: 18px; /* Remove border radius for a full-screen effect */
    padding: 0px; /* Adjust padding for smaller screens */
  }
`;

const SelfieImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  padding: 10px;
`;

const ContactImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

const ContactH2 = styled.h2`
  color: black;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactH3 = styled.h3`
  background-color: #e2e8f0;
  justify-content: center;
  align-items: center;
  font-family: DM sans;
  display: flex;
  color: #2d3748;
  font-weight: 600;
  font-size: 32px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
`;

const ContactP = styled.p`
  background-color: #e8e8e8;
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

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column; /* Arrange InfoH3 elements in a row */
  gap: 10px; /* Add spacing between the elements */
  justify-content: center; /* Center the row */
  flex-wrap: wrap; /* Allow wrapping if there are too many items */
`;

const ContactCard = () => {
  return (
    <ContactCardContainer>
      <ContactH2>Let's talk</ContactH2>
      <SelfieImage src="../img/Selfie-round.png" alt="Selfie of Oskar Nordin" />
      <ContactH3>+46701774998</ContactH3>
      <ContactH3>oskarnordin1@gmail.com</ContactH3>
    </ContactCardContainer>
  );
};

export default ContactCard;
