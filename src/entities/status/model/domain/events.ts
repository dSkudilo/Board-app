import { createAction } from '@reduxjs/toolkit';
import { Status } from './types';

export const statusesLoadComplete = createAction<Status[]>(
  'event/statuses/load-complete'
);
