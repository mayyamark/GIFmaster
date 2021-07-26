import { useState, useEffect } from 'react';

interface LocalStorageResult {
  storedData: string;
  changeStoredData: (id: string) => void;
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
  };

  return {
    storedData,
    changeStoredData,
  };
};

export default useLocalStorage;
