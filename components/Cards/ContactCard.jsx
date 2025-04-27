import React, { useRef } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start with offset */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 450px;
    border-radius: 18px;
    padding: 0px;
  }
`;

const SelfieImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  padding: 10px;
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
  font-size: 24px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
`;

const ContactCard = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <ContactCardContainer ref={ref} className={isVisible ? "visible" : ""}>
      <ContactH2>Let's talk</ContactH2>
      <SelfieImage src="../img/Selfie-round.png" alt="Selfie of Oskar Nordin" />
      <ContactH3>+46701774998</ContactH3>
      <ContactH3>oskarnordin1@gmail.com</ContactH3>
    </ContactCardContainer>
  );
};

export default ContactCard;
