import React from 'react';

import MyGifsWrapper from '@app/components/organisms/MyGifsWrapper/MyGifsWrapper';
import { useMyGifs } from '@app/context/MyGifsContext';

interface Props {
  getFavouritesEndpointUrl: (ids: string) => string;
}

const FavouritesPage: React.FC<Props> = ({
  getFavouritesEndpointUrl,
}): JSX.Element => {
  const { favourites } = useMyGifs();

  return (
    <MyGifsWrapper
      gifIds={favourites}
      getEndpointUrl={getFavouritesEndpointUrl}
    />
  );
};

export default FavouritesPage;
