import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

import Loader from '@app/components/atoms/Loader/Loader';
import ErrorPreview from '@app/components/molecules/ErrorPreview/ErrorPreview';
import Modal from '@app/components/molecules/Modal/Modal';
import GifPreview from '@app/components/molecules/GifPreview/GifPreview';
import { GIFObject } from '@app/generic-types';
import useFetch from '@app/hooks/useFetch/useFetch';
import useStyles from './GifsLayout.styles';

interface Props {
  endpointUrl: string;
}

const GifsLayout: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [gifToPreview, setGifToPreview] = useState<GIFObject | null>(null);

  const { loading, error, data, fetchMore } = useFetch(endpointUrl);

  if (error) {
    return <ErrorPreview />;
  }

  return (
    <InfiniteScroll
      dataLength={data?.length || 0}
      next={fetchMore}
      hasMore={true}
      loader={<Loader showLoader={loading} />}
      endMessage={<h4>Nothing more to show</h4>}
    >
      <Box className={classes.container}>
        {data?.map((gif) => {
          const src = gif.images.preview_gif.url || gif.images.original.url;

          return (
            <CardMedia
              key={gif.id}
              component='img'
              src={src}
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
            handleClose={() => {
              setOpenModal(false);
              setGifToPreview(null);
            }}
          >
            <GifPreview gif={gifToPreview} />
          </Modal>
        )}
      </Box>
    </InfiniteScroll>
  );
};

export default GifsLayout;
