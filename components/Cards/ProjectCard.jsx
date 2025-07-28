import React, { useRef } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: relative;
  display: flex;
  scroll-margin-top: 90px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffbf9;
  min-height: 100%;
  width: 100%;
  z-index: 20;
  padding-bottom: 32px;
`;

const ProjectCardContainer = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  height: 480px;
  min-width: 40%;
  max-width: 480px;
  text-align: center;
  padding: 20px;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  border-radius: 5%;
  margin-bottom: 40px;
  box-sizing: border-box;
  box-shadow: 10px 10px 28px rgba(155, 155, 155, 0.22);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    border-radius: 0;
    display: flex;
    box-shadow: none;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 24px;
    box-sizing: border-box;
  }
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 4px;
  overflow: hidden;
  display: block;

  @media (max-width: 768px) {
    height: 200px;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4%;
  display: block;
  transition: transform 0.3s ease;
`;

const ProjectTitle = styled.h3`
  display: flex;
  color: #2d3748;
  justify-content: left;
  text-align: left;
  font-family: 'Tomorrow', sans-serif;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 6px;
  margin-top: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #2d3748;
  justify-content: left;
  text-align: left;
`;

const TechTag = styled.span`
  background-color: #ff5656;
  font-weight: 400;
  color: #fafafa;
  font-size: 14px;
  padding: 8px;
  margin-top: 16px;
  border-radius: 8px;
  transition: background-color 0.2s ease,
    transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

const Button = styled.a`
  background-color: #ff5656;
  justify-content: center;
  align-items: center;
  height: 40px;
  display: flex;
  color: white;
  font-weight: 600;
  width: 50%;
  max-width: 50%;
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.2s ease,
    transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-sizing: border-box;
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

const ShowroomH3 = styled.h3`
  font-family: 'DM Sans';
  color: #2d3748;
  font-weight: 600;
  font-size: 34px;
  margin: 5px;
  padding: 10px;
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  gap: 10px;
`;

const TechTagsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`;

const CardBottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
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
      <div>
        <ProjectImageWrapper>
          <ProjectImage src={imgSrc} alt={title} />
        </ProjectImageWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </div>
      <CardBottom>
        <TechTagsWrapper>
          {stack.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechTagsWrapper>
        <ButtonWrapper>
          <Button href={liveDemo} target='_blank' rel='noopener noreferrer'>
            Live demo
          </Button>
          <Button href={codeLink} target='_blank' rel='noopener noreferrer'>
            View code
          </Button>
        </ButtonWrapper>
      </CardBottom>
    </ProjectCardContainer>
  );
};

// const ProjectCard = () => {
//   return (
//     <Background>
//       <SectionContainer>
//         <ShowroomH3>Projects</ShowroomH3>
//         <ProjectsGrid>
//           <ProjectCard
//             title='Small Business Site'
//             description='A small site for a local business, showcasing their services and contact information. Designed to be responsive and user-friendly.'
//             stack={['HTML5', 'CSS3', 'Flexbox']}
//             imgSrc='./img/sushi.png'
//             liveDemo='https://sushi-world-on.netlify.app/'
//             codeLink='https://github.com/oskarnordin/js-project-business-site'
//           />
//           <ProjectCard
//             title='Weather App'
//             description='The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.'
//             stack={['HTML5', 'CSS3', 'React', 'Node']}
//             imgSrc='./img/weather.png'
//             liveDemo='https://heatherweather.netlify.app/'
//             codeLink='https://github.com/oskarnordin/js-project-weather-app'
//           />
//           <ProjectCard
//             title='Accessibility Quiz'
//             description='The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.'
//             stack={['HTML5', 'CSS3', 'Node']}
//             imgSrc='./img/access.png'
//             liveDemo='https://js-project-accessibility-on.netlify.app/'
//             codeLink='https://github.com/oskarnordin/js-project-accessibility'
//           />
//           <ProjectCard
//             title='This Portfolio'
//             description='The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.'
//             stack={['HTML5', 'CSS3', 'React', 'Node']}
//             imgSrc='./img/portfolio.png'
//             liveDemo='#'
//             codeLink='#https://github.com/oskarnordin/js-portfolio-project'
//           />
//         </ProjectsGrid>
//         <a href='#myWords'></a>
//       </SectionContainer>
//     </Background>
//   );
// };

export default ProjectCard;
