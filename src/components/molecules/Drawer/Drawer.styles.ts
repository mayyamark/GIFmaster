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
    justifyContent: 'space-between',
    backgroundColor: COLORS.black,
  },

  menuText: {
    marginLeft: theme.spacing(1),
    fontWeight: 'bold',
  },

  divider: {
    backgroundColor: COLORS.white,
  },

  icon: {
    color: COLORS.white,
  },

  linksContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    flex: 1,
  },

  randomGifLink: {
    marginTop: 'auto',
  },
}));

export default useStyles;
