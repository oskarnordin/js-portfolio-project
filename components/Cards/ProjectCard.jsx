import React from "react";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  width: relative;
  width: 100%; /* Important: Let grid control the width */
  box-sizing: border-box;
  color: white;
  border-radius: 28px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  padding: 15px;
  position: relative;
  height: 550px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 16px;
  border-left: 10px solid blue;
  border-bottom: 10px solid blue;
`;

const ProjectTitle = styled.h3`
  display: flex;
  justify-content: left;
  text-align: left;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #0e0e0e;
  margin-bottom: 1rem;
  justify-content: left;
  text-align: left;
`;

const TechTag = styled.span`
  background-color: #ebf8ff;
  color: #2b6cb0;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`;

const Button = styled.a`
  background-color: #e2e8f0;
  justify-content: center;
  display: flex;
  color: #2d3748;
  font-weight: 600;
  width: 120px;
  font-size: 16px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
  &:hover {
    background-color: #cbd5e0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: flex-end;
`;

const ProjectCard = ({
  title,
  description,
  stack,
  imgSrc,
  liveDemo,
  codeLink,
}) => {
  return (
    <ProjectCardContainer>
      <ProjectImage src={imgSrc} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}

        <ButtonWrapper>
          <Button href={liveDemo} target="_blank" rel="noopener noreferrer">
            Live demo
          </Button>
          <Button href={codeLink} target="_blank" rel="noopener noreferrer">
            View code
          </Button>
        </ButtonWrapper>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
