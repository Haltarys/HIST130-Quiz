import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import favouritesSlice from 'src/features/favouritesSlice';
import selectedChaptersSlice from 'src/features/selectedChaptersSlice';
import { loadPersistedState, persistState } from './persist';

const store = configureStore({
  reducer: {
    favourites: favouritesSlice,
    selectedChapters: selectedChaptersSlice,
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
