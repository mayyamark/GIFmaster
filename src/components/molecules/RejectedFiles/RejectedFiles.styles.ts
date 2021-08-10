import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles((theme: Theme) => ({
  errorTitle: {
    fontSize: 24,
  },

  errorFileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    padding: theme.spacing(3, 0),
    border: `1px dotted ${COLORS.black}`,
    cursor: 'pointer',
  },

  fileName: {
    marginBottom: theme.spacing(1),
  },

  file: {
    border: 'none',
    width: '30%',
  },
}));

export default useStyles;
