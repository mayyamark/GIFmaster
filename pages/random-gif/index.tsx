import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

import RandomPage from '@app/components/pages/RandomPage/RandomPage';

interface Props {
  endpointUrl: string;
}

interface RandomProps extends AppProps {
  endpointUrl: string;
}

export default function Random(props: RandomProps): JSX.Element {
  return <RandomPage {...props} />;
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      endpointUrl: `${process.env.GIPHY_QUERY_BASE_URL}/random?api_key=${process.env.GIPHY_API_KEY}`,
    },
  };
}
