import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styled from 'styled-components';

const ScrollAniWrapper = styled.div`
  opacity: ${(props) => (props.fade ? 0 : 1)};
  transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

const ScrollAni = ({ scrollY, fade }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isDesktop) return null;

  return (
    <ScrollAniWrapper fade={fade}>
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 999,
        }}
      >
        <div
          style={{
            width: '40px',
            height: '50px',
            filter: 'invert(1)',
            opacity: 0.4,
          }}
        >
          <DotLottieReact
            src='https://lottie.host/aa92881a-1194-4aab-841b-8439e64a39fe/iGObAcx37H.lottie'
            loop
            autoplay
          />
        </div>
      </div>
    </ScrollAniWrapper>
  );
};

export default ScrollAni;
