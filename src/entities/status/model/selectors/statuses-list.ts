import { createSelector } from '@reduxjs/toolkit';
import { statusesSlice } from '../../statuses-store';
export const selectStatusesList = createSelector(
  statusesSlice.selectors.selectStatuses,
  (statuses) => {
    return statuses;
  }
);
