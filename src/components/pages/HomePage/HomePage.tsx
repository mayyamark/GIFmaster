import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

import useFetch from '@app/hooks/useFetch/useFetch';
import useStyles from './HomePage.styles';
import { GIFObject } from '@app/generic-types';
import Modal from '@app/components/molecules/Modal/Modal';
interface Props {
  url: string;
}

const HomePage: React.FC<Props> = ({ url }): JSX.Element => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [gifToPreview, setGifToPreview] = useState<GIFObject | null>(null);
  const { loading, error, data } = useFetch(url);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <>
      <Box className={classes.root}>
        {data?.map((gif) => {
          return (
            <CardMedia
              key={gif.id}
              component='img'
              src={gif.images.preview_gif.url}
              alt={gif.title}
              onClick={() => {
                setOpenModal(true);
                setGifToPreview(gif);
              }}
              className={classes.gif}
            />
          );
        })}

        {gifToPreview && (
          <Modal
            extendStyles={{ content: classes.modalContent }}
            open={openModal}
            onClose={() => {
              setOpenModal(false);
              setGifToPreview(null);
            }}
          >
            <Box
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <Typography>{gifToPreview.title}</Typography>
              <Box>
                {gifToPreview.user && gifToPreview.username && (
                  <Link href={gifToPreview.user.profile_url} target='_blank'>
                    <Avatar
                      alt={gifToPreview.username}
                      src={gifToPreview.user.avatar_url}
                    />
                    <Box>
                      <Typography>{gifToPreview.user.display_name}</Typography>
                      <Typography>{`@${gifToPreview.username}`}</Typography>
                    </Box>
                  </Link>
                )}
              </Box>
              <CardMedia
                component='img'
                style={{ width: '80%' }}
                onDoubleClick={() => {
                  const favourites = localStorage.getItem('favourites');

                  if (!favourites) {
                    localStorage.setItem('favourites', gifToPreview.id);
                  } else {
                    if (favourites.includes(gifToPreview.id)) {
                      const newFavourites = favourites
                        .split(',')
                        .filter((id) => id !== gifToPreview.id)
                        .join(',');

                      localStorage.setItem('favourites', newFavourites);
                    } else {
                      const newFavourites = favourites.concat(
                        `,${gifToPreview.id}`
                      );

                      localStorage.setItem('favourites', newFavourites);
                    }
                  }
                }}
                src={gifToPreview?.images.preview_gif.url}
                alt={gifToPreview?.title}
              />
              {/* TODO: Implement function that explains raitings: https://developers.giphy.com/docs/optional-settings/#rating */}
              <Typography>{gifToPreview.rating}</Typography>
              <Typography>{gifToPreview.import_datetime}</Typography>
              <Link href={gifToPreview.url} target='_blank'>
                View in GIPHY
              </Link>
              {gifToPreview.source && (
                <Link href={gifToPreview.source_post_url} target='_blank'>
                  {`Source: ${gifToPreview.source_tld}`}
                </Link>
              )}
            </Box>
          </Modal>
        )}
      </Box>
    </>
  );
};

export default HomePage;
