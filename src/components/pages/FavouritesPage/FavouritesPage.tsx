import React from 'react';

import MyGifsWrapper from '@app/components/organisms/MyGifsWrapper/MyGifsWrapper';
import { useMyGifs } from '@app/context/MyGifsContext';

interface Props {
  getFavouritesEndpointUrl: (ids: string) => string;
  randomGifEndpointUrl: string;
}

const FavouritesPage: React.FC<Props> = ({
  getFavouritesEndpointUrl,
  randomGifEndpointUrl,
}): JSX.Element => {
  const { favourites } = useMyGifs();

  return (
    <MyGifsWrapper
      gifIds={favourites}
      getEndpointUrl={getFavouritesEndpointUrl}
      randomGifEndpointUrl={randomGifEndpointUrl}
    />
  );
};

export default FavouritesPage;
