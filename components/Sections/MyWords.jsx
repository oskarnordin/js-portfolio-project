import React from "react";
import MyWordsCard from "../Cards/MyWordsCard";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const MyWordsSection = () => {
  return (
    <section
      id="myWords"
      className="flex justify-center items-center flex-col h-screen bg-gray-300 font-teko text-2xl text-gray-900 relative z-20 gap-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-1 gap-2 w-full max-w-6xl">
        <MyWordsCard
          icon="../img/weather-1.png"
          title="My Words"
          info={"Hello World"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-1 gap-2 w-full max-w-6xl">
        <MyWordsCard
          icon="../img/weather-1.png"
          title="My Words"
          info={"Hello World"}
        />
      </div>
      <CenteredContainer>
        <h2>Contact me</h2>
        <AngleDownImage
          src="img/angle-square-light.webp"
          alt="Angle down icon"
        />
      </CenteredContainer>
    </section>
  );
};

export default MyWordsSection;
