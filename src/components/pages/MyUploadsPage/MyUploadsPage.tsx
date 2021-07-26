import React from 'react';

import MyGifsWrapper from '@app/components/organisms/MyGifsWrapper/MyGifsWrapper';
import { useMyGifs } from '@app/context/MyGifsContext';

interface Props {
  getMyUploadsEndpointUrl: (ids: string) => string;
  randomGifEndpointUrl: string;
}

const MyUploadsPage: React.FC<Props> = ({
  getMyUploadsEndpointUrl,
  randomGifEndpointUrl,
}): JSX.Element => {
  const { uploads } = useMyGifs();

  return (
    <MyGifsWrapper
      gifIds={uploads}
      getEndpointUrl={getMyUploadsEndpointUrl}
      randomGifEndpointUrl={randomGifEndpointUrl}
    />
  );
};

export default MyUploadsPage;
