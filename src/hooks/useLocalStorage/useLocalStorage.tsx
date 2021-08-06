import { useState, useEffect } from 'react';

import STORED_DATA_ACTIONS from '@app/constants/stored-data-actions';

interface LocalStorageResult {
  storedData: string;
  changeStoredData: (id: string) => string;
}

const useLocalStorage = (key: string): LocalStorageResult => {
  const [storedData, setStoredData] = useState('');

  useEffect(() => {
    const stateFromStorage = window.localStorage.getItem(key);

    if (stateFromStorage) {
      setStoredData(stateFromStorage);
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, storedData);
  }, [key, storedData]);

  const changeStoredData = (id: string) => {
    setStoredData((prev) => {
      if (!prev) {
        return id;
      }

      const idsArray = prev.split(',');

      return idsArray.find((i) => i === id)
        ? idsArray.filter((i) => i !== id).join(',')
        : [...idsArray, id].join(',');
    });

    return storedData.split(',').find((i) => i === id)
      ? STORED_DATA_ACTIONS.itemRemoved
      : STORED_DATA_ACTIONS.itemAdded;
  };

  return {
    storedData,
    changeStoredData,
  };
};

export default useLocalStorage;
