import { COLORS } from '@app/theme';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },

  circularProgress: {
    color: COLORS.lightGray,
  },
}));

export default useStyles;
