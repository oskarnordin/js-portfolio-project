import styled from "styled-components";

export const CenteredContainer = styled.div`
  position: absolute; /* Position it relative to the parent section */
  bottom: 30px; /* Align it to the bottom */
  left: 50%; /* Center it horizontally */
  transform: translateX(-50%); /* Adjust for centering */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  background-color: transparent;
  color: black;
`;

export const AngleDownImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  animation: pulse 2s infinite ease-in-out;

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
