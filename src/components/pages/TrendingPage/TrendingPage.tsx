import React, { useEffect } from 'react';

import GifsLayout from '@app/components/organisms/GifsLayout/GifsLayout';

interface Props {
  endpointUrl: string;
}

const TrendingPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  document.write(window.location.search);
  useEffect(() => {
    fetch(' https://developer.mozilla.org/')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <GifsLayout
      isScrollable={true}
      endpointUrl={endpointUrl}
      gifDataTestId='trending-gif'
    />
  );
};

export default TrendingPage;
