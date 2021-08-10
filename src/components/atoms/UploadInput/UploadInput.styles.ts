import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 24,
  },

  additionalText: {
    color: COLORS.lightGray,
  },
}));

export default useStyles;
