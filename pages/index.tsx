import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

import TrendingPage from '@app/components/pages/TrendingPage/TrendingPage';

interface Props {
  endpointUrl: string;
}

interface TrendingProps extends AppProps {
  endpointUrl: string;
}

export default function Trending(props: TrendingProps): JSX.Element {
  return <TrendingPage {...props} />;
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      endpointUrl: `${process.env.GIPHY_QUERY_BASE_URL}/trending?api_key=${process.env.GIPHY_API_KEY}&limit=40`,
    },
  };
}
