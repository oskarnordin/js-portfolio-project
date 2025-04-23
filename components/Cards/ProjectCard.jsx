import React from "react";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  color: white;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  padding: 15px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 16px;
`;

const ProjectTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #718096;
  margin-bottom: 1rem;
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
  color: #2d3748;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  &:hover {
    background-color: #cbd5e0;
  }
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
      <div className="p-4">
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </div>
        <div className="flex gap-4">
          <Button href={liveDemo} target="_blank" rel="noopener noreferrer">
            Live demo
          </Button>
          <Button href={codeLink} target="_blank" rel="noopener noreferrer">
            View code
          </Button>
        </div>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
