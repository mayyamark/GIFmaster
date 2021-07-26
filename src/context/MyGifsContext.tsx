import React, { createContext, useContext } from 'react';

import useLocalStorage from '@app/hooks/useLocalStorage/useLocalStorage';

interface MyGifsContext {
  favourites: string;
  uploads: string;
  changeFavourites: (id: string) => void;
  changeUploads: (id: string) => void;
}

const DEFAULT_CONTEXT: MyGifsContext = {
  favourites: '',
  uploads: '',
  changeFavourites: () => {},
  changeUploads: () => {},
};

const MyGifsContext = createContext(DEFAULT_CONTEXT);

export const MyGifsProvider: React.FC = ({ children }) => {
  const { storedData: favourites, changeStoredData: changeFavourites } =
    useLocalStorage('favourites');
  const { storedData: uploads, changeStoredData: changeUploads } =
    useLocalStorage('uploads');

  return (
    <MyGifsContext.Provider
      value={{
        favourites,
        changeFavourites,
        uploads,
        changeUploads,
      }}
    >
      {children}
    </MyGifsContext.Provider>
  );
};

export const useMyGifs = (): MyGifsContext => useContext(MyGifsContext);
