import { createTheme } from '@material-ui/core';

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  blackWithOpacity: 'rgba(0, 0, 0, 0.87)',
  lightGray: '#909090',
  darkGray: '#404040',
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

export default theme;
