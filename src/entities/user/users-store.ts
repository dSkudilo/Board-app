import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/entities/user/model/domain/types';
import { usersLoadComplete } from '@/entities/user/model/domain/events';

type UsersState = {
  users: User[];
};

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {
    selectUsers: (state) => {
      return state.users;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(usersLoadComplete, (state, action) => {
      state.users = action?.payload;
    });
  },
});

export const usersReducer = usersSlice.reducer;
