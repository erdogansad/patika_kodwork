import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import jobsSlice from './slices/jobsSlice';
import favoritesSlice from './slices/favoritesSlice';

export const setupStore = () => {
  return configureStore(
    {
      reducer: {
        jobs: jobsSlice,
        favorites: favoritesSlice,
      },
    },
    applyMiddleware(thunk),
  );
};
