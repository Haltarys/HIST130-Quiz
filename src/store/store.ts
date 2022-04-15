import { configureStore } from '@reduxjs/toolkit';
import favouritesSlice from 'src/features/favouritesSlice';
// ...
const store = configureStore({
  reducer: {
    favourites: favouritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
