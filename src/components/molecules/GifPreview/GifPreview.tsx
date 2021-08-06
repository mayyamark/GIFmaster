import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteTwoTone from '@material-ui/icons/FavoriteTwoTone';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { useMyGifs } from '@app/context/MyGifsContext';
import { GIFObject } from '@app/generic-types';
import STORED_DATA_ACTIONS from '@app/constants/stored-data-actions';
import explainRaiting from '@app/utils/explain-raitings';
import useStyles from './GifPreview.styles';

interface Props {
  gif: GIFObject;
}

const GifPreview: React.FC<Props> = ({ gif }) => {
  const classes = useStyles();

  const [showFavouriteIcon, setShowFavouriteIcon] = useState(false);
  const [showUnfavouriteIcon, setShowUnfavouriteIcon] = useState(false);

  const { changeFavourites } = useMyGifs();

  useEffect(() => {
    const timeout = setInterval(() => {
      if (showFavouriteIcon) {
        setShowFavouriteIcon(false);
      }
    }, 600);
    return () => clearInterval(timeout);
  }, [showFavouriteIcon]);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (showUnfavouriteIcon) {
        setShowUnfavouriteIcon(false);
      }
    }, 600);
    return () => clearInterval(timeout);
  }, [showUnfavouriteIcon]);

  const handleDoubleClick = useCallback(() => {
    const favouriteAction = changeFavourites(gif.id);
    favouriteAction === STORED_DATA_ACTIONS.itemAdded
      ? setShowFavouriteIcon(true)
      : setShowUnfavouriteIcon(true);
  }, [changeFavourites, gif.id]);

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
      <Box className={classes.gifContainer}>
        <CardMedia
          component='img'
          className={classes.gif}
          onDoubleClick={handleDoubleClick}
          src={gif?.images.preview_gif.url}
          alt={gif?.title}
        />
        <Fade in={showFavouriteIcon} timeout={600}>
          <FavoriteIcon className={classes.heartIcon} />
        </Fade>
        <Fade in={showUnfavouriteIcon} timeout={600}>
          <FavoriteTwoTone className={classes.heartIcon} />
        </Fade>
      </Box>
      {gif.rating && (
        <Tooltip
          arrow
          title={explainRaiting(gif.rating).title}
          placement='right'
        >
          <Typography className={classes.raiting}>
            Raiting: {gif.rating}
          </Typography>
        </Tooltip>
      )}

      <Link underline='none' href={gif.url} target='_blank'>
        View in GIPHY
      </Link>
    </Box>
  );
};

export default GifPreview;
