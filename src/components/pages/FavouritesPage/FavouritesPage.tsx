import React from 'react';
import Typography from '@material-ui/core/Typography';

import HomePage from '@app/components/pages/HomePage/HomePage';
import useGifsByIdsEndpoint from '@app/hooks/useGifsByIdsEndpoint/useGifsByIdsEndpoint';

interface Props {
  endpointUrl: string;
}
const FavouritesPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  const favouritesEndpoint = useGifsByIdsEndpoint(endpointUrl, 'favourites');

  return favouritesEndpoint ? (
    <HomePage endpointUrl={favouritesEndpoint} />
  ) : (
    <Typography>Loading...</Typography>
  );
};

export default FavouritesPage;
