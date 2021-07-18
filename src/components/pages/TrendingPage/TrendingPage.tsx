import React from 'react';

import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';

interface Props {
  endpointUrl: string;
}

const TrendingPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  return <GifsLayout endpointUrl={endpointUrl} />;
};

export default TrendingPage;
