import React from 'react';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { useFavourites } from '@app/context/FavouritesContext';
import { GIFObject } from '@app/generic-types';
import { explainRaiting } from '@app/utils/actions';
import useStyles from './GifPreview.styles';

interface Props {
  gif: GIFObject;
}

const GifPreview: React.FC<Props> = ({ gif }) => {
  const classes = useStyles();
  const { changeFavourites } = useFavourites();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} align='center'>
        {gif.title}
      </Typography>
      <Typography>
        {`${moment(gif.import_datetime).format('ll')} (${moment(
          gif.import_datetime,
          'YYYYMMDD'
        ).fromNow()})`}
      </Typography>
      <Box>
        {gif.user && gif.username && (
          <Link underline='none' href={gif.user.profile_url} target='_blank'>
            <Tooltip arrow title='View profile' placement='right'>
              <Box className={classes.userContainer}>
                <Avatar
                  className={classes.avatar}
                  alt={gif.username}
                  src={gif.user.avatar_url}
                />
                <Box>
                  <Typography className={classes.user}>
                    {gif.user.display_name}
                  </Typography>
                  <Typography
                    className={classes.username}
                  >{`@${gif.username}`}</Typography>
                </Box>
              </Box>
            </Tooltip>
          </Link>
        )}
      </Box>
      <CardMedia
        component='img'
        className={classes.gif}
        onDoubleClick={() => changeFavourites(gif.id)}
        src={gif?.images.preview_gif.url}
        alt={gif?.title}
      />
      <Tooltip arrow title={explainRaiting(gif.rating).title} placement='right'>
        <Typography className={classes.raiting}>
          Raiting: {gif.rating}
        </Typography>
      </Tooltip>

      <Link underline='none' href={gif.url} target='_blank'>
        View in GIPHY
      </Link>
    </Box>
  );
};

export default GifPreview;
