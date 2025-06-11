import { AppDispatch } from '@/shared/lib';
import { tasksMovedComplete } from '../domain/events';
import { Task } from '@/entities/tasks';

export const setDraggingTask =
  (statusId: string, task: Task) => (dispatch: AppDispatch) => {
    if (!statusId || !task.id) return;
    dispatch(tasksMovedComplete({ statusId, task }));
  };
