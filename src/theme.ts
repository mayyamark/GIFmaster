import { createTheme } from '@material-ui/core';

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  blackWithOpacity: 'rgba(0, 0, 0, 0.87)',
  lightGray: '#909090',
  darkGray: '#404040',
};

export const cairoFontFamily = ['Cairo', 'sans-serif'].join(', ');

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },

  typography: {
    fontFamily: cairoFontFamily,
    h1: {
      fontFamily: cairoFontFamily,
    },
    h2: {
      fontFamily: cairoFontFamily,
    },
    h3: {
      fontFamily: cairoFontFamily,
    },
    h4: {
      fontFamily: cairoFontFamily,
    },
    h5: {
      fontFamily: cairoFontFamily,
    },
    h6: {
      fontFamily: cairoFontFamily,
    },
    body1: {
      fontFamily: cairoFontFamily,
    },
    body2: {
      fontFamily: cairoFontFamily,
    },
    button: {
      fontFamily: cairoFontFamily,
    },
    subtitle1: {
      fontFamily: cairoFontFamily,
    },
  },

  overrides: {
    MuiButton: {
      outlined: {
        color: COLORS.black,

        '&:hover': {
          boxShadow:
            '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
        },
      },
    },
  },
});

export default theme;
