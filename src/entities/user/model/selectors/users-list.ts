import { createSelector } from '@reduxjs/toolkit';
import { usersSlice } from '@/entities/user/users-store';
export const selectUsersList = createSelector(
  usersSlice.selectors.selectUsers,
  (statuses) => {
    return statuses || [];
  }
);
