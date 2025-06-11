import { createSelector } from '@reduxjs/toolkit';
import { usersSlice } from '../../users-store';
export const selectUsersList = createSelector(
  usersSlice.selectors.selectUsers,
  (statuses) => {
    return statuses || [];
  }
);
