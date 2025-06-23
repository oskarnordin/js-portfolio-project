import React from 'react';
import styled from 'styled-components';

// Social media SVG icons (simple inline SVGs for demonstration)
const SocialIcon = styled.a`
  margin: 0 12px;
  display: inline-block;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.15);
    opacity: 0.8;
  }
  svg {
    width: 28px;
    height: 28px;
    fill: #2d3748;
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #f8f7f7 60%, #e2e8f0 100%);
  color: #2d3748;
  font-family: Teko, sans-serif;
  font-size: 16px;
  text-align: center;
  position: relative;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 32px 0 32px;
  gap: 32px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 180px;
`;

const SectionTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 18px;
  letter-spacing: 1px;
  color: #1a202c;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 12px;
  a {
    color: #2d3748;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: #3182ce;
      text-decoration: underline;
    }
  }
`;

const Socials = styled.div`
  margin-top: 18px;
`;

const SubText = styled.p`
  font-size: 13px;
  margin-top: 36px;
  color: #555;
  letter-spacing: 0.5px;
`;

const Copyright = styled.p`
  font-size: 14px;
  margin-top: 24px;
  color: #888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>About</SectionTitle>
          <FooterList>
            <FooterListItem>
              <a href='#'>Our Story</a>
            </FooterListItem>
            <FooterListItem>
              <a href='#'>Team</a>
            </FooterListItem>
            <FooterListItem>
              <a href='#'>Careers</a>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Resources</SectionTitle>
          <FooterList>
            <FooterListItem>
              <a href='#'>Blog</a>
            </FooterListItem>
            <FooterListItem>
              <a href='#'>Help Center</a>
            </FooterListItem>
            <FooterListItem>
              <a href='#'>Contact</a>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <Socials>
            <SocialIcon
              href='https://twitter.com'
              target='_blank'
              aria-label='Twitter'
            >
              <svg viewBox='0 0 24 24'>
                <path d='M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965a4.822 4.822 0 0 0-.666 2.479c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z' />
              </svg>
            </SocialIcon>
            <SocialIcon
              href='https://facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <svg viewBox='0 0 24 24'>
                <path d='M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0' />
              </svg>
            </SocialIcon>
            <SocialIcon
              href='https://instagram.com'
              target='_blank'
              aria-label='Instagram'
            >
              <svg viewBox='0 0 24 24'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' />
              </svg>
            </SocialIcon>
          </Socials>
        </FooterSection>
      </FooterContent>
      <SubText>Built with ❤️ using React and styled-components</SubText>
      <Copyright>
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
