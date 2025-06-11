import { User } from '@/entities/user';
import { Status } from '@/entities/status';

export const fnGetUserById = (arr: User[]) => {
  return (id?: string) =>
    id ? arr.find((user) => user.id === id) || null : null;
};

export const fnGetStatusById = (arr: Status[]) => {
  return (id?: string) => arr.find((status) => status.id === id) || null;
};
