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
      endpointSubstring={favourites}
      getEndpointUrl={getFavouritesEndpointUrl}
    />
  );
};

export default FavouritesPage;
