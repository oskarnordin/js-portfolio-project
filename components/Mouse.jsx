import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const BlurCircle = styled.div`
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background: rgba(255, 255, 255, 0.1); */
  /* box-shadow: 0 0 40px 20px rgba(255, 255, 255, 0.2); */
  backdrop-filter: blur(5px);
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: left 0.08s, top 0.08s;
`;

const BlurCursor = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const moveCircle = (e) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${e.clientX}px`;
        circleRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCircle);
    return () => window.removeEventListener('mousemove', moveCircle);
  }, []);

  return <BlurCircle ref={circleRef} />;
};

export default BlurCursor;
