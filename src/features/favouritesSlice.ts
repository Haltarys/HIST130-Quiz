import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, useAppDispatch, useAppSelector } from 'src/store';
import type { ID } from 'src/api/types';
import {
  retrieveFavouritesFromLocalStorage,
  saveFavouritesToLocalStorage,
} from 'src/api/favourites';

interface FavouritesState {
  favouriteIDs: ID[];
}

const initialState: FavouritesState = {
  favouriteIDs: retrieveFavouritesFromLocalStorage(),
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourites: (state, action: PayloadAction<ID[]>) => {
      state.favouriteIDs = action.payload;
      Promise.resolve(saveFavouritesToLocalStorage(state.favouriteIDs));
    },
    addToFavourites: (state, action: PayloadAction<ID>) => {
      if (!state.favouriteIDs.includes(action.payload)) {
        state.favouriteIDs.push(action.payload);
        Promise.resolve(saveFavouritesToLocalStorage(state.favouriteIDs));
      }
    },
    removeFromFavourites: (state, action: PayloadAction<ID>) => {
      state.favouriteIDs = state.favouriteIDs.filter(
        (id) => id !== action.payload,
      );
      Promise.resolve(saveFavouritesToLocalStorage(state.favouriteIDs));
    },
    clearFavourites: (state) => {
      state.favouriteIDs = [];
      Promise.resolve(saveFavouritesToLocalStorage(state.favouriteIDs));
    },
  },
});

export const { addToFavourites, removeFromFavourites, clearFavourites } =
  favouritesSlice.actions;

export function useFavouriteIDs() {
  return useAppSelector((state: RootState) => state.favourites.favouriteIDs);
}

export function useToggleFavourite() {
  const dispatch = useAppDispatch();

  return (id: ID, isFavourited: boolean) =>
    dispatch(isFavourited ? removeFromFavourites(id) : addToFavourites(id));
}

export default favouritesSlice.reducer;
