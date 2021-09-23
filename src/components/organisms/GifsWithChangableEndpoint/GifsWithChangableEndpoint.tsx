import React, { useState, useEffect } from 'react';

import NoGifsToShow from '@app/components/molecules/ErrorPreview/ErrorPreview';
import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';
import Loader from '@app/components/atoms/Loader/Loader';

interface Props {
  gifDataTestId: string;
  endpointSubstring: string;
  getEndpointUrl: (ids: string) => string;
}

const GifsWithChangableEndpoint: React.FC<Props> = ({
  gifDataTestId,
  endpointSubstring,
  getEndpointUrl,
}): JSX.Element => {
  const [endpoint, setEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (endpointSubstring) {
      setEndpoint(getEndpointUrl(endpointSubstring));
    } else if (endpointSubstring === '') {
      setEndpoint('');
    }
  }, [endpointSubstring, setEndpoint, getEndpointUrl]);

  if (endpoint === null) {
    return <Loader showLoader={true} />;
  }

  return endpoint === '' ? (
    <NoGifsToShow message='No gifs to show!' />
  ) : (
    <GifsLayout endpointUrl={endpoint} gifDataTestId={gifDataTestId} />
  );
};

export default GifsWithChangableEndpoint;
