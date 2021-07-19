import React from 'react';

import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';
import SingleGifLayout from '@app/components/organisms/SingleGifLayout/SingleGifLayout';
import useGifsByIdsEndpoint from '@app/hooks/useGifsByIdsEndpoint/useGifsByIdsEndpoint';

interface Props {
  favouritesEndpointUrl: string;
  randomGifEndpointUrl: string;
}

const FavouritesPage: React.FC<Props> = ({
  favouritesEndpointUrl,
  randomGifEndpointUrl,
}): JSX.Element => {
  const formattedFavouritesEndpointUrl = useGifsByIdsEndpoint(
    favouritesEndpointUrl,
    'favourites'
  );

  return formattedFavouritesEndpointUrl ? (
    <GifsLayout endpointUrl={formattedFavouritesEndpointUrl} />
  ) : (
    <SingleGifLayout endpointUrl={randomGifEndpointUrl} />
  );
};

export default FavouritesPage;
