import React from 'react';

import GifsWithChangableEndpoint from '@app/components/organisms/GifsWithChangableEndpoint/GifsWithChangableEndpoint';
import { useMyGifs } from '@app/context/MyGifsContext';

interface Props {
  getMyUploadsEndpointUrl: (ids: string) => string;
}

const MyUploadsPage: React.FC<Props> = ({
  getMyUploadsEndpointUrl,
}): JSX.Element => {
  const { uploads } = useMyGifs();

  return (
    <GifsWithChangableEndpoint
      isScrollable={false}
      endpointSubstring={uploads}
      getEndpointUrl={getMyUploadsEndpointUrl}
      gifDataTestId='uploaded-gif'
    />
  );
};

export default MyUploadsPage;
