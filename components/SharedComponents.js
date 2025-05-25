import styled from "styled-components";

export const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AngleDownImage = styled.img`
  margin: 0px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  animation: pulse 2s infinite ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;
