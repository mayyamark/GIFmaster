import { COLORS } from '@app/theme';
import { alpha, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: '100%',

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: COLORS.white,
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      width: '15ch',

      '&:focus': {
        width: '25ch',
      },
    },

    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 1, 1, 0),
    },
  },

  icon: {
    color: COLORS.white,
  },
}));

export default useStyles;
