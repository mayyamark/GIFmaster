import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

import FavouritesPage from '@app/components/pages/FavouritesPage/FavouritesPage';

interface Props {
  baseUrl: string | undefined;
  apiKey: string | undefined;
}

interface FavouritesProps extends AppProps {
  baseUrl: string | undefined;
  apiKey: string | undefined;
}

export default function Favourites(props: FavouritesProps): JSX.Element {
  const { baseUrl, apiKey, ...restProps } = props;

  return (
    <FavouritesPage
      {...restProps}
      getFavouritesEndpointUrl={(ids) =>
        `${baseUrl}?ids=${ids}&api_key=${apiKey}`
      }
    />
  );
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      baseUrl: process.env.GIPHY_QUERY_BASE_URL,
      apiKey: process.env.GIPHY_API_KEY,
    },
  };
}
