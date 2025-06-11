import { Task } from './domain/types';

export type TaskPayload = {
  name: string;
  description?: string;
  userId?: string;
  statusId: string;
};

export type TaskBoard = Record<string, Task[]>;
