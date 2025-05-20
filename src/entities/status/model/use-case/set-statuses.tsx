import { AppDispatch } from '@/shared/lib';
import { Status } from '@/entities/status/model/domain/types';
import { statusesLoadComplete } from '@/entities/status/model/domain/events';

export const setStatuses = (statuses: Status[]) => (dispatch: AppDispatch) => {
  if (statuses.length === 0) return;

  dispatch(statusesLoadComplete(statuses));
};
