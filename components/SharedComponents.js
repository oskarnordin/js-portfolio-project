import styled from "styled-components";

export const CenteredContainer = styled.div`
  position: absolute;
  background-color: transparent;
  margin-top: 30px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AngleDownImage = styled.img`
  margin-top: 30px;
  width: 30px;
  height: 30px;
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
