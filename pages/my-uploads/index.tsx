import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

import MyUploadsPage from '@app/components/pages/MyUploadsPage/MyUploadsPage';

interface Props {
  baseUrl: string | undefined;
  apiKey: string | undefined;
  randomGifEndpointUrl: string;
}

interface FavouritesProps extends AppProps {
  baseUrl: string | undefined;
  apiKey: string | undefined;
  randomGifEndpointUrl: string;
}

export default function Favourites(props: FavouritesProps): JSX.Element {
  const { baseUrl, apiKey, ...restProps } = props;

  return (
    <MyUploadsPage
      {...restProps}
      getMyUploadsEndpointUrl={(ids) =>
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
      randomGifEndpointUrl: `${process.env.GIPHY_QUERY_BASE_URL}/random?api_key=${process.env.GIPHY_API_KEY}`,
    },
  };
}
