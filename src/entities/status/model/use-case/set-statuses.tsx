import { AppDispatch } from '@/shared/lib';
import { Status } from '../domain/types';
import { statusesLoadComplete } from '../domain/events';

export const setStatuses = (statuses: Status[]) => (dispatch: AppDispatch) => {
  if (!Array.isArray(statuses)) return;

  dispatch(statusesLoadComplete(statuses));
};
