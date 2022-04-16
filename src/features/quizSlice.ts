import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, useAppDispatch, useAppSelector } from 'src/store';
import type { Definition, ID } from 'src/api/types';
import { useEffect } from 'react';

interface QuizState {
  selectedChapters: { [id: ID]: boolean };
  definitionsAlreadyEncountered: ID[];
}

const initialState: QuizState = {
  selectedChapters: {},
  definitionsAlreadyEncountered: [],
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
    setDefinitionAsEncountered: (state, action: PayloadAction<ID>) => {
      if (!state.definitionsAlreadyEncountered.includes(action.payload)) {
        state.definitionsAlreadyEncountered.push(action.payload);
      }
    },
    clearEncounteredDefinitions: (state) => {
      state.definitionsAlreadyEncountered = [];
    },
  },
});

export const {
  selectChapter,
  deselectChapter,
  clearSelectedChapters,
  setDefinitionAsEncountered,
  clearEncounteredDefinitions,
} = quizSlice.actions;

export function useQuiz() {
  return useAppSelector((state: RootState) => state.quiz);
}

export function useToggleChapter() {
  const dispatch = useAppDispatch();

  return (id: ID, isSelected: boolean) =>
    dispatch(isSelected ? deselectChapter(id) : selectChapter(id));
}

export function useNextRandomDefinition(definitions: Definition[]) {
  const quiz = useQuiz();
  const dispatch = useAppDispatch();

  const availableDefinitionsSubset = definitions.filter(
    (definition) =>
      // definition is valid if it belongs to the selected chapters...
      quiz.selectedChapters[definition.chapterId] &&
      // ...and if it hasn't already been encountered
      !quiz.definitionsAlreadyEncountered.includes(definition.id),
  );

  console.log(availableDefinitionsSubset);

  // wrap in a useEffect hook, otherwise React complains that it affects other components as well
  useEffect(() => {
    // If no questions are available and there are encountered questions, clear them
    if (
      availableDefinitionsSubset.length === 0 &&
      quiz.definitionsAlreadyEncountered.length > 0
    ) {
      dispatch(clearEncounteredDefinitions());
    }
  }, [quiz.definitionsAlreadyEncountered]);

  return (): Definition | undefined => {
    const i = Math.floor(Math.random() * availableDefinitionsSubset.length);
    const definition = availableDefinitionsSubset[i] as Definition | undefined;

    if (definition) dispatch(setDefinitionAsEncountered(definition.id));
    return availableDefinitionsSubset[i];
  };
}

export default quizSlice.reducer;
