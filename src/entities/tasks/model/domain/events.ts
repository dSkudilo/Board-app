import { createAction } from '@reduxjs/toolkit';
import { Task } from './types';

export const tasksLoadComplete = createAction<Task[]>(
  'event/tasks/load-complete'
);

export const tasksMovedComplete = createAction<{
  statusId: string;
  task: Task;
}>('event/tasks/moved-complete');
