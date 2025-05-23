import { FileType } from '@/shared/lib';

export type User = {
  id: string;
  name?: string;
  username: string;
  email?: string;
  password?: string;
  avatar: FileType | null;
};
