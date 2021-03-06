import React, { useState, useMemo } from 'react';
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
  isScrollable: boolean;
  endpointUrl: string;
  gifDataTestId: string;
}

const GifsLayout: React.FC<Props> = ({
  isScrollable,
  endpointUrl,
  gifDataTestId,
}): JSX.Element => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [gifToPreview, setGifToPreview] = useState<GIFObject | null>(null);

  const { loading, error, data, fetchMore } = useFetch(endpointUrl);

  const commonContainer = useMemo(() => {
    return (
      <Box className={classes.container}>
        {data?.map((gif) => {
          const src = gif.images.preview_gif.url || gif.images.original.url;

          return (
            <CardMedia
              key={gif.id}
              data-testid={gifDataTestId}
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
    );
  }, [
    data,
    gifDataTestId,
    gifToPreview,
    openModal,
    classes.container,
    classes.gif,
    classes.modalContent,
  ]);

  if (error) {
    return <ErrorPreview />;
  }

  return (
    <>
      {isScrollable ? (
        <InfiniteScroll
          dataLength={data?.length || 0}
          next={fetchMore}
          hasMore={true}
          loader={<Loader showLoader={loading} />}
          endMessage={<h4>Nothing more to show</h4>}
        >
          {commonContainer}
        </InfiniteScroll>
      ) : (
        commonContainer
      )}
    </>
  );
};

export default GifsLayout;
