import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch a word from the backend
export const addWord = createAsyncThunk('words/addWord', async (word) => {
  const response = await axios.post('https://vocabularybackend-upnl.onrender.com/api/words/add', { word });
  return response.data;
});

// Async thunk to search for words from the backend
export const searchWords = createAsyncThunk('words/searchWords', async (query) => {
  const response = await axios.get(`https://vocabularybackend-upnl.onrender.com/api/words/search?query=${query}`);
  return response.data;
});

// Create the word slice
const wordSlice = createSlice({
  name: 'words',
  initialState: {
    list: [], // Store the list of words
    loading: false, // Loading state for asynchronous actions
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWord.fulfilled, (state, action) => {
        state.list.push(action.payload); // Add new word to the list
      })
      .addCase(searchWords.fulfilled, (state, action) => {
        state.list = action.payload; // Update list with search results
      });
  },
});

export default wordSlice.reducer;
