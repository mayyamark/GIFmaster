import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import GifPreview from '@app/components/molecules/GifPreview/GifPreview';
import useFetch from '@app/hooks/useFetch/useFetch';
import useStyles from './SingleGifLayout.styles';
import Loader from '@app/components/atoms/Loader/Loader';

interface Props {
  endpointUrl: string;
}

const SingleGifLayout: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  const classes = useStyles();
  const { loading, error, data, triggerFetch } = useFetch(endpointUrl);

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <>
      {loading ? (
        <Loader showLoader={loading} />
      ) : data ? (
        <Box className={classes.container}>
          <GifPreview gif={data[0]} />
          <Button
            variant='outlined'
            onClick={triggerFetch}
            className={classes.button}
          >
            Another one
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default SingleGifLayout;
