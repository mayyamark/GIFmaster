import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    lineHeight: 0,
    overflowY: 'auto',

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2, 3.5),
      columnCount: 2,
    },

    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(4, 7),
      columnCount: 3,
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(8, 14),
      columnCount: 4,
    },

    [theme.breakpoints.up('xl')]: {
      margin: theme.spacing(0),
      columnCount: 5,
    },
  },

  gif: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(1, 0),
    cursor: 'pointer',
  },

  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
}));

export default useStyles;
