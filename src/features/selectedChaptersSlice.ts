import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, useAppDispatch, useAppSelector } from 'src/store';
import type { ID } from 'src/api/types';
interface SelectedChaptersState {
  selectedChapters: { [id: ID]: boolean };
}

const initialState: SelectedChaptersState = {
  selectedChapters: {}, // TODO: retrieve from localStorage,
};

export const selectedChaptersSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    selectChapter: (state, action: PayloadAction<ID>) => {
      state.selectedChapters[action.payload] = true;
    },
    deselectChapter: (state, action: PayloadAction<ID>) => {
      state.selectedChapters[action.payload] = false;
    },
    clearSelectedChapters: (state) => {
      state.selectedChapters = {};
    },
  },
});

export const { selectChapter, deselectChapter, clearSelectedChapters } =
  selectedChaptersSlice.actions;

export function useSelectedChapters() {
  return useAppSelector(
    (state: RootState) => state.selectedChapters.selectedChapters,
  );
}

export function useToggleChapter() {
  const dispatch = useAppDispatch();

  return (id: ID, isSelected: boolean) =>
    dispatch(isSelected ? deselectChapter(id) : selectChapter(id));
}

export default selectedChaptersSlice.reducer;
