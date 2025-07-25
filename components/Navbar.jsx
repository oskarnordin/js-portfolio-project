import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.nav`
  position: fixed;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1200;
  background: transparent;
  border-radius: 18px;
  padding: 18px 12px;
  gap: 0;
  box-shadow: none;

  @media (max-width: 1500px) {
    display: none;
  }
`;

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0;
`;

const TimelineLink = styled.a`
  font-family: 'Tomorrow', sans-serif;
  font-size: ${(props) => (props.active ? '1.45em' : '1em')};
  font-weight: 400;
  color: ${(props) =>
    ['prologue', 'techstack', 'contact'].includes(props.activeSection)
      ? '#ffffff'
      : '#2E3647'};
  text-decoration: none;
  transition: font-size 0.2s, color 0.2s;
  padding: 6px 18px;
  border-radius: 12px;
  background: transparent;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    color: ${(props) =>
      ['prologue', 'techstack', 'contact'].includes(props.activeSection)
        ? '#ffcfcf'
        : '#a3a3a3'};
  }
`;

const TimelineDotColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  margin-right: 18px;
`;

const TimelineDotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TimelineDot = styled.div`
  width: ${(props) => (props.active ? '18px' : '12px')};
  height: ${(props) => (props.active ? '18px' : '12px')};
  border-radius: 50%;
  background: ${(props) =>
    ['prologue', 'techstack', 'contact'].includes(props.activeSection)
      ? '#ffffff'
      : props.active
      ? '#141414'
      : '#2E3647'};
  z-index: 2;
  transition: width 0.2s, height 0.2s, box-shadow 0.2s, background 0.2s;
`;

const TimelineVerticalLine = styled.div`
  width: 2px;
  height: 32px;
  background-color: ${(props) =>
    ['prologue', 'techstack', 'contact'].includes(props.activeSection)
      ? '#ffffff'
      : '#2E3647'};
  margin: 0 auto;
  z-index: 1;
`;

const sections = [
  { id: 'herosection', label: 'Home' },
  { id: 'prologue', label: 'Prologue' },
  { id: 'showroom', label: 'Showroom' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'moodboard', label: 'Moodboard' },
  { id: 'contact', label: "Let's Talk" },
];

const Navbar = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 - 60) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TimelineContainer>
      <TimelineList>
        {sections.map((sec) => (
          <TimelineItem key={sec.id}>
            <TimelineLink
              href={`#${sec.id}`}
              active={active === sec.id}
              activeSection={active}
            >
              {sec.label}
            </TimelineLink>
          </TimelineItem>
        ))}
      </TimelineList>
      <TimelineDotColumn>
        {sections.map((sec, i) => (
          <TimelineDotWrapper key={sec.id}>
            <TimelineDot active={active === sec.id} activeSection={active} />
            {i < sections.length - 1 && (
              <TimelineVerticalLine activeSection={active} />
            )}
          </TimelineDotWrapper>
        ))}
      </TimelineDotColumn>
    </TimelineContainer>
  );
};

export default Navbar;
