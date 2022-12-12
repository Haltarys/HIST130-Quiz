import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, useAppDispatch, useAppSelector } from 'src/store';
import type { ID } from 'src/api/types';

interface FavouritesState {
  favouriteIDs: ID[];
}

const initialState: FavouritesState = {
  favouriteIDs: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourites: (state, action: PayloadAction<ID[]>) => {
      state.favouriteIDs = action.payload;
    },
    addToFavourites: (state, action: PayloadAction<ID>) => {
      if (!state.favouriteIDs.includes(action.payload)) {
        state.favouriteIDs.push(action.payload);
      }
    },
    removeFromFavourites: (state, action: PayloadAction<ID>) => {
      state.favouriteIDs = state.favouriteIDs.filter(
        (id) => id !== action.payload,
      );
    },
    clearFavourites: (state) => {
      state.favouriteIDs = [];
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
