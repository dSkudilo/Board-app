'use client';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { uiToast } from '@/shared/ui';
import { User } from './domain/types';
import { usersRepository } from './users-repository';
import { UserPayload } from './types';

export function useUsers(setUsers: (users: User[]) => void) {
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = async () => {
    try {
      const res = await usersRepository.getUsers();
      if (!res) return;
      setUsers(res);
    } catch {
      uiToast.error('Не удалось загрузить список пользователей');
    }
  };

  const createUser = async (data: UserPayload) => {
    try {
      const newUser = { id: nanoid(), ...data };
      await Promise.all([
        await usersRepository.saveUser(newUser),
        await loadUsers(),
      ]);
      uiToast.success('Пользователь создан');
    } catch {
      uiToast.error('Не удалось сохранить пользователя');
    }
  };

  const removeUser = async (userId: string) => {
    try {
      await Promise.all([
        await usersRepository.removeUser(userId),
        await loadUsers(),
      ]);
      uiToast.success('пользователь удалён');
    } catch {
      uiToast.error('Не удалось удалить пользователя');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    await loadUsers();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    createUser,
    isLoading,
    removeUser,
    loadUsers,
  };
}
