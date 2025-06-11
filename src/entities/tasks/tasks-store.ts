import { createSlice } from '@reduxjs/toolkit';
import { Task } from './model/domain/types';
import { tasksLoadComplete, tasksMovedComplete } from './model/domain/events';

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  selectors: {
    selectTasks: (state) => {
      return state.tasks;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tasksLoadComplete, (state, action) => {
      state.tasks = action?.payload;
    });
    builder.addCase(tasksMovedComplete, (state, action) => {
      state.tasks = state.tasks.map((task) => {
        console.log(state.tasks[0].statusId, action.payload, 'heheheheheeh');
        return task.id === action.payload.task.id
          ? { ...task, statusId: action.payload.statusId }
          : task;
      });
      console.log(state.tasks[0].statusId, action.payload, '123123');
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
