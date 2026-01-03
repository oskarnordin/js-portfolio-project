import styled from 'styled-components';

export const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  overflow-x: hidden;
  box-sizing: border-box;
`;

// Reusable inner content container: centers content and caps width to 1100px
export const Inner = styled.div`
  width: min(1100px, 100%);
  max-width: min(1100px, 100vw);
  margin: 0 auto;
  padding: 0 24px; /* breathing room on small viewports */
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const MarginArrowContainer = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
  z-index: 1000;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
