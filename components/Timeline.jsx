import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1200;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  padding: 18px 12px;
  gap: 18px;
`;

const TimelineLink = styled.a`
  font-family: 'Tomorrow', sans-serif;
  font-size: ${(props) => (props.active ? '1.45em' : '1em')};
  font-weight: ${(props) => (props.active ? '700' : '400')};
  color: ${(props) => (props.active ? '#FC5F5A' : '#222')};
  text-decoration: none;
  transition:
    font-size 0.2s,
    color 0.2s;
  padding: 6px 18px;
  border-radius: 12px;
  background: ${(props) => (props.active ? 'rgba(252,95,90,0.08)' : 'none')};
  cursor: pointer;

  &:hover {
    color: #fc5f5a;
    background: rgba(252, 95, 90, 0.13);
  }
`;

const sections = [
  { id: 'Herosection', label: 'Home' },
  { id: 'prologue', label: 'Prologue' },
  { id: 'showroom', label: 'Showroom' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'moodboard', label: 'Moodboard' },
  { id: 'contact', label: "Let's Talk" },
];

const Timeline = () => {
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
      {sections.map((sec) => (
        <TimelineLink key={sec.id} href={`#${sec.id}`} active={active === sec.id}>
          {sec.label}
        </TimelineLink>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
