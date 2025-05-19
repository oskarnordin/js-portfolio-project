import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { MarginArrowContainer } from "../SharedComponents";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Background = styled.div`
  position: relative;
  background-color: #eeeeee;
  height: 100vh;
  width: 100%;
  z-index: 20;
`;

const GridLayout = styled.div`
  height: 90%;
  max-width: 1080px;
  background-color: #eeeeee;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  margin: 0 auto;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MoodboardH3 = styled.h3`
  font-family: "DM Sans", sans-serif;
  color: #2d3748;
  font-weight: 600;
  font-size: 34px;
  padding: 32px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
  text-align: left;
  width: 100%;
`;

const MoodboardSection = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  useEffect(() => {
    // Add Pinterest script if not already present
    if (
      !document.querySelector(
        'script[src="https://assets.pinterest.com/js/pinit.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.pinterest.com/js/pinit.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.PinUtils && window.PinUtils.build) {
          window.PinUtils.build();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, build widgets
      if (window.PinUtils && window.PinUtils.build) {
        window.PinUtils.build();
      }
    }
  }, []);

  return (
    <Background id="moodboard">
      <GridLayout ref={ref} className={isVisible ? "visible" : ""}>
        <MoodboardH3>Moodboard</MoodboardH3>
        <a
          data-pin-do="embedBoard"
          data-pin-board-width="1000"
          data-pin-scale-height="800"
          data-pin-scale-width="140"
          href="https://se.pinterest.com/oskarnordin/tech/"
        ></a>
      </GridLayout>
      <a href="#techstack">
        <MarginArrowContainer>
          <AngleDownImage
            src="img/angle-square-down.png"
            alt="Angle down icon"
          />
        </MarginArrowContainer>
      </a>
    </Background>
  );
};

export default MoodboardSection;
