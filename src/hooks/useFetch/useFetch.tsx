import { useState, useEffect } from 'react';
import isArray from 'lodash/isArray';
import { GIFObject } from '@app/generic-types';

interface ResponceData {
  error: boolean;
  loading: boolean;
  data: GIFObject[] | null;
}

const useFetch = (endpointUrl: string): ResponceData => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<GIFObject[] | null>(null);

  useEffect(() => {
    let didCancel = false;

    (async () => {
      try {
        setLoading(true);
        const response = await fetch(endpointUrl);
        const json = await response.json();

        if (!didCancel) {
          if (json.data) {
            isArray(json.data) ? setData(json.data) : setData([json.data]);
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
  }, [endpointUrl]);

  return { loading, error, data };
};

export default useFetch;
