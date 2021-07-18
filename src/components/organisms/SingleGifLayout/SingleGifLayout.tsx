import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Layout from '@app/components/molecules/Layout/Layout';
import GifPreview from '@app/components/molecules/GifPreview/GifPreview';
import useFetch from '@app/hooks/useFetch/useFetch';
import useStyles from './SingleGifLayout.styles';

interface Props {
  endpointUrl: string;
}

const SingleGifLayout: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  const classes = useStyles();
  const { loading, error, data } = useFetch(endpointUrl);

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <Layout>
      {data && (
        <Box className={classes.container}>
          <GifPreview gif={data[0]} />
          {/* TODO: Implement refetching */}
          <Button variant='outlined'>Another one</Button>
        </Box>
      )}
      {loading && <Typography>Loading...</Typography>}
    </Layout>
  );
};

export default SingleGifLayout;
