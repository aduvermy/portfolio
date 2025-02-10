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
          <CardTitle>Engineer - Python Library Development for Medical Research</CardTitle>
          <CardSubtitle>AIStrosight (Inria), APHP</CardSubtitle>
          <DateRange>June 2024 - December 2024</DateRange>
          <CardContent>
            <p>
              Developed a flexible and scalable Python library for building metrics and clustering on longitudinal medical data, 
              easily integrable with machine learning tools for advanced predictive analysis.
            </p>
            <p>
              Project: <CardLink href="https://gitlab.inria.fr/tanat/tanat" target="_blank" rel="noopener noreferrer">
                TanaT <LinkIcon icon={faExternalLinkAlt} />
              </CardLink>
            </p>
          </CardContent>
        </ExperienceCard>

        <ExperienceCard>
          <CardTitle>CNRS Engineer - Data Science & Bioinformatics</CardTitle>
          <CardSubtitle>LBMC, Lesaffre</CardSubtitle>
          <DateRange>January 2021 - June 2024</DateRange>
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
