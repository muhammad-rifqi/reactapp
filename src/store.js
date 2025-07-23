// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from './slice/userSlice';

export const store = configureStore({
  reducer: {
    userForm: userFormReducer,
  },
});
