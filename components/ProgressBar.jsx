import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: #240e66;
  z-index: 9999;
`;

const Progress = styled.div`
  height: 100%;
  background: #ffb4b4;
  width: ${({ progress }) => progress}%;
  transition: width 0.2s ease;
  border-radius: 0 0 5px 0px;
`;

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BarContainer>
      <Progress progress={progress} />
    </BarContainer>
  );
};

export default ProgressBar;
