import React from 'react';

import GifsWithChangableEndpoint from '@app/components/organisms/GifsWithChangableEndpoint/GifsWithChangableEndpoint';
import { useMyGifs } from '@app/context/MyGifsContext';

interface Props {
  getFavouritesEndpointUrl: (ids: string) => string;
}

const FavouritesPage: React.FC<Props> = ({
  getFavouritesEndpointUrl,
}): JSX.Element => {
  const { favourites } = useMyGifs();

  return (
    <GifsWithChangableEndpoint
      isScrollable={false}
      endpointSubstring={favourites}
      getEndpointUrl={getFavouritesEndpointUrl}
      gifDataTestId='favourited-gif'
    />
  );
};

export default FavouritesPage;
