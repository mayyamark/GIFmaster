import React, { useState, useEffect } from 'react';

import NoGifsToShow from '@app/components/molecules/NoGifsToShow/NoGifsToShow';
import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';
import Loader from '@app/components/atoms/Loader/Loader';

interface Props {
  gifIds: string;
  getEndpointUrl: (ids: string) => string;
}

const MyGifsWrapper: React.FC<Props> = ({
  gifIds,
  getEndpointUrl,
}): JSX.Element => {
  const [endpoint, setEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (gifIds) {
      setEndpoint(getEndpointUrl(gifIds));
    } else if (gifIds === '') {
      setEndpoint('');
    }
  }, [gifIds, setEndpoint, getEndpointUrl]);

  if (endpoint === null) {
    return <Loader showLoader={true} />;
  }

  return endpoint === '' ? (
    <NoGifsToShow />
  ) : (
    <GifsLayout endpointUrl={endpoint} />
  );
};

export default MyGifsWrapper;
