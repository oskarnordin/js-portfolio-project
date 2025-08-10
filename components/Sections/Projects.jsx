import React, { useRef } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  background-color: #2d3748;
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

  @media (max-width: 768px) {
    min-height: auto;
    /* ...existing mobile styles... */
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  background-color: transparent;
  font-family: Teko, sans-serif;
  color: #2d3748;
  position: relative;
  z-index: 30;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  overflow-x: hidden;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    max-width: 100%;
    padding: 1rem;
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    width: 100%;
    padding: 0.5rem;
    gap: 16px;
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

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const ShowroomH3 = styled.h3`
  scroll-margin-top: 90px; /* Match or exceed navbar height */
  max-width: ${({ theme }) => theme.maxWidth};
  font-family: 'DX Slight Medium', sans-serif;
  background-color: transparent;
  color: #2d3748;
  font-style: italic;
  font-size: 84px;
  letter-spacing: 4px;
  padding: 64px 32px 16px 32px;
  text-decoration: none;
  text-align: center;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const ShowroomP = styled.p`
  flex-direction: column;
  color: #2d3748;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 2s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background id='showroom' ref={ref}>
      <HeaderWrapper
        className={isVisible ? 'visible' : ''}
        $visible={isVisible}
      >
        <ShowroomH3 id='showroom'>Showroom</ShowroomH3>
        <ShowroomP>Here are some projects I've been working on.</ShowroomP>
      </HeaderWrapper>
      <ProjectContainer
        className={isVisible ? 'visible' : ''}
        $visible={isVisible}
      >
        <ProjectCard
          title='Small Business Site'
          description='A small site for a local business, showcasing their services and contact information. Designed to be responsive and user-friendly and to work well on both desktop and mobile devices.'
          stack={['HTML5', 'CSS3']}
          imgSrc='/img/sushi.png'
          liveDemo='https://sushi-world-on.netlify.app/'
          codeLink='https://github.com/oskarnordin/js-project-business-site'
        />
        <ProjectCard
          title='Weather App'
          description='A weather app that provides real-time weather information and forecasts for any location. It uses an API to fetch weather data and displays it in a user-friendly interface.'
          stack={['HTML5', 'CSS3', 'JavaScript', 'API']}
          imgSrc='/img/weather.png'
          liveDemo='https://heatherweather.netlify.app/'
          codeLink='https://github.com/oskarnordin/js-project-weather-app'
        />
        <ProjectCard
          title='Accessibility Quiz'
          description='An interactive quiz application designed to educate users about web accessibility best practices. It includes multiple-choice questions and provides feedback on answers.'
          stack={['HTML5', 'CSS3', 'JavaScript']}
          imgSrc='/img/access.png'
          liveDemo='https://js-project-accessibility-on.netlify.app/'
          codeLink='https://github.com/oskarnordin/js-project-accessibility'
        />
        <ProjectCard
          title='This Portfolio'
          description='This portfolio showcases my work and skills as a developer. It includes various projects and information about my background and experience.'
          stack={['HTML5', 'CSS3', 'React']}
          imgSrc='/img/portfolio.png'
          liveDemo='https://js-portfoliotwo.netlify.app/'
          codeLink='https://github.com/oskarnordin/js-portfolio-project'
        />
        <ProjectCard
          title='Win 98 Style To-Do App'
          description='A to-do app with a touch of retro. It mimics the look and feel of Windows 98, allowing users to manage their tasks in a nostalgic interface.'
          stack={['HTML5', 'CSS3', 'React']}
          imgSrc='/img/w98.png'
          liveDemo='https://windows98-todo.netlify.app/'
          codeLink='https://github.com/oskarnordin/project-to-dos-zustand-vite'
        />
        <ProjectCard
          title='Recipe Library'
          description='A library of recipes with filters for dietary restrictions, time to cook and random recipe. It allows users to easily find and save their favorite recipes.'
          stack={['HTML5', 'CSS3', 'JavaScript', 'API']}
          imgSrc='/img/cooking.jpg'
          liveDemo='https://recipe-libary-on.netlify.app/'
          codeLink='https://github.com/oskarnordin/js-project-recipe-library'
        />
      </ProjectContainer>
    </Background>
  );
};

export default FeaturedProjects;
