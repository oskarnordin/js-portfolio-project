import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-color: #281071;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const OverlayBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40ch; /* FIXED width for entire ASCII art */
  color: #e0e0e0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  white-space: pre;
  padding: 2rem;
  z-index: 10;
  pointer-events: none;
  user-select: none;
  background: transparent;
  text-align: center;

  @media (max-width: 768px) {
    width: 90vw; /* Responsive width for smaller screens */
    font-size: 14px; /* Slightly smaller font size */
  }
`;

const asciiArt = `
My name is


░█████╗░░██████╗██╗░░██╗░█████╗░██████╗░
██╔══██╗██╔════╝██║░██╔╝██╔══██╗██╔══██╗
██║░░██║╚█████╗░█████═╝░███████║██████╔╝
██║░░██║░╚═══██╗██╔═██╗░██╔══██║██╔══██╗
╚█████╔╝██████╔╝██║░╚██╗██║░░██║██║░░██║
░╚════╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝      

and I’m a web developer.


Scroll to learn more about me
and what I've been working on.
`;

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const typingSpeed = 10;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(asciiArt.substring(0, i));
      if (i >= asciiArt.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <OverlayBackground>{typedText}</OverlayBackground>
    </Container>
  );
};

export default HeroSection;
