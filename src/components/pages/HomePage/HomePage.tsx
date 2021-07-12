import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

import useFetch from '@app/hooks/useFetch/useFetch';
interface Props {
  url: string;
}

const HomePage: React.FC<Props> = ({ url }): JSX.Element => {
  const { loading, error, data } = useFetch(url);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <>
      {data?.map((gif) => (
        <Box key={gif.id}>
          <CardMedia component='img' src={gif.images.preview_gif.url} />
        </Box>
      ))}
    </>
  );
};

export default HomePage;
