import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const NoGifsToShow = (): JSX.Element => {
  return (
    <>
      <Box>
        <Typography>Ooh, no!</Typography>
        <Typography>No gifs to show!</Typography>
        <Typography>
          Don&apos;t worry,{' '}
          <Link href='/random-gif'>click here to see a random gif!</Link>
        </Typography>
      </Box>
    </>
  );
};

export default NoGifsToShow;
