import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import favouritesSlice from 'src/features/favouritesSlice';
import feedbackSlice from 'src/features/feedbackSlice';
import quizSlice from 'src/features/quizSlice';
import { loadPersistedState, persistState } from './persist';

const store = configureStore({
  reducer: {
    favourites: favouritesSlice,
    feedback: feedbackSlice,
    quiz: quizSlice,
  },
  preloadedState: loadPersistedState(),
});

store.subscribe(
  throttle(() => {
    persistState(store.getState());
  }, 2000),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
