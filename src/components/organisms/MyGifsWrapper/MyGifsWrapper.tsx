import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';
import SingleGifLayout from '@app/components/organisms/SingleGifLayout/SingleGifLayout';

interface Props {
  gifIds: string;
  getEndpointUrl: (ids: string) => string;
  randomGifEndpointUrl: string;
}

const MyGifsWrapper: React.FC<Props> = ({
  gifIds,
  getEndpointUrl,
  randomGifEndpointUrl,
}): JSX.Element => {
  const [endpoint, setEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (gifIds) {
      setEndpoint(getEndpointUrl(gifIds));
    } else {
      setEndpoint(randomGifEndpointUrl);
    }
  }, [gifIds, getEndpointUrl, randomGifEndpointUrl]);

  if (!endpoint) {
    return <Typography>Loading...</Typography>;
  }

  return endpoint === randomGifEndpointUrl ? (
    <SingleGifLayout endpointUrl={endpoint} />
  ) : (
    <GifsLayout endpointUrl={endpoint} />
  );
};

export default MyGifsWrapper;
