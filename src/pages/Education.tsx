import styled from 'styled-components';
import { Section, PageTitle, SectionTitle } from '../components/UI/Section';
import { Card, CardTitle, CardSubtitle, CardContent } from '../components/UI/Card';

const EducationCard = styled(Card)`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const DateRange = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Institution = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Topics = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: ${({ theme }) => theme.spacing.md};

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

export const Education = () => {
  return (
    <>
      <PageTitle>Education & Training</PageTitle>

      <Section>
        <SectionTitle>Academic Education</SectionTitle>
        
        <EducationCard>
          <CardTitle>Master of Bioinformatics</CardTitle>
          <CardSubtitle>Methods & Molecular Analysis</CardSubtitle>
          <CardContent>
            <Institution>University Claude Bernard Lyon 1</Institution>
            <DateRange>2018 - 2021</DateRange>
            <Topics>
              <li>Advanced programming and software development</li>
              <li>Statistical analysis and machine learning</li>
              <li>Genomics and molecular biology</li>
              <li>Data visualization and analysis</li>
            </Topics>
          </CardContent>
        </EducationCard>

        <EducationCard>
          <CardTitle>Bachelor of Science</CardTitle>
          <CardSubtitle>Technology, Health - Major in Bioinformatics Statistics and Modeling</CardSubtitle>
          <CardContent>
            <Institution>University Claude Bernard Lyon 1</Institution>
            <DateRange>2015 - 2018</DateRange>
            <Topics>
              <li>Programming fundamentals</li>
              <li>Statistics and probability</li>
              <li>Biological data analysis</li>
              <li>Database management</li>
            </Topics>
          </CardContent>
        </EducationCard>
      </Section>

      <Section>
        <SectionTitle>Professional Training</SectionTitle>

        <EducationCard>
          <CardTitle>Introduction to Deep Learning</CardTitle>
          <CardSubtitle>FIDLE CNRS</CardSubtitle>
          <CardContent>
            <DateRange>2022 - 2023</DateRange>
            <Topics>
              <li>Keras and TensorFlow frameworks</li>
              <li>Fine-tuning techniques</li>
              <li>Convolutional Neural Networks (CNN)</li>
              <li>Transformers and encoders</li>
            </Topics>
          </CardContent>
        </EducationCard>

        <EducationCard>
          <CardTitle>Network Statistical Analysis</CardTitle>
          <CardSubtitle>CNRS</CardSubtitle>
          <CardContent>
            <DateRange>November 2023</DateRange>
            <Topics>
              <li>Network manipulation and visualization</li>
              <li>Statistical description of networks</li>
              <li>Random graph models</li>
              <li>Community detection and spectral clustering</li>
            </Topics>
          </CardContent>
        </EducationCard>
      </Section>

      <Section>
        <SectionTitle>Mentoring Experience</SectionTitle>

        <EducationCard>
          <CardTitle>Python Package Development Mentor</CardTitle>
          <CardSubtitle>Université Claude Bernard Lyon 1</CardSubtitle>
          <CardContent>
            <DateRange>January 2025 - March 2025</DateRange>
            <p>
              Guided a team of 4 M1 Bioinformatics students in developing a Python package for simulating temporal sequence data.
            </p>
            <Topics>
              <li>Provided technical guidance and code review</li>
              <li>Supported project management and development workflow</li>
              <li>Helped students develop practical programming skills</li>
              <li>Focused on Python package development best practices</li>
            </Topics>
          </CardContent>
        </EducationCard>
      </Section>
    </>
  );
};
