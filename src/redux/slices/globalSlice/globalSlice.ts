import { createSlice } from '@reduxjs/toolkit';

const selectedLanguage = localStorage.getItem('language');

const initialState = {
language: selectedLanguage,
};

const globalSlice = createSlice({
name: 'global-slice',
initialState,
reducers: {
setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
