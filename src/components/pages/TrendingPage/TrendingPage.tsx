import React from 'react';

import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';

interface Props {
  endpointUrl: string;
}

const TrendingPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  document.write(window.location.search);
  return (
    <GifsLayout
      isScrollable={true}
      endpointUrl={endpointUrl}
      gifDataTestId='trending-gif'
    />
  );
};

export default TrendingPage;
