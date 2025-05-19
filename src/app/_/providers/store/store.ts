import { configureStore } from '@reduxjs/toolkit';
import { slicesRegistry } from '@/shared/lib';

export const store = configureStore({
  reducer: slicesRegistry,
});
