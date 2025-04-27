import React from "react";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  display: flex;
  border-radius: 28px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 650px;
  max-width: 450px;
  gap: 20px;
  text-align: center;
  padding: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  @media (max-width: 1200x) {
    height: 450px; /* Full viewport height on mobile */
    min-width: 100%; /* Full width on mobile */
    border-radius: 18px; /* Remove border radius for a full-screen effect */
    padding: 22px; /* Adjust padding for smaller screens */
  }
`;

const ProjectImage = styled.img`
  border-radius: 28px;
  width: 100%;
  height: 250px;

  padding: 10px;
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
  justify-content: center;
  text-align: center;
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

const TechTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Matches Tailwind's gap-2 */
  margin-bottom: 16px; /* Matches Tailwind's mb-4 */
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
      <TechTagsWrapper>
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
      </TechTagsWrapper>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
