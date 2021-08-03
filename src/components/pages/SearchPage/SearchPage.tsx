import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import GifsWithChangableEndpoint from '@app/components/organisms/GifsWithChangableEndpoint/GifsWithChangableEndpoint';

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
    <GifsWithChangableEndpoint
      endpointSubstring={keyword as string}
      getEndpointUrl={getSearchEndpointUrl}
    />
  );
};

export default SearchPage;
