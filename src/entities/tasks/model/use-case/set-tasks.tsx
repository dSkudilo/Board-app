import { AppDispatch } from '@/shared/lib';
import { tasksLoadComplete } from '../domain/events';
import { Task } from '../domain/types';

export const setTasks = (tasks: Task[]) => (dispatch: AppDispatch) => {
  if (!Array.isArray(tasks)) return;

  dispatch(tasksLoadComplete(tasks));
};
