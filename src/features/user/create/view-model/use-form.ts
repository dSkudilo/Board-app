'use client';
import { useForm } from 'react-hook-form';
import { UserPayload } from '@/entities/user';

export const useFormFields = () => {
  const { control, reset, handleSubmit } = useForm<UserPayload>({
    defaultValues: {
      username: '',
      avatar: null,
    },
  });

  const usernameRules = { required: 'Имя пользователя - обязательное поле' };
  const avatarRules = { required: 'Аватар - обязателен к выбору' };

  return {
    control,
    reset,
    handleSubmit,
    usernameRules,
    avatarRules,
  };
};
