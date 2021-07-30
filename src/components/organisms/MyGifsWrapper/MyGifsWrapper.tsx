import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import NoGifsToShow from '@app/components/molecules/NoGifsToShow/NoGifsToShow';
import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';

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
    return <Typography>Loading...</Typography>;
  }

  return endpoint === '' ? (
    <NoGifsToShow />
  ) : (
    <GifsLayout endpointUrl={endpoint} />
  );
};

export default MyGifsWrapper;
