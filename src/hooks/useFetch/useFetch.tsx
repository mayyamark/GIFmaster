import { useState, useEffect, useCallback } from 'react';
import isArray from 'lodash/isArray';
import { GIFObject } from '@app/generic-types';

interface ResponseData {
  error: boolean;
  loading: boolean;
  // hasMoreData: boolean;
  data: GIFObject[] | null;
  triggerFetch: () => void;
  fetchMore: () => void;
}

const useFetch = (endpointUrl: string): ResponseData => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<GIFObject[] | null>(null);
  const [offset, setOffset] = useState(0);
  // const [hasMoreData, setHasMoreData] = useState(false);
  const [fetchFlag, setFetchFlag] = useState(1);

  const triggerFetch = useCallback(() => {
    setFetchFlag(Math.random());
  }, []);

  const fetchMore = useCallback(async () => {
    if (!isArray(data) || !endpointUrl) {
      return;
    }

    try {
      setLoading(true);
      setOffset((prev) => prev + 40);

      const response = await fetch(`${endpointUrl}&offset=${offset}`);
      const json = await response.json();

      if (json.data) {
        setData((prev) => (prev ? [...prev, ...json.data] : null));
        // setHasMoreData(data.length < json.pagination.total_count);
      }
      if (json.meta.status >= 400) {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [data, offset, endpointUrl]);

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
              if (isArray(json.data)) {
                setData(json.data);
                // data &&
                //   setHasMoreData(data.length < json.pagination.total_count);
              } else {
              }
              setData([json.data]);
            }

            if (json.meta.status >= 400) {
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

  return {
    loading,
    error,
    data,
    // hasMoreData,
    triggerFetch,
    fetchMore,
  };
};

export default useFetch;
