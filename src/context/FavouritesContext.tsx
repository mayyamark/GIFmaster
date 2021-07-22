import React, { createContext, useContext } from 'react';

import useLocalStorage from '@app/hooks/useLocalStorage/useLocalStorage';

interface FavouritesContext {
  favourites: string | null;
  changeFavourites: (id: string) => void;
}

const DEFAULT_CONTEXT: FavouritesContext = {
  favourites: null,
  changeFavourites: () => {},
};

const FavouritesContext = createContext(DEFAULT_CONTEXT);

export const FavouritesProvider: React.FC = ({ children }) => {
  const { storedData, changeStoredData } = useLocalStorage('favourites');

  return (
    <FavouritesContext.Provider
      value={{
        favourites: storedData,
        changeFavourites: changeStoredData,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = (): FavouritesContext =>
  useContext(FavouritesContext);
