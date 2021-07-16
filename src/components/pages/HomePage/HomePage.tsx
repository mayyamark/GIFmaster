import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

import Layout from '@app/components/molecules/Layout/Layout';
import Modal from '@app/components/molecules/Modal/Modal';
import GifPreview from '@app/components/molecules/GifPreview/GifPreview';
import useFetch from '@app/hooks/useFetch/useFetch';
import { GIFObject } from '@app/generic-types';
import useStyles from './HomePage.styles';

interface Props {
  url: string;
}

const HomePage: React.FC<Props> = ({ url }): JSX.Element => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [gifToPreview, setGifToPreview] = useState<GIFObject | null>(null);

  const { loading, error, data } = useFetch(url);

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <Layout>
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
            <GifPreview gif={gifToPreview} />
          </Modal>
        )}

        {loading && <Typography>Loading...</Typography>}
      </Box>
    </Layout>
  );
};

export default HomePage;
