import { combineReducers } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import selectedMatchReducer from './selectedMatchSlice';
const rootReducer = combineReducers({
  orders: orderReducer,
  selectedMatch:selectedMatchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
