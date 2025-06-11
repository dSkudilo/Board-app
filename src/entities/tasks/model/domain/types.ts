import { Identifiable } from '@/shared/ui/ui-table/model/types';

export type Task = Identifiable & {
  name: string;
  description?: string;
  userId?: string;
  statusId: string;
};
