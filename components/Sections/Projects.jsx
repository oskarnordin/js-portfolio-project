import React from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { AngleDownImage } from "../SharedComponents";
import { CenteredContainer } from "../SharedComponents";

const ProjectSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Ensure content stacks vertically */
  align-items: center;
  min-height: 100vh; /* Minimum height of the viewport */
  background-color: aliceblue; /* Background color */
  font-family: Teko, sans-serif; /* Ensure consistent font usage */
  font-size: 1.4em;
  color: #1f1f1f; /* Text color */
  z-index: 30; /* Ensure proper stacking order */
  overflow: visible; /* Allow content to expand */
`;

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem; /* Add padding for spacing */
  background-color: aliceblue;
`;

const SectionHeading = styled.h2`
  color: black;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Dynamic wrapping */
  gap: 2rem; /* Space between grid items */
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* Equivalent to md:grid-cols-4 */
  }
`;

const SectionCards = styled.div`
  display: flex;
  justify-content: flex-start; /* Align content to the top */
  align-items: center; /* Center content vertically */
  flex-direction: column; /* Stack items vertically */
  gap: 20px; /* Space between cards */
  width: 100%; /* Full width of the container */
  height: 100%; /* Full height of the container */
  opacity: 1;
`;

const FeaturedProjects = () => {
  return (
    <ProjectSection id="projectSection">
      <SectionContainer id="projects">
        <SectionHeading>Featured Projects</SectionHeading>
        <ProjectGrid>
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
        </ProjectGrid>
        <a href="#myWords">
          <CenteredContainer>
            <h2>My Words</h2>
            <AngleDownImage
              src="img/angle-square-light.webp"
              alt="Angle down icon"
            />
          </CenteredContainer>
        </a>
      </SectionContainer>
    </ProjectSection>
  );
};

export default FeaturedProjects;
