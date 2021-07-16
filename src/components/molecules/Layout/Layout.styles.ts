import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(8),
    },

    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
  },
}));

export default useStyles;
