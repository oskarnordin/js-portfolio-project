import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BlobCanvas } from '../Blob';
import ScrollAni from '../ScrollAnimation';

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  opacity: 0.35;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow: visible; // <-- change this line
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 768px) {
    padding-top: 30px;
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
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
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
  font-size: 156px;
  font-weight: 400;
  white-space: pre-wrap;
  text-align: center;
  font-family: 'DX Slight Extra';
  color: #2d3748;
  z-index: ;
  line-height: 1.4;
  padding-right: 10px;
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);

  @media (max-width: 768px) {
    font-size: 82px;
    line-height: 1.3;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
`;

const introText = `I'm Oskar
a web developer
from Sweden`;

const HeroSection = () => {
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [textColor, setTextColor] = useState('#f0f0f0');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState('up');
  const scrollYRef = useRef(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setAvatarVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setContentVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let current = 0;
    setTypedText('');
    setShowCursor(true);
    const typeInterval = setInterval(() => {
      setTypedText(introText.slice(0, current + 1));
      current++;
      if (current === introText.length) {
        clearInterval(typeInterval);
        // Remove this to keep the cursor blinking:
        // setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100); // adjust speed here
    return () => clearInterval(typeInterval);
  }, []);

  const avatarInitial = {
    size: 270,
  };
  const magneticRadius = 400;
  const [magneticStrength, setMagneticStrength] = useState(0.01);

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
      }, 30);
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

      const textAreaTop = window.innerHeight / 2 - 100;
      const textAreaBottom = window.innerHeight / 2 + 100;
      const textAreaLeft = window.innerWidth / 2 - 400;
      const textAreaRight = window.innerWidth / 2 + 400;

      const blobRadius = 270;
      const blobCenterX = window.innerWidth / 2;
      const blobCenterY = window.innerHeight * 0.4;

      const blobOverlapsText =
        mouseX > textAreaLeft - blobRadius &&
        mouseX < textAreaRight + blobRadius &&
        mouseY > textAreaTop - blobRadius &&
        mouseY < textAreaBottom + blobRadius &&
        distance < blobRadius;

      if (blobOverlapsText) {
        setTextColor('#000000');
      } else {
        setTextColor('#f0f0f0');
      }

      if (distance < magneticRadius) {
        const normalized = 1 - distance / magneticRadius;
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

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > scrollYRef.current ? 'down' : 'up');
      setScrollY(currentY);
      scrollYRef.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container id='herosection'>
      <GradientBackground />
      <CenteredContent visible={contentVisible}>
        <div
          style={{
            position: 'relative',
            color: '#585756',
            fontFamily: 'DX Slight Extra',
            zIndex: 100,
            paddingTop: '60px',
          }}
        >
          <Bigtext
            style={{
              transform: `translateY(${scrollY * 0.45}px)`,
            }}
          >
            {typedText}
            {showCursor && <Cursor>|</Cursor>}
          </Bigtext>
        </div>
        <BlobCanvas />
      </CenteredContent>
      {/* <ScrollAni scrollY={scrollY} fade={scrollY > 10} /> */}
    </Container>
  );
};

export default HeroSection;
