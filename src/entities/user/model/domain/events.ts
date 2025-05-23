import { createAction } from '@reduxjs/toolkit';
import { User } from '@/entities/user';

export const usersLoadComplete = createAction<User[]>(
  'event/users/load-complete'
);
