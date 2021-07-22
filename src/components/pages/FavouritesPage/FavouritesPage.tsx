import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';
import SingleGifLayout from '@app/components/organisms/SingleGifLayout/SingleGifLayout';
import { useFavourites } from '@app/context/FavouritesContext';

interface Props {
  getFavouritesEndpointUrl: (ids: string) => string;
  randomGifEndpointUrl: string;
}

const FavouritesPage: React.FC<Props> = ({
  getFavouritesEndpointUrl,
  randomGifEndpointUrl,
}): JSX.Element => {
  const { favourites } = useFavourites();

  const [endpoint, setEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (favourites) {
      setEndpoint(getFavouritesEndpointUrl(favourites));
    } else {
      setEndpoint(randomGifEndpointUrl);
    }
  }, [favourites, getFavouritesEndpointUrl, randomGifEndpointUrl]);

  if (!endpoint) {
    return <Typography>Loading...</Typography>;
  }

  return endpoint === randomGifEndpointUrl ? (
    <SingleGifLayout endpointUrl={endpoint} />
  ) : (
    <GifsLayout endpointUrl={endpoint} />
  );
};

export default FavouritesPage;
