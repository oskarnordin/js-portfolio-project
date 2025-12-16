import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';
import 'hamburgers/dist/hamburgers.min.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'aboutme', label: 'About Me' },
  { id: 'showroom', label: 'Showroom' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'moodboard', label: 'Moodboard' },
  { id: 'contact', label: "Let's Talk" },
];

const NavContainer = styled.div`
  width: 100%;
  font-family: var()(--font-sans);
  background: #FFFFFF;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  position: relative;
  margin-top: 20px;
  z-index: 1000;
  pointer-events: auto; /* allow overlays like MobileMenu to receive clicks */
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
  padding: 24px;
  border-radius: 0;
  position: fixed; /* full-screen overlay on mobile */
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  z-index: 2000; /* above everything else */
  width: 100%;
  height: 100vh; /* requested: take the full viewport height */
  overflow-y: auto;

  @media (max-width: 768px) {
    display: flex; /* show on mobile */
  }

  /* simple fade+slide-in animation */
  animation: menuSlideDown 240ms ease forwards;

  @keyframes menuSlideDown {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const MobileMenuLink = styled(NavLink)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px 0;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-family: var(--font-sans);
  font-weight: 400;
  &:hover { opacity: 0.9; }
`;

const HamburgerButton = styled.button`
  display: none; /* hide by default on desktop */
  background: transparent;
  border: none;
  width: 56px;
  height: 56px;
  z-index: 11000;

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

  /* Override hamburger bar color when open */
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background-color: ${p => (p.$open ? '#ffffff' : '#000000')} !important;
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
  position: relative; /* anchor for popover */

  &:hover > .avatar-popover,
  &:focus-within > .avatar-popover {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }
`;

const MobileAvatar = styled.div`
  display: none;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1100;
  align-items: center;

  img, .avatar {
    border-radius: 20% !important;
    display: block;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const PopoverBox = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  width: 250px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.18);
  opacity: 0;
  pointer-events: none;
  transition: opacity 220ms ease, transform 220ms ease;
  z-index: 12000;

  ${(p) => p.open && `
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  `}

  img { width: 100%; height: 100%; object-fit: cover; display: block; }

  @media (max-width: 768px) {
    display: none; /* hide on mobile */
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 20px;
  border-radius: 12px;
  font-family: var(--font-sans);
  font-weight: 400;
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
  const [popoverOpen, setPopoverOpen] = useState(false);
  const avatarRef = useRef(null);

  // close popover when clicking outside (use mousedown to avoid event-order issues)
  useEffect(() => {
    const onDocPointer = (e) => {
      if (!avatarRef.current) return;
      if (!avatarRef.current.contains(e.target)) setPopoverOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setPopoverOpen(false); };
    document.addEventListener('mousedown', onDocPointer);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDocPointer); document.removeEventListener('keydown', onKey); };
  }, []);

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

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (menuOpen && isMobile) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
    // ensure reset when menu closes
    document.body.style.overflow = '';
  }, [menuOpen, isMobile]);

  // Close menu and navigate/scroll to href target for mobile menu links
  const handleMobileMenuLinkClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    setMenuOpen(false);
    if (!href) return;
    // Smooth-scroll for hash links within the page
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      // Wait for menu to unmount and body scroll to unlock
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback to setting the hash (default browser jump)
          window.location.hash = href;
        }
      }, 50);
    }
    // Non-hash links fall through to default navigation behavior
  };
  return (
    <NavContainer>
      <Nav>
        {/* Mobile-only avatar on the left */}
        <MobileAvatar>
          <Avatar src="/img/avatar.png" alt="Oskar" size="48" />
        </MobileAvatar>
        <NavItems>
          <Tab>

          </Tab>

          <TabList role="tablist" aria-label="Main navigation tabs">
                      <Tab>
            <AvatarWrapper
              ref={avatarRef}
              tabIndex={0}
              role="button"
              aria-label="Profile"
              aria-expanded={popoverOpen}
              aria-controls="avatar-popover"
              onClick={(e) => {
                // If the click is on the avatar home link, allow navigation and close popover
                if (e.target.closest('.avatar-home-link')) {
                  setPopoverOpen(false);
                  setMenuOpen(false);
                  return; // let NavLink handle navigation
                }
                e.stopPropagation();
                setPopoverOpen((s) => !s);
              }}
              onKeyDown={(e) => {
                // toggle on Enter or Space for keyboard users
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  setPopoverOpen((s) => !s);
                }
              }}
            >
              <NavLink
                to="/home"
                className="avatar-home-link"
                aria-label="Go to Home"
                onClick={() => {
                  setPopoverOpen(false);
                  setMenuOpen(false);
                }}
                style={{ display: 'block' }}
              >
                <Avatar src="/img/avatar.png" alt="Oskar" size="61" />
              </NavLink>
              <PopoverBox id="avatar-popover" className="avatar-popover" aria-hidden={!popoverOpen} open={popoverOpen}>
                <img src="/img/avatar.png" alt="Oskar large" />
              </PopoverBox>
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
              $open={menuOpen}
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
                    <MobileMenuLink to="/home" onClick={handleMobileMenuLinkClick}>Home</MobileMenuLink>

          <MobileMenuLink to="/aboutme" onClick={handleMobileMenuLinkClick}>About Me</MobileMenuLink>
          <MobileMenuLink to="/showroom" onClick={handleMobileMenuLinkClick}>Showroom</MobileMenuLink>
          <MobileMenuLink to="/moodboard" onClick={handleMobileMenuLinkClick}>Moodboard</MobileMenuLink>
          <MobileMenuLink to="/techstack" onClick={handleMobileMenuLinkClick}>Tech Stack</MobileMenuLink>
          <MobileMenuLink to="/contact" onClick={handleMobileMenuLinkClick}>Let's Talk</MobileMenuLink>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;
