import { configureStore } from '@reduxjs/toolkit';
import { statusesReducer } from '@/entities/status';

export const store = configureStore({
  reducer: {
    statuses: statusesReducer,
  },
});
