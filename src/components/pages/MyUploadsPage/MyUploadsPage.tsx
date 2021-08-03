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
      endpointSubstring={uploads}
      getEndpointUrl={getMyUploadsEndpointUrl}
    />
  );
};

export default MyUploadsPage;
