'use client';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Status } from '@/entities/status';

export const useFormFields = (status: Status | null) => {
  const { control, reset, handleSubmit } = useForm<Status>({
    defaultValues: status || {
      name: '',
      color: null,
    },
  });

  const nameRules = { required: 'Имя пользователя - обязательное поле' };
  const colorRules = { required: 'Аватар - обязателен к выбору' };

  useEffect(() => {
    reset(
      status || {
        name: '',
        color: null,
      }
    );
  }, [status, reset]);
  return {
    control,
    reset,
    handleSubmit,
    nameRules,
    colorRules,
  };
};
