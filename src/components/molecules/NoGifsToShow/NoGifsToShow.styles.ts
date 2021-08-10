import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    textAlign: 'center',
  },

  oohNo: {
    fontSize: 54,
  },

  nothingToShow: {
    fontWeight: 600,
    fontSize: 32,
  },

  linkTypography: {
    marginTop: theme.spacing(3),

    '& > a': {
      textDecoration: 'none',
      color: COLORS.lightGray,
      fontWeight: 600,

      '&:hover': {
        fontStyle: 'italic',
      },
    },
  },
}));

export default useStyles;
