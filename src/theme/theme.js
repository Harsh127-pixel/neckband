import { createTheme } from '@mui/material/styles';

/**
 * "Pet-Friendly Professional" Theme
 * 
 * This theme defines the visual identity of the Smart Dog Neckband application.
 * It uses a professional blue and teal palette with rounded shapes and 
 * premium typography to convey trust, safety, and modern technology.
 */

const theme = createTheme({
  palette: {
    primary: {
      main: '#2070B0', // Professional Blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#14967A', // Teal
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F7FA', // Soft Slate
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2027',
      secondary: '#4A5568',
    },
  },
  typography: {
    // Body and general UI elements
    fontFamily: "'DM Sans', sans-serif",
    
    // Headings configuration
    h1: { fontFamily: "'DM Serif Display', serif", fontWeight: 700 },
    h2: { fontFamily: "'DM Serif Display', serif", fontWeight: 700 },
    h3: { fontFamily: "'DM Serif Display', serif", fontWeight: 700 },
    h4: { fontFamily: "'DM Serif Display', serif", fontWeight: 700 },
    h5: { fontFamily: "'DM Serif Display', serif", fontWeight: 600 },
    h6: { fontFamily: "'DM Serif Display', serif", fontWeight: 600 },
    
    button: {
      textTransform: 'none', // Keeps button text natural (not all caps)
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10, // Modern, rounded look for buttons, cards, and inputs
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', // Subtle shadow for elevation
        },
      },
    },
  },
});

export default theme;
