import { createSelector } from '@reduxjs/toolkit';
import { tasksSlice } from '../../tasks-store';
import { TaskBoard } from '../type';
export const selectTasksBoard = createSelector(
  tasksSlice.selectors.selectTasks,
  (tasks) => {
    const tasksBoard: TaskBoard = tasks.reduce((acc: TaskBoard, e) => {
      if (!Array.isArray(acc[e.statusId])) acc[e.statusId] = [];
      acc[e.statusId].push(e);
      return acc;
    }, {});
    return tasksBoard;
  }
);
