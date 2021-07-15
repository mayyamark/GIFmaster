import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { GIFObject } from '@app/generic-types';
import { explainRaiting } from '@app/utils/actions';
import { changeFavourites } from '@app/utils/actions';

interface Props {
  gif: GIFObject;
}

const GifPreview: React.FC<Props> = ({ gif }) => {
  return (
    <Box
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Typography>{gif.title}</Typography>
      <Box>
        {gif.user && gif.username && (
          <Link href={gif.user.profile_url} target='_blank'>
            <Avatar alt={gif.username} src={gif.user.avatar_url} />
            <Box>
              <Typography>{gif.user.display_name}</Typography>
              <Typography>{`@${gif.username}`}</Typography>
            </Box>
          </Link>
        )}
      </Box>
      <CardMedia
        component='img'
        style={{ width: '80%' }}
        onDoubleClick={() => changeFavourites(gif.id)}
        src={gif?.images.preview_gif.url}
        alt={gif?.title}
      />
      <Tooltip title={explainRaiting(gif.rating).title}>
        <Typography>Raiting: {gif.rating}</Typography>
      </Tooltip>
      <Typography>{gif.import_datetime}</Typography>
      <Link href={gif.url} target='_blank'>
        View in GIPHY
      </Link>
      {gif.source && (
        <Link href={gif.source_post_url} target='_blank'>
          {`Source: ${gif.source_tld}`}
        </Link>
      )}
    </Box>
  );
};

export default GifPreview;
