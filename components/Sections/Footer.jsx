import React from 'react';
import styled from 'styled-components';
import { Inner } from '../SharedComponents';

const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  background: transparent;
  font-size: 16px;
  text-align: center;
  padding: 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Socials = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 28px;
  justify-content: center;
`;

const SocialIcon = styled.a`
  display: inline-block;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    opacity: 0.9;
  }

  /* simple tooltip using the data-label attribute */
  &::after {
    content: attr(data-label);
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 160ms ease,
      transform 160ms ease;
    z-index: 40;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  svg {
    width: 40px;
    height: 40px;
    fill: #f8f8f8;
  }
`;

const FooterInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: var(--color-primary);
  border-radius: 50%;
  overflow: hidden;
  img {
    display: block;
    width: 30px;
    height: 30px;
    filter: invert(1);
  }
`;

const Footer = () => (
  <FooterContainer>
    <Inner>
      <FooterInner>
        <Socials>
          <SocialIcon
            href="https://linkedin.com/in/oskarnordin"
            target="_blank"
            rel="noopener noreferrer"
            data-label="LinkedIn"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <Badge>
              <img src="img/linkedin.png" alt="LinkedIn" />
            </Badge>
          </SocialIcon>

          <SocialIcon
            href="https://github.com/oskarnordin"
            target="_blank"
            rel="noopener noreferrer"
            data-label="GitHub"
            title="GitHub"
            aria-label="GitHub"
          >
            <Badge>
              <img src="img/github.png" alt="GitHub" />
            </Badge>
          </SocialIcon>

          <SocialIcon
            href="https://instagram.com/oskaralexander"
            target="_blank"
            rel="noopener noreferrer"
            data-label="Instagram"
            title="Instagram"
            aria-label="Instagram"
          >
            <Badge>
              <img src="img/instagram.png" alt="Instagram" />
            </Badge>
          </SocialIcon>
        </Socials>
      </FooterInner>
    </Inner>
  </FooterContainer>
);

export default Footer;
