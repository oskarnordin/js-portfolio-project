import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 400px;
  background: #1e0c59;
  color: #f8f8f8;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  text-align: center;
  padding: 32px 0 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`;

const Socials = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 36px;
`;

const SocialIcon = styled.a`
  display: inline-block;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.15);
    opacity: 0.8;
  }
  svg {
    width: 52px;
    height: 52px;
    fill: #f8f8f8;
  }
`;

const SubText = styled.p`
  font-size: 13px;
  margin-top: 18px;
  color: #bdbdbd;
  /* font-family: 'Source Code Pro', monospace; */
`;

const Copyright = styled.p`
  font-size: 14px;
  margin-top: 12px;
  color: #888;
`;

const Footer = () => (
  <FooterContainer>
    <SubText>Built with React & styled-components</SubText>
    <Copyright>
      &copy; {new Date().getFullYear()} Oskar Nordin. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer;
