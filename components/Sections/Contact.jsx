import React from "react";
import ContactCard from "../Cards/ContactCard";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Background = styled.div`
  position: relative;
  background-color: #e6e6e6;
  min-height: 100vh;
  width: 100%;
  z-index: 20;
`;

const GridLayout = styled.div`
  min-height: 100vh;
  background-color: #eeeeee;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  grid-column: span 4;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ContactSection = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  const handleScroll = () => {
    if (isVisible) {
      ref.current.classList.add("visible");
    } else {
      ref.current.classList.remove("visible");
    }
  };
  
  return (
    <Background>
      <GridLayout id="contact">
        <ContactCard />
      </GridLayout>
    </Background>
  );
};

export default ContactSection;
