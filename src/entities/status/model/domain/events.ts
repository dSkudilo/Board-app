import { createAction } from '@reduxjs/toolkit';
import { Status } from '@/entities/status/model/domain/types';

export const statusesLoadComplete = createAction<Status[]>(
  'event/statuses/load-complete'
);
