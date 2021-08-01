import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './Loader.styles';

interface Props {
  showLoader: boolean;
}

const Loader: React.FC<Props> = ({ showLoader }): JSX.Element | null => {
  const classes = useStyles();

  return showLoader ? (
    <Box className={classes.container}>
      <CircularProgress
        size={50}
        disableShrink
        thickness={4}
        className={classes.circularProgress}
      />
    </Box>
  ) : null;
};

export default Loader;
