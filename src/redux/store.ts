import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './slices/globalSlice/globalSlice';

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export const dispatchRedux = store.dispatch;

export default store;
