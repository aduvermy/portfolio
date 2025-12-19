import styled from 'styled-components';
import { Header } from '../Header/Header';

const Main = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => `calc(${theme.spacing.xxl} * 2) ${theme.spacing.md}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `calc(${theme.spacing.xxl} * 1.5) ${theme.spacing.md}`};
  }

  section {
    padding-top: ${({ theme }) => theme.spacing.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }

  section:first-child {
    padding-top: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightBg};
  color: ${({ theme }) => theme.colors.text};
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer>
        <p>© {new Date().getFullYear()} Arnaud Duvermy. All rights reserved.</p>
      </Footer>
    </Container>
  );
};
