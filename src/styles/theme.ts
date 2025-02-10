export const theme = {
  colors: {
    primary: '#0366d6',
    secondary: '#6c757d',
    background: '#ffffff',
    text: '#24292e',
    lightBg: '#f6f8fa',
    border: '#eaecef',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    wide: '1200px',
  },
  shadows: {
    card: '0 2px 8px rgba(0,0,0,0.1)',
    hover: '0 4px 12px rgba(0,0,0,0.15)',
  },
  transitions: {
    default: '0.3s ease',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    lineHeight: 1.6,
    fontSize: {
      small: '0.875rem',
      body: '1rem',
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem',
      h4: '1.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600,
    },
  },
};

export type Theme = typeof theme;
