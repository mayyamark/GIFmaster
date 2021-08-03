import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import MyGifsWrapper from '@app/components/organisms/MyGifsWrapper/MyGifsWrapper';

interface Props {
  getSearchEndpointUrl: (keyword: string) => string;
}

const SearchPage: React.FC<Props> = ({ getSearchEndpointUrl }): JSX.Element => {
  const router = useRouter();

  const keyword = useMemo(
    () => (router.query.keyword ? router.query.keyword : ''),
    [router]
  );

  return (
    <MyGifsWrapper
      gifIds={keyword as string}
      getEndpointUrl={getSearchEndpointUrl}
    />
  );
};

export default SearchPage;
