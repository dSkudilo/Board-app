import { createAction } from '@reduxjs/toolkit';
import { User } from './types';

export const usersLoadComplete = createAction<User[]>(
  'event/users/load-complete'
);
