import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  file: {
    border: 'none',
    height: '100%',
    marginBottom: theme.spacing(2),
  },

  uploadButton: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
