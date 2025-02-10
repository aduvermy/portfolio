import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Section, PageTitle, SectionTitle } from '../components/UI/Section';
import { Card, CardTitle, CardSubtitle, CardContent, CardLink, CardGrid } from '../components/UI/Card';

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectContent = styled(CardContent)`
  flex-grow: 1;
`;

const TechStack = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Tag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.lightBg};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  margin: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xs} ${theme.spacing.xs} 0`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

const ProjectType = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

const LinkIcon = styled(FontAwesomeIcon)`
  margin-left: ${({ theme }) => theme.spacing.xs};
  font-size: 0.8em;
`;

export const Projects = () => {
  return (
    <>
      <PageTitle>Projects</PageTitle>

      <Section>
        <SectionTitle>Software Development</SectionTitle>
        <CardGrid>
          <ProjectCard>
            <CardTitle>HTRfit</CardTitle>
            <CardSubtitle>Statistical Framework for RNA-seq Analysis</CardSubtitle>
            <ProjectContent>
              <p>
                A statistical framework developed to investigate essential experimental parameters that influence your ability 
                to detect expression changes in RNA-seq data analysis.
              </p>
              <CardLink href="https://hal.science/hal-04874914" target="_blank" rel="noopener noreferrer">
                Publication <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <TechStack>
                <Tag>R</Tag>
                <Tag>Statistics</Tag>
                <Tag>RNA-seq</Tag>
                <Tag>Bioinformatics</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <CardTitle>TanaT</CardTitle>
            <CardSubtitle>Temporal Analysis of Trajectories</CardSubtitle>
            <ProjectContent>
              <p>
                A Python library designed to facilitate the creation of metrics and clustering on longitudinal medical data. 
                Currently under development.
              </p>
              <CardLink href="https://gitlab.inria.fr/tanat/tanat" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <TechStack>
                <Tag>Python</Tag>
                <Tag>Machine Learning</Tag>
                <Tag>Temporal Sequence</Tag>
                <Tag>Medical Data</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <CardTitle>PypAssist</CardTitle>
            <CardSubtitle>Python Development Toolkit</CardSubtitle>
            <ProjectContent>
              <p>
                A Python library to facilitate the development of Python applications. Includes tools to simplify the 
                development of data science libraries.
              </p>
              <CardLink href="https://github.com/aduvermy/pypassist" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <TechStack>
                <Tag>Python</Tag>
                <Tag>Development Tools</Tag>
                <Tag>Data Science</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <CardTitle>APTA Shiny Dashboard</CardTitle>
            <CardSubtitle>Interactive RNA-seq Data Visualization</CardSubtitle>
            <ProjectContent>
              <p>
                Shiny application allowing the visualization of RNA-seq data of the pea aphid Acyrthosiphon pisum. 
                Features include PCA, clustering, heatmap, and time series visualization.
              </p>
              <CardLink href="https://gitlab.com/misctraining/projects/apta-shiny" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <ProjectType>(Academic Project)</ProjectType>
              <TechStack>
                <Tag>R</Tag>
                <Tag>Shiny</Tag>
                <Tag>Data Visualization</Tag>
                <Tag>RNA-seq</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Research Projects</SectionTitle>
        <CardGrid>
          <ProjectCard>
            <CardTitle>Meta-Omics Investigation</CardTitle>
            <CardSubtitle>Coral Reef Ecosystem Analysis</CardSubtitle>
            <ProjectContent>
              <p>
                Multi-omic analysis project to study thermal stress effects on coral reef ecosystems.
              </p>
              <CardLink href="https://gitlab.com/misctraining/internship/meta-omics-explorations" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <ProjectType>(Internship)</ProjectType>
              <TechStack>
                <Tag>Bioinformatics</Tag>
                <Tag>Multi-omics</Tag>
                <Tag>Data Analysis</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <CardTitle>Quantitative Nucleosome Analysis</CardTitle>
            <CardSubtitle>Impact of Nucleosomes on Condensin in Mitosis</CardSubtitle>
            <ProjectContent>
              <p>
                Nextflow pipeline developement to analyzed the impact of nucleosomes on condensin in mitosis through multi-omic analysis.
              </p>
              <CardLink href="https://gitlab.com/misctraining/internship/quantitative-nucleosome-analysis" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <ProjectType>(Internship)</ProjectType>
              <TechStack>
                <Tag>Bioinformatics</Tag>
                <Tag>Data Analysis</Tag>
                <Tag>Multi-omics</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <CardTitle>PRDM9 Analysis</CardTitle>
            <CardSubtitle>Genotyping of PRDM9</CardSubtitle>
            <ProjectContent>
              <p>
                Project focused on genotyping analysis of PRDM9, a key protein in meiotic recombination.
              </p>
              <CardLink href="https://gitlab.com/misctraining/projects/prdm9" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <ProjectType>(Academic Project)</ProjectType>
              <TechStack>
                <Tag>Bioinformatics</Tag>
                <Tag>Genetics</Tag>
                <Tag>Data Analysis</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <CardTitle>Google Takeout Analysis</CardTitle>
            <CardSubtitle>Personal Data Mining</CardSubtitle>
            <ProjectContent>
              <p>
                Data mining project analyzing personal data from Google Takeout to extract insights and patterns.
              </p>
              <CardLink href="https://gitlab.com/misctraining/projects/google-takeout-data-mining" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <ProjectType>(Academic Project)</ProjectType>
              <TechStack>
                <Tag>Data Mining</Tag>
                <Tag>Python</Tag>
                <Tag>Data Analysis</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <CardTitle>VDB Final Project</CardTitle>
            <CardSubtitle>Data Visualization Project</CardSubtitle>
            <ProjectContent>
              <p>
                Comprehensive data visualization project showcasing various visualization techniques and interactive dashboards.
              </p>
              <CardLink href="https://gitlab.com/misctraining/projects/vdb-project" target="_blank" rel="noopener noreferrer">
                Repository <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              <ProjectType>(Academic Project)</ProjectType>
              <TechStack>
                <Tag>Data Visualization</Tag>
                <Tag>Dashboard</Tag>
                <Tag>Interactive Design</Tag>
              </TechStack>
            </ProjectContent>
          </ProjectCard>
        </CardGrid>
      </Section>
    </>
  );
};
