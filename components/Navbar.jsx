import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #c8c3c1;
  display: flex;
`;

const DesktopMenu = styled.nav`
  display: flex;
  @media (min-width: 769px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.shrunk ? '90px' : '160px')};
    background-color: #f8f7f7;
    z-index: 8000;
    align-items: center;
    justify-content: center;
    transition: height 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-family: 'Tomorrow', sans-serif;
  color: #565656;
  text-decoration: none;
  margin: 0 12px;
  font-weight: 00;
  transition: color 0.4s;
  &:hover {
    color: #ff6b6b;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 14px 0;
    width: 100vw;
    justify-content: center;
  }
`;

const Navbar = () => {
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <DesktopMenu shrunk={shrunk}>
      <MenuLink href='#prologue'>Prologue</MenuLink>
      <MenuLink href='#showroom'>Showroom</MenuLink>
      <MenuLink href='#techstack'>Tech Stack</MenuLink>
      <MenuLink href='#moodboard'>Moodboard</MenuLink>
      <MenuLink href='#contact'>Let's Talk</MenuLink>
    </DesktopMenu>
  );
};

export default Navbar;
