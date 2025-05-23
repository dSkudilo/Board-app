import { useEffect, useState } from 'react';
import { uiToast } from '@/shared/ui';
import { User } from './domain/types';
import { usersRepository } from './users-repository';

export function useUser(id: string, loadUsers: () => Promise<void>) {
  const [user, setUser] = useState<User | null>(null);
  const [isUserUpdate, setIsUserUpdate] = useState(false);

  const loadUser = async (id: string) => {
    try {
      const res = await usersRepository.getUser(id);
      if (res) setUser(res);
    } catch {
      uiToast.error('Не удалось загрузить пользователя');
    }
  };

  const updateUser = async (data: User) => {
    try {
      setIsUserUpdate(true);
      await Promise.all([
        await usersRepository.saveUser(data),
        await loadUsers(),
      ]);
      setIsUserUpdate(false);

      uiToast.success('Пользователь изменён');
    } catch {
      uiToast.error('Не удалось загрузить пользователя');
    }
  };

  useEffect(() => {
    loadUser(id);
  }, []);
  return {
    user,
    isUserUpdate,
    updateUser,
  };
}
