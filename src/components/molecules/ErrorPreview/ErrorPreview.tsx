import React from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './ErrorPreview.styles';

interface Props {
  message?: string;
}

const NoGifsToShow: React.FC<Props> = ({
  message = 'We encountered an error!',
}): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.oohNo}>Ooh, no!</Typography>
        <Typography className={classes.message}>{message}</Typography>
        <Typography className={classes.linkTypography}>
          Don&apos;t worry,{' '}
          <Link href='/random-gif'>click here to see a random gif!</Link>
        </Typography>
      </Box>
    </>
  );
};

export default NoGifsToShow;
