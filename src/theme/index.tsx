import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat'), url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          expanded: {
            margin: 0,
            minHeight: "48px",
          },
        },
        content: {
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiAccordionSummary-root": {
            "&.Mui-expanded": {
              minHeight: "48px",
            },
          },
        },
      },
    },
  },
});
