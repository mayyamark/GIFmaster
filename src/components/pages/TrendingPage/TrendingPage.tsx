import React from 'react';

import TrendingLayout from '@app/components/organisms/GifsLayout/GifsLayout';

interface Props {
  endpointUrl: string;
}

const TrendingPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  return <TrendingLayout endpointUrl={endpointUrl} />;
};

export default TrendingPage;
