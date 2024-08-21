<<<<<<< HEAD
=======
<<<<<<< HEAD
//in case of hook and return use jsx otherwise js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
=======
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import cartSlice from './cartSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
<<<<<<< HEAD
=======
>>>>>>> redux
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
