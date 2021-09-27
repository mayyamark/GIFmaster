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
      <Typography className={classes.title} align='center' data-testid='title'>
        {gif.title}
      </Typography>
      <Typography data-testid='import-date'>
        {`${moment(gif.import_datetime).format('ll')} (${moment(
          gif.import_datetime,
          'YYYYMMDD'
        ).fromNow()})`}
      </Typography>
      <Box>
        {gif.user && gif.username && (
          <Link
            underline='none'
            href={gif.user.profile_url}
            target='_blank'
            data-testid='user-link'
          >
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
        <Tooltip
          arrow
          title='Double click the gif, to see some magic!'
          placement='right'
        >
          <CardMedia
            data-testid='detailed-gif'
            component='img'
            className={classes.gif}
            onDoubleClick={handleDoubleClick}
            src={gif?.images.preview_gif.url}
            alt={gif?.title}
          />
        </Tooltip>
        <Fade in={showFavouriteIcon} timeout={600}>
          <FavoriteIcon
            className={classes.heartIcon}
            data-testid='favourite-icon'
          />
        </Fade>
        <Fade in={showUnfavouriteIcon} timeout={600}>
          <FavoriteTwoTone
            className={classes.heartIcon}
            data-testid='unfavourite-icon'
          />
        </Fade>
      </Box>
      {gif.rating && (
        <Tooltip
          arrow
          title={explainRaiting(gif.rating).title}
          placement='right'
          data-testid='raiting-explanation'
        >
          <Typography data-testid='raiting' className={classes.raiting}>
            Raiting: {gif.rating}
          </Typography>
        </Tooltip>
      )}

      <Link
        underline='none'
        href={gif.url}
        target='_blank'
        className={classes.externalLink}
        data-testid='giphy-link'
      >
        View in GIPHY
      </Link>
    </Box>
  );
};

export default GifPreview;
