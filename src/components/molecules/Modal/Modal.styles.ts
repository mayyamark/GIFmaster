import { makeStyles, Theme } from '@material-ui/core';
import { COLORS } from '@app/theme';

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
    },

    [theme.breakpoints.down('sm')]: {
      boxShadow: `inset 0 0 0 5px ${COLORS.black}`,
      border: `5px solid ${COLORS.white}`,
    },

    [theme.breakpoints.up('sm')]: {
      boxShadow: `0 0 0 5px ${COLORS.black}, 0 0 0 10px ${COLORS.white}, 0 0px 18px 31px ${COLORS.blackWithOpacity}`,
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
    color: COLORS.darkGray,
  },
}));

export default useStyles;
