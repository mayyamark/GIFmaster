import { useState, useEffect, useCallback } from 'react';
import isArray from 'lodash/isArray';
import { GIFObject } from '@app/generic-types';

interface ResponceData {
  error: boolean;
  loading: boolean;
  data: GIFObject[] | null;
  triggerFetch: () => void;
}

const useFetch = (endpointUrl: string): ResponceData => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<GIFObject[] | null>(null);
  const [fetchFlag, setFetchFlag] = useState(1);

  const triggerFetch = useCallback(() => {
    setFetchFlag(Math.random());
  }, []);

  useEffect(() => {
    let didCancel = false;

    if (fetchFlag) {
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
    }

    return () => {
      didCancel = true;
    };
  }, [endpointUrl, fetchFlag]);

  return { loading, error, data, triggerFetch };
};

export default useFetch;
