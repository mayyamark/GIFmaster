import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

import SearchPage from '@app/components/pages/SearchPage/SearchPage';

interface Props {
  baseUrl: string | undefined;
  apiKey: string | undefined;
}

interface FavouritesProps extends AppProps {
  baseUrl: string | undefined;
  apiKey: string | undefined;
}

export default function Search(props: FavouritesProps): JSX.Element {
  const { baseUrl, apiKey, ...restProps } = props;

  return (
    <SearchPage
      {...restProps}
      getSearchEndpointUrl={(keyword) =>
        `${baseUrl}/search?api_key=${apiKey}&q=${keyword}`
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
