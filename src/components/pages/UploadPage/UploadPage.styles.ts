import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    textAlign: 'center',
  },

  container: {
    border: 'none',
    cursor: 'pointer',
    padding: 24,
  },

  withBorder: {
    border: `1px dotted ${COLORS.blackWithOpacity}`,
  },
}));

export default useStyles;
