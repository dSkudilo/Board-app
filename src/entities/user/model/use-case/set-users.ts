import { AppDispatch } from '@/shared/lib';
import { User } from '../domain/types';
import { usersLoadComplete } from '../domain/events';

export const setUsers = (users: User[]) => (dispatch: AppDispatch) => {
  if (!Array.isArray(users)) return;

  dispatch(usersLoadComplete(users));
};
