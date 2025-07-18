import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-color: #240e66;
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 180px;
`;

const AvatarImg = styled.img`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: 20;
  margin-bottom: 32px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) =>
    visible ? 'visible' : 'hidden'}; // Add this line
  transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const OverlayBackground = styled.div`
  color: #f0f0f0;
  font-family: 'DX Slight Extra';
  font-size: 96px;
  font-weight: 400;
  white-space: pre-wrap;
  text-align: center;
  user-select: none;
  background: transparent;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 44px;
    padding: 1rem;
    overflow-x: auto;
    max-width: 90vw;
    box-sizing: border-box;
    text-align: center;
  }
`;

const asciiArt = `Hello, I’m Oskar,
 a web developer from Sweden. 
`;

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const typingSpeed = 70;
  const [avatarVisible, setAvatarVisible] = useState(false);

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
      const avatarCenterX = window.innerWidth / 2;
      const avatarCenterY = window.innerHeight / 2;

      const dx = mouseX - avatarCenterX;
      const dy = mouseY - avatarCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

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
        <AvatarImg
          src='/img/avatar.png'
          alt="Oskar's Avatar"
          visible={avatarVisible}
          top={avatarPos.top}
          left={avatarPos.left}
        />
        <OverlayBackground>{typedText}</OverlayBackground>
      </CenteredContent>
    </Container>
  );
};

export default HeroSection;
