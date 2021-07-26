import React from 'react';

import UploadPage from '@app/components/pages/UploadPage/UploadPage';
import { GetStaticPropsResult } from 'next';
import { AppProps } from 'next/app';

interface Props {
  endpointUrl: string;
}

interface UploadProps extends AppProps {
  endpointUrl: string;
}

export default function Upload(props: UploadProps): JSX.Element {
  return <UploadPage {...props} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      endpointUrl: `${process.env.GIPHY_UPLOAD_BASE_URL}?api_key=${process.env.GIPHY_API_KEY}`,
    },
  };
}
