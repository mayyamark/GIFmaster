import React from 'react';
import Typography from '@material-ui/core/Typography';

import TrendingLayout from '@app/components/organisms/GifsLayout/GifsLayout';
import useGifsByIdsEndpoint from '@app/hooks/useGifsByIdsEndpoint/useGifsByIdsEndpoint';

interface Props {
  endpointUrl: string;
}

const FavouritesPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  const favouritesEndpoint = useGifsByIdsEndpoint(endpointUrl, 'favourites');

  return favouritesEndpoint ? (
    <TrendingLayout endpointUrl={favouritesEndpoint} />
  ) : (
    <Typography>Loading...</Typography>
  );
};

export default FavouritesPage;
