import { Rubik } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';


export const rubik = Rubik({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: rubik.style.fontFamily,
  },
});

export default theme;
