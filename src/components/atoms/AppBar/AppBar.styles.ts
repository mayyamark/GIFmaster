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
    color: COLORS.white,
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  openDrawerButton: {
    color: COLORS.white,
  },
}));

export default useStyles;
