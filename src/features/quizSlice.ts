import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, useAppDispatch, useAppSelector } from 'src/store';
import type { Definition, ID } from 'src/api/types';
import { useEffect } from 'react';
import { useFavouriteIDs } from './favouritesSlice';

interface QuizState {
  selectedSources: { [chapterId: ID]: boolean; favourites: boolean };
  definitionsAlreadyEncountered: ID[];
}

type QuizSourceKey = keyof QuizState['selectedSources'];

const initialState: QuizState = {
  selectedSources: { favourites: true },
  definitionsAlreadyEncountered: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectSource: (state, action: PayloadAction<QuizSourceKey>) => {
      state.selectedSources[action.payload] = true;
    },
    deselectSource: (state, action: PayloadAction<QuizSourceKey>) => {
      state.selectedSources[action.payload] = false;
    },
    resetSources: (state) => {
      state.selectedSources = { favourites: true };
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
  selectSource,
  deselectSource,
  resetSources,
  setDefinitionAsEncountered,
  clearEncounteredDefinitions,
} = quizSlice.actions;

export function useQuiz() {
  return useAppSelector((state: RootState) => ({
    ...state.quiz,
    selectedSources:
      // Proxy used to make `true` the default value if the key is not present
      new Proxy(state.quiz.selectedSources, {
        get(selectedSources, key) {
          return selectedSources[key as QuizSourceKey] !== undefined
            ? selectedSources[key as QuizSourceKey]
            : true;
        },
      }),
  }));
}

export function useToggleSource() {
  const dispatch = useAppDispatch();

  return (id: QuizSourceKey | 'all', isSelected = true) =>
    id === 'all'
      ? dispatch(resetSources())
      : dispatch(isSelected ? deselectSource(id) : selectSource(id));
}

export function useNextRandomDefinition(definitions: Definition[]) {
  const quiz = useQuiz();
  const favouriteIDs = useFavouriteIDs();
  const dispatch = useAppDispatch();

  const availableDefinitionsSubset = definitions.filter(
    (definition) =>
      // definition is valid if it belongs to the selected chapters...
      (quiz.selectedSources[definition.chapterId] ||
        // ...or to the favourites if the favourites source is selected...
        (quiz.selectedSources.favourites &&
          favouriteIDs.includes(definition.id))) &&
      // ...and if it hasn't already been encountered
      !quiz.definitionsAlreadyEncountered.includes(definition.id),
  );

  // wrap in a useEffect hook, otherwise React complains that it affects other components as well
  useEffect(() => {
    // If no definitions are available and there are encountered questions, clear them
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
