import { AppDispatch } from '@/shared/lib';
import { Status } from '@/entities/status/model/domain/types';
import { statusesLoadComplete } from '@/entities/status/model/domain/events';

export const setStatuses = (statuses: Status[]) => (dispatch: AppDispatch) => {
  if (!Array.isArray(statuses)) return;

  dispatch(statusesLoadComplete(statuses));
};
