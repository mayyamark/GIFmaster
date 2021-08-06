import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from '@app/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    overflowY: 'scroll',

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
    padding: theme.spacing(0.8, 2.5),
    margin: theme.spacing(0.8, 0),
    borderRadius: theme.spacing(0.5),

    '&:hover': {
      boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',

      '& > div': {
        borderColor: COLORS.lightGray,
      },
    },
  },

  avatar: {
    marginRight: theme.spacing(1),
    border: `1px solid ${COLORS.white}`,
  },

  user: {
    fontWeight: 500,
    color: COLORS.darkGray,
  },

  username: {
    fontSize: '12px',
    color: COLORS.lightGray,
  },

  gifContainer: {
    width: '300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  gif: {
    width: '100%',
  },

  heartIcon: {
    position: 'absolute',
    fontSize: '80px',
  },

  raiting: {
    cursor: 'help',
  },

  externalLink: {
    color: COLORS.lightGray,
    fontWeight: 700,

    '&:hover': {
      color: COLORS.darkGray,
    },
  },
}));

export default useStyles;
