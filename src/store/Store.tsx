import { createContext, useContext } from 'react';
import { useFavouriteIDs } from 'src/api/favourites';

type StoreType = ReturnType<typeof useFavouriteIDs>;

const StoreContext =
  // @ts-ignore (no initial value so Typescript whines)
  createContext<StoreType>();

interface FavouritesContextProps {
  children: React.ReactNode;
}

function StoreProvider({ children }: FavouritesContextProps) {
  const store = useFavouriteIDs();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}

export default StoreProvider;
