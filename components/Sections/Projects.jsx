import React from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const ProjectContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f8f8;
  font-family: Teko, sans-serif;
  color: #000000;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Dynamically adjust columns */
  gap: 20px; /* Space between grid items */
  padding: 2rem; /* Add padding for spacing */
  margin: 0 auto; /* Center the grid container horizontally */
  box-sizing: border-box; /* Include padding in width calculations */
  justify-content: center; /* Center the grid items horizontally */
  align-items: center; /* Center the grid items vertically */
  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* 1 card per row on smaller screens */
    width: 100%; /* Make the container span the full width */
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
    <ProjectContainer id="projectSection">
      <ProjectCard
        title="Small Business Site"
        description="A small site for a local business, showcasing their services and contact information."
        stack={["HTML5", "CSS3", "Flexbox"]}
        imgSrc="../img/placeholder.svg" // Replace with your actual image path
        liveDemo="#"
        codeLink="#"
      />
      <ProjectCard
        title="Weather App"
        description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
        stack={["HTML5", "CSS3", "React", "Node"]}
        imgSrc="../img/placeholder.svg" // Replace with your actual image path
        liveDemo="#"
        codeLink="#"
      />
      <ProjectCard
        title="Accessibility Quiz"
        description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
        stack={["HTML5", "CSS3", "Node"]}
        imgSrc="../img/placeholder.svg" // Replace with your actual image path
        liveDemo="#"
        codeLink="#"
      />
      <ProjectCard
        title="This Portfolio"
        description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
        stack={["HTML5", "CSS3", "React", "Node"]}
        imgSrc="../img/placeholder.svg" // Replace with your actual image path
        liveDemo="#"
        codeLink="#"
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
