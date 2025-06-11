import { avatarArr } from '@/entities/user';

export const findUserAvatar = (id?: string) => {
  if (!id) return null;
  return avatarArr.find((e) => e.id === id) || null;
};
