import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },

  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },

  userContainer: {
    display: 'flex',
  },

  avatar: {
    marginRight: theme.spacing(1),
  },

  user: {
    fontWeight: 500,
    color: COLORS.black,
  },

  username: {
    fontSize: '12px',
    color: COLORS.lightGray,
  },

  gif: {
    width: '80%',
  },

  raiting: {
    cursor: 'help',
  },
}));

export default useStyles;
