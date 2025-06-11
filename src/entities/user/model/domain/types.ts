import { FileType } from '@/shared/lib';
import { Identifiable } from '@/shared/ui/ui-table/model/types';

export type User = Identifiable & {
  id: string;
  name: string;
  username: string;
  email?: string;
  password?: string;
  avatar: FileType | null;
};
