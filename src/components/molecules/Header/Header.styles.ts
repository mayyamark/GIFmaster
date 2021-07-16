import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },

  drawerPaper: {
    width: 240,
    backgroundColor: COLORS.blackWithOpacity,
    color: COLORS.white,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  icon: {
    color: COLORS.white,
  },
}));

export default useStyles;
