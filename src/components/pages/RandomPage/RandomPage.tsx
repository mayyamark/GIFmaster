import React from 'react';

import SingleGifLayout from '@app/components/organisms/SingleGifLayout/SingleGifLayout';

interface Props {
  endpointUrl: string;
}

const RandomPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  return <SingleGifLayout endpointUrl={endpointUrl} />;
};

export default RandomPage;
