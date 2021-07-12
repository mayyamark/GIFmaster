import { useState, useEffect } from 'react';
import { GIFObject } from '@app/generic-types';

interface ResponceData {
  error: boolean;
  loading: boolean;
  data: GIFObject[] | null;
}

const useFetch = (url: string): ResponceData => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<GIFObject[] | null>(null);

  useEffect(() => {
    let didCancel = false;

    (async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();

        if (!didCancel) {
          if (json.data) {
            setData(json.data);
          }

          if (json.meta.status > 400) {
            setError(true);
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    return function cleanup() {
      didCancel = true;
    };
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
