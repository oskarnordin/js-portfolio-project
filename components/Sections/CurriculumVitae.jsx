import React from 'react';
import styled from 'styled-components';
import { SectionContainer, Inner } from '../SharedComponents';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Background = styled.section`
  position: relative;
  scroll-margin-top: 90px;
  padding: 48px 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 36px;
  text-align: center;
  margin: 0 0 28px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const FadeInContainer = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s ease-out, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Column = styled.div``;

const ColumnHeading = styled.h3`
  font-size: 20px;
  margin: 0 0 12px 0;
`;

const Card = styled.article`
  background: rgba(255,255,255,0.6);
  border-radius: 12px;
  padding: 16px;
  box-shadow: var(--shadow-1);
  margin-bottom: 12px;
`;

const Role = styled.div`
  font-weight: 700;
  margin-bottom: 6px;
`;

const Meta = styled.div`
  font-size: 13px;
  color: rgba(0,0,0,0.6);
  margin-bottom: 8px;
`;

const BulletList = styled.ul`
  margin: 8px 0 0 16px;
`;

const CvP = styled.p`
  color: var(--color-text);
  font-weight: 400;
  text-align: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const CurriculumVitae = () => {
  const ref = React.useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <Background id="curriculum-vitae">
      <SectionContainer>
        <Inner>
          <FadeInContainer ref={ref} className={isVisible ? 'visible' : ''}>
            <h2>Curriculum Vitae</h2>
            <CvP>Work Experience, Education, and Certificates</CvP>
            <Grid>
            <Column>
              <ColumnHeading>Work Experience</ColumnHeading>

              <Card>
                <Role>Web Developer Intern — T-Box</Role>
                <Meta>09/2025 - 10/2025</Meta>
                <BulletList>
                  <li>Built and maintained a React frontend integrated with AWS serverless.</li>
                  <li>Implemented Lambda functions for data validation and transformation.</li>
                  <li>Automated deployments using Terraform for repeatable infra.</li>
                </BulletList>
              </Card>

              <Card>
                <Role>CRO Specialist — Tele2</Role>
                <Meta>01/2022 - 09/2022</Meta>
                <BulletList>
                  <li>Optimized purchase flows via data-driven A/B testing (95% CI).</li>
                  <li>Delivered reports and actionable insights to stakeholders.</li>
                  <li>Improved analytics and conversion optimization practices.</li>
                </BulletList>
              </Card>

              <Card>
                <Role>Web Analyst Intern — Bombayworks</Role>
                <Meta>09/2021 - 01/2022</Meta>
                <BulletList>
                  <li>Implemented GA4 tracking for BoKlok’s new website.</li>
                  <li>Migrated Toyota Sweden dealerships from UA to GA4.</li>
                </BulletList>
              </Card>

              <Card>
                <Role>Senior Servicedesk Analyst — Telia Company</Role>
                <Meta>09/2015 - 08/2021</Meta>
                <BulletList>
                  <li>Provided technical support for SMBs (web hosting, Office 365).</li>
                </BulletList>
              </Card>
            </Column>

            <Column>
              <ColumnHeading>Education</ColumnHeading>

              <Card>
                <Role>JavaScript Development Bootcamp (160 YH) — Technigo</Role>
                <Meta>01/2025 - 11/2025</Meta>
                <BulletList>
                  <li>React & state management (Hooks, component architecture).</li>
                  <li>Modern JavaScript & TypeScript (ES6+, async, modules).</li>
                  <li>Fullstack: REST APIs, Node.js/Express, MongoDB.</li>
                  <li>Accessibility & product workflows (WCAG, Agile).</li>
                  <li>Hands-on projects from idea to deployment.</li>
                </BulletList>
              </Card>

              <Card>
                <Role>Digital Analytics (320 YH) — Medieinstitutet</Role>
                <Meta>08/2020 - 01/2022</Meta>
                <BulletList>
                  <li>Tools: GA4, GTM, BigQuery, Hotjar.</li>
                  <li>Web tech: HTML, JavaScript, SQL.</li>
                  <li>Data & reporting: statistics, visualization, conversion optimization.</li>
                </BulletList>
              </Card>
            </Column>

            <Column>
              <ColumnHeading>Certificates</ColumnHeading>

              <Card>
                <Role>Data Scientist: Inference Specialist — Codecademy</Role>
                <Meta>2024 — Credential ID: A505BA3D-6</Meta>
              </Card>

            </Column>
            </Grid>
          </FadeInContainer>
        </Inner>
      </SectionContainer>
    </Background>
  );
};

export default CurriculumVitae;
