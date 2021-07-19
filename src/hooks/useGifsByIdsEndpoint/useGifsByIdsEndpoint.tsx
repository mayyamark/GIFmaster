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

      if (ids) {
        setEndpoint(baseUrl.replace(/[*]/g, `${ids}`));
      } else {
        setEndpoint(null);
      }
    }
  }, [baseUrl, itemKey]);

  return endpoint;
};

export default useGifsByIdsEndpoint;
