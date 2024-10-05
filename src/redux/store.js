import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordSlice';

// Create and export the Redux store
export const store = configureStore({
  reducer: {
    words: wordReducer, // Add the word reducer for managing word state
  },
});
