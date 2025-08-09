import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
