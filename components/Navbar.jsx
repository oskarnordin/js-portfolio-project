import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background: rgba(245, 245, 245, 0.21);
  color: white;
  font-size: 20px;
  font-family: Agdasima;
  border-radius: 0px;
  width: 50%;
  height: 60px; /* Adjusted height */
  padding: 0 20px; /* Horizontal padding */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0; /* Ensure it sticks to the top */
  left: 0; /* Ensure it spans the full width */
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 32px; /* Adjust spacing between links as needed */
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LinksWrapper>
        <a href='#techStack'>Tech Stack</a>
        <a href='#skills'>Skills</a>
        <a href='#showroom'>Projects</a>
        <a href='#myWords'>My Words</a>
        <a href='#contact'>Contact</a>
      </LinksWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
