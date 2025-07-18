import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-color: #240e66;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: #f0f0f0;
  font-family: 'DM Sans', monospace, sans-serif;
  font-size: 18px;
  font-weight: 400;
  white-space: pre-wrap;
  padding: 2rem;
  z-index: 10;
  pointer-events: none;
  user-select: none;
  background: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 1rem;
    overflow-x: auto;
    max-width: 100vw;
    box-sizing: border-box;
    text-align: center; // Optional: better for ASCII art
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


Scroll down to learn more about me
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
