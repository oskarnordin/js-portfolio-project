import React, { useRef } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { Inner } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.div`
  position: relative;
  display: flex;
  scroll-margin-top: 90px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  max-width: 100vw;
  z-index: 20;
  padding: 12px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: min(1200px, 100vw);
  background-color: transparent;
  font-family: Teko, sans-serif;
  color: #2d3748;
  position: relative;
  z-index: 30;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(30px)')};
  transition:
    opacity 0.9s ease-out,
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  overflow-x: hidden;
  overflow-y: hidden; /* prevent transient vertical scrollbar while cards animate in */

  &.visible {
    opacity: 1;
    transform: translateY(0);
    overflow-y: visible; /* enable normal vertical overflow once visible */
  }

  @media (max-width: 900px) {
    gap: 20px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    padding: 0 8px;
  }

  /* hide scrollbars visually while keeping overflow behavior */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Stagger child card animations */
  > * {
    animation-delay: 0s;
  }
  > *:nth-child(1) {
    animation-delay: 0s;
  }
  > *:nth-child(2) {
    animation-delay: 0.08s;
  }
  > *:nth-child(3) {
    animation-delay: 0.16s;
  }
  > *:nth-child(4) {
    animation-delay: 0.24s;
  }
  > *:nth-child(5) {
    animation-delay: 0.32s;
  }
  > *:nth-child(6) {
    animation-delay: 0.4s;
  }
  > *:nth-child(7) {
    animation-delay: 0.48s;
  }
  > *:nth-child(8) {
    animation-delay: 0.56s;
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

const ShowroomP = styled.p`
  flex-direction: column;
  color: #2d3748;
  font-size: 14px;
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
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(30px)')};
  transition:
    opacity 0.9s ease-out,
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background id="showroom" ref={ref}>
      <HeaderWrapper className={isVisible ? 'visible' : ''} $visible={isVisible}>
        <h2>Showroom</h2>
        <ShowroomP>Projects I've been working on</ShowroomP>
      </HeaderWrapper>
      <Inner>
        <ProjectContainer className={isVisible ? 'visible' : ''} $visible={isVisible}>
          <ProjectCard
            title="Subscribee Final Project"
            description="An app where users can add their subscriptions and manage them easily. It uses a backend API to manage subscriptions and notifications via email before due dates."
            stack={[
              'HTML5',
              'CSS3',
              'React',
              'API',
              'MongoDB',
              'Node.js',
              'Express.js',
              'Mongoose',
              'JWT',
              'Bcrypt',
              'Zustand',
            ]}
            imgSrc={'/img/subscribee.png'}
            liveDemo="https://subscribee-project.netlify.app/"
            codeLink="https://github.com/oskarnordin/js-project-movies"
          />
          <ProjectCard
            title="Movie App"
            description="An app where users can search for movies, view details, and save their favorites. It uses a backend API to fetch movie data."
            stack={['HTML5', 'CSS3', 'React', 'API']}
            imgSrc={'/img/popcorn.png'}
            liveDemo="https://effervescent-praline-71a88e.netlify.app/"
            codeLink="https://github.com/oskarnordin/js-project-movies"
          />
          <ProjectCard
            title="Happy Thoughts"
            description="An app where users can share their happy thoughts and like others. It uses a backend API to store and retrieve messages."
            stack={['HTML5', 'CSS3', 'React', 'API']}
            imgSrc="/img/happy.png"
            liveDemo="https://smilezone78.netlify.app/"
            codeLink="https://github.com/oskarnordin/js-project-api"
          />
          <ProjectCard
            title="Recipe Library"
            description="A library of recipes with filters for dietary restrictions, time to cook and random recipe. It allows users to easily find and save their favorite recipes."
            stack={['HTML5', 'CSS3', 'JavaScript', 'API']}
            imgSrc="/img/carrot.png"
            liveDemo="https://recipe-libary-on.netlify.app/"
            codeLink="https://github.com/oskarnordin/js-project-recipe-library"
          />
          <ProjectCard
            title="To-Do App"
            description="A to-do app with a touch of retro. It mimics the look and feel of Windows 98, allowing users to manage their tasks in a nostalgic interface."
            stack={['HTML5', 'CSS3', 'React']}
            imgSrc="/img/check.png"
            liveDemo="https://windows98-todo.netlify.app/"
            codeLink="https://github.com/oskarnordin/project-to-dos-zustand-vite"
          />
          <ProjectCard
            title="Portfolio"
            description="This portfolio showcases my work and skills as a developer. It includes various projects and information about my background and experience."
            stack={['HTML5', 'CSS3', 'React']}
            imgSrc="/img/portfolio.png"
            liveDemo="https://js-portfoliotwo.netlify.app/"
            codeLink="https://github.com/oskarnordin/js-portfolio-project"
          />
          <ProjectCard
            title="Accessibility Quiz"
            description="An interactive quiz application designed to educate users about web accessibility best practices. It includes multiple-choice questions and provides feedback on answers."
            stack={['HTML5', 'CSS3', 'JavaScript']}
            imgSrc="/img/heart.png"
            liveDemo="https://js-project-accessibility-on.netlify.app/"
            codeLink="https://github.com/oskarnordin/js-project-accessibility"
          />
          <ProjectCard
            title="Weather App"
            description="A weather app that provides real-time weather information and forecasts for any location. It uses an API to fetch weather data and displays it in a user-friendly interface."
            stack={['HTML5', 'CSS3', 'JavaScript', 'API']}
            imgSrc="/img/weather.png"
            liveDemo="https://heatherweather.netlify.app/"
            codeLink="https://github.com/oskarnordin/js-project-weather-app"
          />
        </ProjectContainer>
      </Inner>
    </Background>
  );
};

export default FeaturedProjects;
