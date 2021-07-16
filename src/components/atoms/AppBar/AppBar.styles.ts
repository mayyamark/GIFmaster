import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flex',
    backgroundColor: COLORS.black,
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  leftItems: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
