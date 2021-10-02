import React from 'react';

import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';

interface Props {
  endpointUrl: string;
}

const TrendingPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  return (
    <GifsLayout
      isScrollable={true}
      endpointUrl={endpointUrl}
      gifDataTestId='trending-gif'
    />
  );
};

export default TrendingPage;
