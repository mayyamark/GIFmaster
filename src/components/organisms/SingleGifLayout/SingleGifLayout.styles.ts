import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    color: 'black',
    width: '45%',
    padding: theme.spacing(1.25),
    margin: 'auto',

    '&:hover': {
      boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
    },
  },
}));

export default useStyles;
