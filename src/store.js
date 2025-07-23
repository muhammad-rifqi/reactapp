// src/app/store.js
import { configureStore , combineReducers } from '@reduxjs/toolkit';
import userFormReducer from './slice/formSlice';
import authReducer from './slice/userSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // localStorage

const rootReducer = combineReducers({
  userForm: userFormReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'userForm'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store =configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
