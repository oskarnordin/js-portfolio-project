import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';
import 'hamburgers/dist/hamburgers.min.css';

const sections = [
  { id: 'herosection', label: 'Home' },
  { id: 'prologue', label: 'Prologue' },
  { id: 'showroom', label: 'Showroom' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'moodboard', label: 'Moodboard' },
  { id: 'contact', label: "Let's Talk" },
];

const NavContainer = styled.div`
  width: 100%;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
  /* Participate in document flow so it pushes content down */
  position: relative;
  margin-top: 20px;
  z-index: 1000;
  pointer-events: none; /* let inner nav handle pointer-events */
`;

const Nav = styled.nav`
  pointer-events: auto;
  width: min(1100px, 100%);
  margin: 0 auto;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between; /* spread content inside the nav */
  border-radius: 32px;
  background: transparent;
  position: relative; /* anchor for absolute mobile menu */
`;

const MobileMenu = styled.div`
  background: #3D4CFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 12px;
  position: absolute;
  top: calc(100% + 8px); /* place just below the nav */
  z-index: 2000; /* above everything else */
  width: 100%;
  min-height: vh;

  @media (max-width: 768px) {
    display: flex; /* show on mobile */
  }

  /* simple slide-down animation */
  animation: menuSlideDown 240ms ease forwards;

  @keyframes menuSlideDown {
    from { opacity: 0; transform: translateY(-6px) scaleY(0.98); }
    to { opacity: 1; transform: translateY(0) scaleY(1); }
  }
`;

const MobileMenuLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px 0;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
`;

const HamburgerButton = styled.button`
  display: none; /* hide by default on desktop */
  background: transparent;
  border: none;
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: block; /* show on mobile */
  }

  /* ensure hidden on desktop explicitly */
  @media (min-width: 769px) {
    display: none !important;
  }

  @media (max-width: 768px) {
    display: block; /* show on mobile */
  }
`;

const TabList = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0;
  height: 100%;
  flex: 1; /* allow the tab list to take available space so it can be centered */
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none; /* hide nav links on mobile, use hamburger menu */
  }
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  justify-content: space-between; /* avatar left, tabs center, hamburger right */
  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 8px;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  height: 100%;
  overflow: hidden;

  img, .avatar {
    border-radius: 25% !important;
    display: block;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 20px;
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  transition: background var(--transition-default), color var(--transition-default);

  &.active {
    background: #000000;
    
    color: #ffffff;
    opacity: 0.9;
  }

  &:hover {
    background: rgba(0,0,0,0.06);
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  // Close menu when switching to desktop and track mobile breakpoint
  React.useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <NavContainer>
      <Nav>
        <NavItems>
          <Tab>

          </Tab>

          <TabList role="tablist" aria-label="Main navigation tabs">
                      <Tab>
            <AvatarWrapper>
              <Avatar src="/img/avatar.png" alt="Oskar" size="61" />
            </AvatarWrapper>
          </Tab>
            {sections.map((s) => (
              <Tab role="presentation" key={s.id}>
                <StyledNavLink
                  to={`/${s.id}`}
                  end
                  role="tab"
                  aria-selected={false}
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </StyledNavLink>
                
              </Tab>
            ))}
          </TabList>

          {/* Hamburger button for mobile / narrow view */}
          {isMobile && (
            <HamburgerButton
              className={`hamburger hamburger--emphatic${menuOpen ? ' is-active' : ''}`}
              type="button"
              aria-label="Menu"
              aria-controls="navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </HamburgerButton>
          )}
        </NavItems>
      </Nav>

      {/* In-flow mobile menu: when open it pushes page content down */}
      {menuOpen && isMobile && (
        <MobileMenu>
          <MobileMenuLink href="#prologue" onClick={() => setMenuOpen(false)}>Prologue</MobileMenuLink>
          <MobileMenuLink href="#showroom" onClick={() => setMenuOpen(false)}>Showroom</MobileMenuLink>
          <MobileMenuLink href="#moodboard" onClick={() => setMenuOpen(false)}>Moodboard</MobileMenuLink>
          <MobileMenuLink href="#techstack" onClick={() => setMenuOpen(false)}>Tech Stack</MobileMenuLink>
          <MobileMenuLink href="#contact" onClick={() => setMenuOpen(false)}>Let's Talk</MobileMenuLink>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;
