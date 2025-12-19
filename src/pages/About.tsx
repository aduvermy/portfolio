import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Section, SectionTitle, SectionContent } from '../components/UI/Section';
import { Card, CardLink } from '../components/UI/Card';
import { images } from '../assets/images';

const ProfileSection = styled(Section)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  display: block;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const SkillCategory = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.lightBg};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const SkillLabel = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SkillItems = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 1.5;
`;

export const About = () => {
  return (
    <>
      <ProfileSection>
        <ProfileImage src={images.profile} alt="Arnaud Duvermy" />
        <Name>Arnaud Duvermy</Name>
        <Title>Research Engineer · Python Developer</Title>
        <Tagline>
          Building tools for temporal data analysis. Currently leading the development of TanaT at Inria, 
          an open-source library for patient care pathway analysis.
        </Tagline>
        <SocialLinks>
          <SocialLink href="https://github.com/aduvermy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/arnaud-duvermy-b49248132/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink href="mailto:arnaud.duvermy@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialLink>
        </SocialLinks>
      </ProfileSection>

      <Section>
        <SectionTitle>Background</SectionTitle>
        <Card>
          <SectionContent>
            <p>
              I hold a Master's degree in Bioinformatics from Université Claude Bernard Lyon 1 (2022). 
              My background combines software engineering with data science, focused on developing 
              analysis tools and processing pipelines for complex datasets.
            </p>
            <p>
              After two years as a CNRS Engineer at{' '}
              <CardLink href="https://www.rhone-auvergne.cnrs.fr/fr/cnrsinfo/accelerer-linnovation-dans-le-domaine-de-la-fermentation" target="_blank" rel="noopener noreferrer">
                LBMC/Lesaffre
              </CardLink>
              , where I developed detection algorithms and bioinformatics pipelines, I joined the AIStrosight team at Inria in 2024 
              as lead developer of TanaT, a Python library for temporal sequence analysis.
            </p>
          </SectionContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <Card>
          <SkillsGrid>
            <SkillCategory>
              <SkillLabel>Languages</SkillLabel>
              <SkillItems>Python, R, TypeScript</SkillItems>
            </SkillCategory>
            <SkillCategory>
              <SkillLabel>Data Science</SkillLabel>
              <SkillItems>Machine Learning, Statistics, Bioinformatics</SkillItems>
            </SkillCategory>
            <SkillCategory>
              <SkillLabel>Tools</SkillLabel>
              <SkillItems>Git, Docker, Nextflow, Snakemake</SkillItems>
            </SkillCategory>
            <SkillCategory>
              <SkillLabel>Web</SkillLabel>
              <SkillItems>React, Node.js</SkillItems>
            </SkillCategory>
          </SkillsGrid>
        </Card>
      </Section>
    </>
  );
};
