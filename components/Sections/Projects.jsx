import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  position: relative;
  display: flex;
  scroll-margin-top: 90px; // Adjust to your navbar height
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f7f7;
  min-height: 100%;
  width: 100%;
  z-index: 20;
`;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  background-color: transparent;
  font-family: Teko, sans-serif;
  color: #2d3748;
  position: relative;
  z-index: 30;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 32px 32px 64px 32px;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  overflow-x: hidden; /* Prevent horizontal scroll */

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    max-width: 100%;
    padding: 1rem;
  }
`;

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  flex-direction: column; /* Stack items vertically */
  width: 100%;
  min-height: 100vh; /* Full viewport height */
  background-color: transparent;
  text-align: center; /* Center text if needed */
`;

const ShowroomH3 = styled.h3`
  scroll-margin-top: 90px; /* Match or exceed navbar height */
  max-width: ${({ theme }) => theme.maxWidth};
  font-family: 'DX Slight Medium', sans-serif;
  background-color: transparent;
  color: #2d3748;
  font-style: italic ;
  font-size: 64px;
  letter-spacing: 4px;
  padding: 64px 32px 32px 32px;
  text-decoration: none;
  text-align: center;
  align-self: center;
`;

const ShowroomP = styled.p`
  flex-direction: column;
  color: #2d3748;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  padding: 0px 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const FeaturedProjects = () => {
  const ref = React.useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background>
      <SectionContainer>
        <ShowroomH3 id='showroom'>Showroom</ShowroomH3>
        <ShowroomP>Here are some projects I've been working on.</ShowroomP>
        <ProjectContainer ref={ref} className={isVisible ? 'visible' : ''}>
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
            description='A weather app that provides real-time weather information and forecasts for any location.'
            stack={['HTML5', 'CSS3', 'JavaScript', 'API']}
            imgSrc='./img/weather.png'
            liveDemo='https://heatherweather.netlify.app/'
            codeLink='https://github.com/oskarnordin/js-project-weather-app'
          />
          <ProjectCard
            title='Accessibility Quiz'
            description='An interactive quiz application designed to educate users about web accessibility best practices.'
            stack={['HTML5', 'CSS3', 'JavaScript']}
            imgSrc='./img/access.png'
            liveDemo='https://js-project-accessibility-on.netlify.app/'
            codeLink='https://github.com/oskarnordin/js-project-accessibility'
          />
          <ProjectCard
            title='This Portfolio'
            description='This portfolio showcases my work and skills as a developer.'
            stack={['HTML5', 'CSS3', 'React']}
            imgSrc='./img/portfolio.png'
            liveDemo='https://js-portfoliotwo.netlify.app/'
            codeLink='https://github.com/oskarnordin/js-portfolio-project'
          />
          <ProjectCard
            title='Win 98 Style To-Do App'
            description='A to-do app with a touch of retro.'
            stack={['HTML5', 'CSS3', 'React']}
            imgSrc='./img/w98.png'
            liveDemo='https://windows98-todo.netlify.app/'
            codeLink='https://github.com/oskarnordin/project-to-dos-zustand-vite'
          />
          <ProjectCard
            title='Recipe Library'
            description='A library of recipes with filters for dietary restrictions, time to cook and random recipe.'
            stack={['HTML5', 'CSS3', 'JavaScript', 'API']}
            imgSrc='./img/cooking.jpg'
            liveDemo='https://recipe-libary-on.netlify.app/'
            codeLink='https://github.com/oskarnordin/js-project-recipe-library'
          />
        </ProjectContainer>
      </SectionContainer>
    </Background>
  );
};

export default FeaturedProjects;
