import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import selectedMatchReducer from './selectedMatchSlice';

const store = configureStore({
  reducer: {
    orders: orderReducer,
    selectedMatch: selectedMatchReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
