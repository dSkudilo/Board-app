import { Status } from './model/domain/types';
import { createSlice } from '@reduxjs/toolkit';
import { statusesLoadComplete } from './model/domain/events';

type StatusesState = {
  statuses: Status[];
};

const initialState: StatusesState = {
  statuses: [],
};

export const statusesSlice = createSlice({
  name: 'statuses',
  initialState,
  reducers: {},
  selectors: {
    selectStatuses: (state) => {
      return state.statuses;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(statusesLoadComplete, (state, action) => {
      state.statuses = action?.payload;
    });
  },
});

export const statusesReducer = statusesSlice.reducer;
