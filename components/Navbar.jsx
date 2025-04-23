import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background: rgba(245, 245, 245, 0.21);
  color: white;
  font-size: 20px;
  font-family: Agdasima;
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  width: 100%;
  height: 60px; /* Adjusted height */
  padding: 0 20px; /* Horizontal padding */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0; /* Ensure it sticks to the top */
  left: 0; /* Ensure it spans the full width */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <a href="#techStack">Tech Stack</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#myWords">My Words</a>
      <a href="#contact">Contact</a>
    </NavbarContainer>
  );
};

export default Navbar;
