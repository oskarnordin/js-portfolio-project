import React, { useRef } from 'react';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  display: flex;
  border-radius: 28px;
  align-items: left;
  flex-direction: column;
  flex-wrap: wrap;
  height: 600px;
  max-width: 450px;
  gap: 5px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start with offset */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    min-height: 600px; /* Full viewport height on mobile */
    min-width: 100%; /* Full width on mobile */
    border-radius: 18px; /* Remove border radius for a full-screen effect */
    padding: 10px; /* Adjust padding for smaller screens */
  }
`;

const ProjectImage = styled.img`
  border-radius: 28px;
  width: 100%;
  max-width: 100%;
  max-height: 300px;
  height: 300px;
  object-fit: cover; // Keeps aspect ratio, fills container, may crop
  display: block;
`;

const ProjectTitle = styled.h3`
  display: flex;
  color: #2d3748;
  justify-content: left;
  text-align: left;
  font-family: 'DM Sans';
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #2d3748;
  margin-bottom: 1rem;
  justify-content: left;
  text-align: left;
`;

const TechTag = styled.span`
  background-color: #4b4efc;
  color: #fafafa;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`;

const Button = styled.a`
  background-color: #4b4efc;
  justify-content: center;
  display: flex;
  color: white;
  font-weight: 600;
  width: 120px;
  font-size: 16px;
  padding: 10px;
  margin: 5px;
  border-radius: 16px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #6f71ff;
  }
`;

const ShowroomH3 = styled.h3`
  font-family: DM sans;
  color: #2d3748;
  font-weight: 600;
  font-size: 34px;
  margin: 5px;
  padding: 10px;
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row; /* Stack buttons vertically */
    align-items: left; /* Center align buttons */
    gap: 10px; /* Add spacing between buttons */
  }
`;

const TechTagsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Matches Tailwind's gap-2 */
  margin-bottom: 16px; /* Matches Tailwind's mb-4 */
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  justify-content: center; // Center cards horizontally
  margin: 0 auto;
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
    <ProjectCardContainer className={'visible'}>
      <ProjectImage src={imgSrc} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechTagsWrapper>
        {stack.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}

        <ButtonWrapper>
          <Button href={liveDemo} target='_blank' rel='noopener noreferrer'>
            Live demo
          </Button>
          <Button href={codeLink} target='_blank' rel='noopener noreferrer'>
            View code
          </Button>
        </ButtonWrapper>
      </TechTagsWrapper>
    </ProjectCardContainer>
  );
};

const FeaturedProjects = () => {
  return (
    <Background>
      <SectionContainer>
        <ShowroomH3>Projects</ShowroomH3>
        <ProjectsGrid>
          <ProjectCard
            title='Small Business Site'
            description='A small site for a local business, showcasing their services and contact information.'
            stack={['HTML5', 'CSS3', 'Flexbox']}
            imgSrc='./img/sushi.png'
            liveDemo='https://sushi-world-on.netlify.app/'
            codeLink='https://github.com/oskarnordin/js-project-business-site'
          />
          <ProjectCard
            title='Weather App'
            description='The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.'
            stack={['HTML5', 'CSS3', 'React', 'Node']}
            imgSrc='./img/weather.png'
            liveDemo='https://heatherweather.netlify.app/'
            codeLink='https://github.com/oskarnordin/js-project-weather-app'
          />
          <ProjectCard
            title='Accessibility Quiz'
            description='The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.'
            stack={['HTML5', 'CSS3', 'Node']}
            imgSrc='./img/access.png'
            liveDemo='https://js-project-accessibility-on.netlify.app/'
            codeLink='https://github.com/oskarnordin/js-project-accessibility'
          />
          <ProjectCard
            title='This Portfolio'
            description='The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.'
            stack={['HTML5', 'CSS3', 'React', 'Node']}
            imgSrc='./img/portfolio.png'
            liveDemo='#'
            codeLink='#https://github.com/oskarnordin/js-portfolio-project'
          />
        </ProjectsGrid>
        <a href='#myWords'>
          <CenteredContainer>
            <AngleDownImage
              src='img/angle-square-down.png'
              alt='Angle down icon'
            />
          </CenteredContainer>
        </a>
      </SectionContainer>
    </Background>
  );
};

export default ProjectCard;
