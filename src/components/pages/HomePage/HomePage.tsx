import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

import useFetch from '@app/hooks/useFetch/useFetch';
import useStyles from './HomePage.styles';
interface Props {
  url: string;
}

const HomePage: React.FC<Props> = ({ url }): JSX.Element => {
  const classes = useStyles();

  const { loading, error, data } = useFetch(url);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <Box className={classes.root}>
      {data?.map((gif) => {
        return (
          <CardMedia
            key={gif.id}
            component='img'
            src={gif.images.preview_gif.url}
            alt={gif.title}
            className={classes.gif}
          />
        );
      })}
    </Box>
  );
};

export default HomePage;
