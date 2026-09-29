import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Section, PageTitle } from '../components/UI/Section';
import { Card, CardTitle, CardSubtitle, CardContent, CardLink } from '../components/UI/Card';

const ExperienceCard = styled(Card)`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const DateRange = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const LinkIcon = styled(FontAwesomeIcon)`
  margin-left: ${({ theme }) => theme.spacing.xs};
  font-size: 0.8em;
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.sm};

    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: 0;
    }
  }
`;

export const Experience = () => {
  return (
    <>
      <PageTitle>Work Experience</PageTitle>

      <Section>
        <ExperienceCard>
          <CardTitle>Engineer/Developer - Health Data & Systems</CardTitle>
          <CardSubtitle>Inria - PEPR Santé Numérique</CardSubtitle>
          <DateRange>September 2026 - Present</DateRange>
          <CardContent>
            <p>
              Supporting research teams across PEPR Santé Numérique associated teams (Inserm, 
              Inria, CNRS, ...).
            </p>
            <BulletList>
              <li>
                <strong>Software delivery:</strong> Help research teams design and deliver software for healthcare challenges.
              </li>
              <li>
                <strong>Open-source & sovereignty:</strong> Promote and implement open-source, sovereign tools, and 
                reproducible science practices.
              </li>
              <li>
                <strong>Architecture:</strong> Design custom architectures adapted to health data systems.
              </li>
              <li>
                <strong>Training:</strong> Support the setup of training around the healthcare software offering.
              </li>
            </BulletList>
          </CardContent>
        </ExperienceCard>

        <ExperienceCard>
          <CardTitle>Research Engineer - Lead Developer of TanaT</CardTitle>
          <CardSubtitle>AIStrosight (Inria)</CardSubtitle>
          <DateRange>June 2024 - June 2026</DateRange>
          <CardContent>
            <p>
              Lead developer of TanaT, an extensible Python library for temporal sequence analysis focused on patient care pathways.
              The library supports multi-sequence trajectories combining states, intervals, and events, enabling comprehensive multidimensional temporal pattern discovery.
            </p>
            <p>
              Project: <CardLink href="https://github.com/TanaT-Lab/TanaT" target="_blank" rel="noopener noreferrer">
                TanaT <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
              {' | '}
              <CardLink href="https://inria.hal.science/hal-05336370v1/document" target="_blank" rel="noopener noreferrer">
                Publication <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
            </p>
          </CardContent>
        </ExperienceCard>

        <ExperienceCard>
          <CardTitle>CNRS Engineer - Data Science & Bioinformatics</CardTitle>
          <CardSubtitle>LBMC, Lesaffre</CardSubtitle>
          <DateRange>January 2022 - June 2024</DateRange>
          <CardContent>
            <BulletList>
              <li>
                <strong>Data Science (60%):</strong> Developed haploid strain detection algorithms using random forest with NGS data.
                Created Nextflow pipelines for metagenomics and transcriptomics, integrated with custom API and Cloud storage.
              </li>
              <li>
                <strong>Research (40%):</strong> Developed HTRfit, a statistical framework for simulating and analyzing high-throughput
                RNAseq data with fixed, mixed, and interaction effects.
                (<CardLink href="https://hal.science/hal-04874914" target="_blank" rel="noopener noreferrer">
                  Publication <LinkIcon icon={faExternalLinkAlt} />
                </CardLink>)
              </li>
            </BulletList>
          </CardContent>
        </ExperienceCard>

        <ExperienceCard>
          <CardTitle>Research Intern - Multi-omic Analysis</CardTitle>
          <CardSubtitle>Tokyo, Japan</CardSubtitle>
          <DateRange>January 2021 - June 2021</DateRange>
          <CardContent>
            <p>
              Conducted multi-omic analysis to study thermal stress on coral reef ecosystems.
              <CardLink href="https://gitlab.com/misctraining/internship/meta-omics-explorations" target="_blank" rel="noopener noreferrer">
                {' '}Project Details <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
            </p>
          </CardContent>
        </ExperienceCard>

        <ExperienceCard>
          <CardTitle>Research Intern - Quantitative Nucleosome Analysis</CardTitle>
          <CardSubtitle>LBMC, Lyon</CardSubtitle>
          <DateRange>May 2020 - July 2020</DateRange>
          <CardContent>
            <p>
              Nextflow pipeline developement to analyzed the impact of nucleosomes on condensin in mitosis through multi-omic analysis.
              <CardLink href="https://gitlab.com/misctraining/internship/quantitative-nucleosome-analysis" target="_blank" rel="noopener noreferrer">
                {' '}Project Details <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
            </p>
          </CardContent>
        </ExperienceCard>

        <ExperienceCard>
          <CardTitle>Research Intern - NGS Data Analysis</CardTitle>
          <CardSubtitle>CIRAD, Reunion</CardSubtitle>
          <DateRange>May 2019 - December 2019</DateRange>
          <CardContent>
            <p>
              Analyzed NGS data from herbaria samples to understand virus evolution history.
            </p>
          </CardContent>
        </ExperienceCard>
      </Section>
    </>
  );
};
