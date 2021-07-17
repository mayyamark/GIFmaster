import { makeStyles, Theme } from '@material-ui/core';
import { COLORS } from '@app/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    boxShadow: `0 12px 20px 0 ${COLORS.darkGray}`,
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
    padding: 0,
    margin: theme.spacing(1),
    zIndex: 1,
  },

  closeIcon: {
    color: 'gray',
  },
}));

export default useStyles;
