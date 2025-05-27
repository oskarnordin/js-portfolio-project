import { useEffect, useRef, useState } from 'react';

const CursorDot = () => {
  const dotRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android|iphone|ipad|mobile/i.test(userAgent);
    };

    setIsMobile(checkIfMobile());
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      dotX += (mouseX - dotX) * 1;
      dotY += (mouseY - dotY) * 1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={dotRef}
      style={{
        transform: 'translate3d(0, 0, 0)',
        transition: 'transform 0.05s',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#4263f7',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorDot;
