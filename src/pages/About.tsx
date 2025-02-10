import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { Section, SectionTitle, SectionContent } from '../components/UI/Section';
import { Card, CardLink } from '../components/UI/Card';
import { images } from '../assets/images';

const ProfileSection = styled(Section)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  display: block;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const About = () => {
  return (
    <>
      <ProfileSection>
        <ProfileImage src={images.profile} alt="Arnaud Duvermy" />
        <Name>Arnaud Duvermy</Name>
        <Title>Software Engineer & Data Scientist</Title>
        <SocialLinks>
          <SocialLink href="https://github.com/aduvermy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/arnaud-duvermy-b49248132/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </SocialLinks>
      </ProfileSection>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <Card>
          <SectionContent>
            <p>
              I earned a master's degree in bioinformatics in 2021. Shortly after, I started a two-year contract as a CNRS Engineer working in a research and development department at Lesaffre (@
              <CardLink href="https://www.rhone-auvergne.cnrs.fr/fr/cnrsinfo/accelerer-linnovation-dans-le-domaine-de-la-fermentation" target="_blank" rel="noopener noreferrer">
                Partnership Lesaffre's Data Science/LBMC
              </CardLink>
              ). There, I focused on developing detection algorithms and data processing pipelines, applying my expertise in bioinformatics, statistics and machine learning to tackle complex data challenges in genomics and metagenomics.
            </p>
            <p>
              Seeking new challenges and opportunities to advance method development, I joined AIStrosight in June 2024. Here, I'm dedicated to creating a Python library for analyzing temporal sequences and trajectories. This library is currently under development and is expected to be released in the near future.
            </p>
          </SectionContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Core Skills</SectionTitle>
        <Card>
          <SectionContent>
            <ul>
              <li>Software Development: Python, TypeScript, R</li>
              <li>Data Science: Machine Learning, Statistical Analysis, Bioinformatics</li>
              <li>Web Development: React, Node.js</li>
              <li>Tools & Technologies: Git, Docker, Cloud Computing</li>
              <li>Workflow manager: Nextflow, Snakemake</li>
            </ul>
          </SectionContent>
        </Card>
      </Section>
    </>
  );
};
