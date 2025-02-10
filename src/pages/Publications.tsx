import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Section, PageTitle } from '../components/UI/Section';
import { Card, CardTitle, CardContent, CardLink } from '../components/UI/Card';

const PublicationCard = styled(Card)`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Authors = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  margin: ${({ theme }) => theme.spacing.sm} 0;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

const Journal = styled.p`
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LinkIcon = styled(FontAwesomeIcon)`
  margin-left: ${({ theme }) => theme.spacing.xs};
  font-size: 0.8em;
`;

const Doi = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

export const Publications = () => {
  return (
    <>
      <PageTitle>Scientific Publications</PageTitle>

      <Section>
        <PublicationCard>
          <CardTitle>RNA helicase-dependent gene looping impacts messenger RNA processing</CardTitle>
          <CardContent>
            <Authors>
              Terrone S, Valat J, Fontrodona N, Giraud G, Claude JB, Combe E, Lapendry A, Polvèche H, 
              Ameur LB, <strong>Duvermy A</strong>, Modolo L, Bernard P, Mortreux F, Auboeuf D, Bourgeois CF.
            </Authors>
            <Journal>Nucleic Acids Research, 2022 Sep 9;50(16):9226-9246</Journal>
            <CardLink 
              href="https://doi.org/10.1093/nar/gkac717" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read Publication <LinkIcon icon={faExternalLinkAlt} />
            </CardLink>
            <Doi>DOI: 10.1093/nar/gkac717</Doi>
          </CardContent>
        </PublicationCard>

        <PublicationCard>
          <CardTitle>
            Contribution of historical herbarium small RNAs to the reconstruction of a cassava mosaic geminivirus evolutionary history
          </CardTitle>
          <CardContent>
            <Authors>
              Rieux, A., Campos, P., <strong>Duvermy, A.</strong> et al.
            </Authors>
            <Journal>Scientific Reports 11, 21280 (2021)</Journal>
            <CardLink 
              href="https://doi.org/10.1038/s41598-021-00518-w" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read Publication <LinkIcon icon={faExternalLinkAlt} />
            </CardLink>
            <Doi>DOI: 10.1038/s41598-021-00518-w</Doi>
          </CardContent>
        </PublicationCard>
      </Section>
    </>
  );
};
