import React from 'react';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';
import HomePage from '../src/components/pages/HomePage/HomePage';

interface Props {
  url: string;
}

interface HomeAppProps extends AppProps {
  url: string;
}

export default function Home(props: HomeAppProps): JSX.Element {
  return <HomePage {...props} />;
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      url: `${process.env.GIPHY_QUERY_BASE_URL}/trending?api_key=${process.env.GIPHY_API_KEY}`,
    },
  };
}
