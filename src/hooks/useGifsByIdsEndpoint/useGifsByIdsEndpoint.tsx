import { useState, useEffect } from 'react';

import { getItem } from '@app/utils/storage';

const useGifsByIdsEndpoint = (
  baseUrl: string,
  itemKey: string
): string | null => {
  const [endpoint, setEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (baseUrl) {
      const ids = getItem(itemKey);

      setEndpoint(baseUrl.replace(/[*]/g, `${ids}`));
    }
  }, [baseUrl, itemKey]);

  return endpoint;
};

export default useGifsByIdsEndpoint;
