import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

import FavouritesPage from '@app/components/pages/FavouritesPage/FavouritesPage';

interface Props {
  endpointUrl: string;
}

interface FavouritesAppProps extends AppProps {
  endpointUrl: string;
}

export default function Home(props: FavouritesAppProps): JSX.Element {
  return <FavouritesPage {...props} />;
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      endpointUrl: `${process.env.GIPHY_QUERY_BASE_URL}?ids=*&api_key=${process.env.GIPHY_API_KEY}`,
    },
  };
}
