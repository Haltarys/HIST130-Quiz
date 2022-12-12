import { configureStore } from '@reduxjs/toolkit';
import favouritesSlice from 'src/features/favouritesSlice';
import selectedChaptersSlice from 'src/features/selectedChaptersSlice';

const store = configureStore({
  reducer: {
    favourites: favouritesSlice,
    selectedChapters: selectedChaptersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
