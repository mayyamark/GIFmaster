import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

import FavouritesPage from '@app/components/pages/FavouritesPage/FavouritesPage';

interface Props {
  favouritesEndpointUrl: string;
  randomGifEndpointUrl: string;
}

interface FavouritesProps extends AppProps {
  favouritesEndpointUrl: string;
  randomGifEndpointUrl: string;
}

export default function Favourites(props: FavouritesProps): JSX.Element {
  return <FavouritesPage {...props} />;
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      favouritesEndpointUrl: `${process.env.GIPHY_QUERY_BASE_URL}?ids=*&api_key=${process.env.GIPHY_API_KEY}`,
      randomGifEndpointUrl: `${process.env.GIPHY_QUERY_BASE_URL}/random?api_key=${process.env.GIPHY_API_KEY}`,
    },
  };
}
