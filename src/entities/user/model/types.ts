import { FileType } from '@/shared/lib';

export type UserPayload = {
  username: string;
  avatar: FileType | null;
};
