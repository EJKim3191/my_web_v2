import { configureStore, combineReducers } from '@reduxjs/toolkit';
import MainReducer from '../feature/MainReducer';

const rootReducer = combineReducers({
  main: MainReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;