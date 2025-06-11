import { configureStore } from '@reduxjs/toolkit';
import { statusesReducer } from '@/entities/status';
import { usersReducer } from '@/entities/user';
import { tasksReducer } from '@/entities/tasks';

export const store = configureStore({
  reducer: {
    statuses: statusesReducer,
    users: usersReducer,
    tasks: tasksReducer,
  },
});
