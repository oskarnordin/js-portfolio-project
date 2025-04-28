import React from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const ProjectContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  background-color: #f8f8f8;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  grid-column: span 4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  flex-direction: column; /* Stack items vertically */
  min-height: 100vh; /* Full viewport height */
  padding: 2rem 1rem; /* Add padding for spacing */
  background-color: transparent;
  text-align: center; /* Center text if needed */
`;

const SectionHeading = styled.h2`
  color: black;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FeaturedProjects = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectCard
        title="Small Business Site"
        description="A small site for a local business, showcasing their services and contact information."
        stack={["HTML5", "CSS3", "Flexbox"]}
        imgSrc="./img/sushi.webp"
        liveDemo="https://sushi-world-on.netlify.app/"
        codeLink="https://github.com/oskarnordin/js-project-business-site"
      />
      <ProjectCard
        title="Weather App"
        description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
        stack={["HTML5", "CSS3", "React", "Node"]}
        imgSrc="./img/weather.jpg"
        liveDemo="https://heatherweather.netlify.app/"
        codeLink="https://github.com/oskarnordin/js-project-weather-app"
      />
      <ProjectCard
        title="Accessibility Quiz"
        description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
        stack={["HTML5", "CSS3", "Node"]}
        imgSrc="./img/access.png"
        liveDemo="https://js-project-accessibility-on.netlify.app/"
        codeLink="https://github.com/oskarnordin/js-project-accessibility"
      />
      <ProjectCard
        title="This Portfolio"
        description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
        stack={["HTML5", "CSS3", "React", "Node"]}
        imgSrc="./img/portfolio.png"
        liveDemo="#"
        codeLink="#https://github.com/oskarnordin/js-portfolio-project"
      />
      <a href="#myWords">
        <CenteredContainer>
          <AngleDownImage
            src="img/angle-square-down.png"
            alt="Angle down icon"
          />
        </CenteredContainer>
      </a>
    </ProjectContainer>
  );
};

export default FeaturedProjects;
