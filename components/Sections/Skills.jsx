// components/SkillsSection.jsx
import React from "react";
import InfoCard from "../Cards/InfoCard";
import styled from "styled-components";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="flex justify-center items-center flex-row h-screen bg-gray-300 font-teko text-2xl text-gray-900 relative z-20 gap-4"
    >
      <div className="grid grid-cols-4 grid-rows-1 gap-2 w-full max-w-6xl">
        <InfoCard
          icon="img/cursor.webp"
          title="Frontend"
          info={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "React Hooks",
          ]}
        />
        <InfoCard icon="img/server.webp" title="Backend" info={["Node.js"]} />
        <InfoCard
          icon="img/handshake.webp"
          title="Methodologies"
          info={["Agile"]}
        />
        <InfoCard
          icon="img/chart-histogram.webp"
          title="Data Analysis"
          info={[
            "Google Analytics 4",
            "Google Tag Manager",
            "Google Looker Studio",
            "Google Optimize",
            "Python (Pandas, NumPy, Matplotlib, Seaborn)",
            "R",
            "SQL",
          ]}
        />
      </div>
      <a href="#projectSection">
        <CenteredContainer>
          <h2>Projects</h2>
          <AngleDownImage
            src="img/angle-square-light.webp"
            alt="Angle down icon"
          />
        </CenteredContainer>
      </a>
    </div>
  );
};

export default SkillsSection;
