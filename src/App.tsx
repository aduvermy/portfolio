import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Layout } from './components/Layout/Layout';

// Pages (we'll create these next)
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Publications } from './pages/Publications';
import { Education } from './pages/Education';
// import { Recipes } from './pages/Recipes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/education" element={<Education />} />
            {/* <Route path="/recipes" element={<Recipes />} /> */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
