import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  content: {
    position: 'relative',
    width: '100%',

    [theme.breakpoints.up('md')]: {
      margin: 'auto',
      width: '600px',
      minHeight: '600px',
    },
  },

  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 20,
    zIndex: 1,

    '&:hover': {
      backgroundColor: 'silver',
    },

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
  },

  closeIcon: {
    color: 'gray',
  },
}));

export default useStyles;
