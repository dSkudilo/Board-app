import { persistStorage } from '@/shared/lib';
import { User } from './domain/types';
import { UserPayload } from './types';

const USERS_STORAGE_KEY = 'users_storage';

export const usersRepository = {
  getUsers: async () => {
    return await persistStorage.getItemsSafe<User[]>(USERS_STORAGE_KEY, []);
  },
  getUser: async (id: string) => {
    const users = await usersRepository.getUsers();
    if (!users || users.length === 0) return;
    return users.find((user) => user.id === id);
  },
  saveUser: async (value: UserPayload & { id: string }) => {
    const users = await usersRepository.getUsers();
    if (!users) return;

    const userIndex = users.findIndex((user) => user.id === value.id);
    if (userIndex === -1) {
      users.push(value);
    } else {
      users[userIndex] = value;
    }

    await persistStorage.setItemsSafe(USERS_STORAGE_KEY, users);
  },

  removeUser: async (userId: string) => {
    const users = await usersRepository.getUsers();
    if (!users) return;
    await persistStorage.setItemsSafe(
      USERS_STORAGE_KEY,
      users.filter((user) => user.id !== userId)
    );
  },
};
