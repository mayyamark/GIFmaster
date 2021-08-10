import React from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './NoGifsToShow.styles';

const NoGifsToShow = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.oohNo}>Ooh, no!</Typography>
        <Typography className={classes.nothingToShow}>
          No gifs to show!
        </Typography>
        <Typography className={classes.linkTypography}>
          Don&apos;t worry,{' '}
          <Link href='/random-gif'>click here to see a random gif!</Link>
        </Typography>
      </Box>
    </>
  );
};

export default NoGifsToShow;
