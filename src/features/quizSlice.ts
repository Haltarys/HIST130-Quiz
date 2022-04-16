import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, useAppDispatch, useAppSelector } from 'src/store';
import type { ID } from 'src/api/types';

interface QuizState {
  selectedChapters: { [id: ID]: boolean };
}

const initialState: QuizState = {
  selectedChapters: {},
};

export const quizSlice = createSlice({
  name: 'quiz',
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
  quizSlice.actions;

export function useQuiz() {
  return useAppSelector((state: RootState) => state.quiz);
}

export function useToggleChapter() {
  const dispatch = useAppDispatch();

  return (id: ID, isSelected: boolean) =>
    dispatch(isSelected ? deselectChapter(id) : selectChapter(id));
}

export default quizSlice.reducer;
