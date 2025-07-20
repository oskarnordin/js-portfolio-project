import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BlobCanvas } from '../Blob';

const Container = styled.div`
  position: relative;
  background-color: #f8f7f7;
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const CenteredContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 180px;

  @media (max-width: 768px) {
    padding-top: 40px; /* Add top padding for mobile */
    padding-bottom: 60px; /* Reduce bottom padding on mobile */
  }
`;

const AvatarImg = styled.img`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: 999;
`;

const Bigtext = styled.p`
  font-size: 154px;
  font-weight: 400;
  white-space: pre-wrap;
  text-align: center;
  font-family: 'DX Slight Extra';
  color: #111111;
  z-index: 120;
  opacity: 70%;
  line-height: 1.4;
  padding-right: 10px;

  @media (max-width: 768px) {
    font-size: 106px;
    line-height: 1.3;
  }
`;

const Heart = styled.sup`
  font-size: 40px;
  vertical-align: super;
  line-height: 0;
  position: relative;
  top: -50px; /* Moves the heart higher */
  margin: 5px;
  opacity: 100%;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 40px;
    top: -50px; /* Keep same positioning for larger text */
  }
`;

const asciiArt = `Hello, I’m Oskar,
 a web developer from Sweden. 
`;

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const typingSpeed = 70;
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [textColor, setTextColor] = useState('#f0f0f0'); // Start with white
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(asciiArt.substring(0, i));
      if (i >= asciiArt.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fade in avatar after mount
    const timeout = setTimeout(() => setAvatarVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const avatarInitial = {
    size: 270,
  };
  const magneticRadius = 400; // px
  const [magneticStrength, setMagneticStrength] = useState(0.01); // Start small

  useEffect(() => {
    if (avatarVisible) {
      let strength = 0.01;
      const interval = setInterval(() => {
        strength += 0.01;
        if (strength >= 0.09) {
          strength = 0.09;
          clearInterval(interval);
        }
        setMagneticStrength(strength);
      }, 30); // Adjust speed for smoothness
      return () => clearInterval(interval);
    }
  }, [avatarVisible]);

  const [avatarPos, setAvatarPos] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setMousePos({ x: mouseX, y: mouseY });

      const avatarCenterX = window.innerWidth / 2;
      const avatarCenterY = window.innerHeight / 2;

      const dx = mouseX - avatarCenterX;
      const dy = mouseY - avatarCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Check if mouse is near the text area (rough estimation)
      const textAreaTop = window.innerHeight / 2 - 100; // Approximate text area
      const textAreaBottom = window.innerHeight / 2 + 100;
      const textAreaLeft = window.innerWidth / 2 - 400; // Approximate text width
      const textAreaRight = window.innerWidth / 2 + 400;

      const blobRadius = 270; // Match the blob radius from Blob.jsx
      const blobCenterX = window.innerWidth / 2;
      const blobCenterY = window.innerHeight * 0.4; // Match blob position (40% from top)

      // Check if blob overlaps with text area
      const blobOverlapsText =
        mouseX > textAreaLeft - blobRadius &&
        mouseX < textAreaRight + blobRadius &&
        mouseY > textAreaTop - blobRadius &&
        mouseY < textAreaBottom + blobRadius &&
        distance < blobRadius;

      // Set text color based on blob proximity to text
      if (blobOverlapsText) {
        setTextColor('#000000'); // Black when blob is behind text
      } else {
        setTextColor('#f0f0f0'); // White on regular background
      }

      if (distance < magneticRadius) {
        // Strength increases as you get closer to the center
        const normalized = 1 - distance / magneticRadius; // 0 (edge) to 1 (center)
        const dynamicStrength = magneticStrength * normalized;
        setAvatarPos({
          top: dy * dynamicStrength,
          left: dx * dynamicStrength,
        });
      } else {
        setAvatarPos({ top: 0, left: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [magneticStrength, magneticRadius]);

  return (
    <Container>
      <CenteredContent>
        <div
          style={{
            position: 'relative',
            color: '#111111', // Dark text on light background
            fontFamily: 'DX Slight Extra',
            zIndex: 100,
            paddingTop: '60px', // Add top padding
          }}
        >
          <Bigtext>I'm Oskar,</Bigtext>
          <Bigtext>a web developer </Bigtext>
          <Bigtext>from Sweden.</Bigtext>
          {/* <BlobCanvas /> */}
        </div>
        <BlobCanvas />
      </CenteredContent>
    </Container>
  );
};

export default HeroSection;
