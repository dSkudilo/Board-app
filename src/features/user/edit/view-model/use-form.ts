'use client';
import { useForm } from 'react-hook-form';
import { User } from '@/entities/user';
import { useEffect } from 'react';

export const useFormFields = (user: User | null) => {
  const { control, reset, handleSubmit } = useForm<User>({
    defaultValues: user || {
      username: '',
      avatar: null,
    },
  });

  const usernameRules = { required: 'Имя пользователя - обязательное поле' };
  const avatarRules = { required: 'Аватар - обязателен к выбору' };

  useEffect(() => {
    reset(
      user || {
        username: '',
        avatar: null,
      }
    );
  }, [user, reset]);
  return {
    control,
    reset,
    handleSubmit,
    usernameRules,
    avatarRules,
  };
};
