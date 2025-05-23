'use client';
import { useForm } from 'react-hook-form';
import { Status } from '@/entities/status';

export const useFormFields = () => {
  const { control, reset, handleSubmit } = useForm<Status>({
    defaultValues: {
      name: '',
      color: null,
    },
  });

  const nameRules = { required: 'Цвет - обязательное поле' };
  const colorRules = { required: 'Название статуса - обязательное поле' };

  return {
    control,
    reset,
    handleSubmit,
    nameRules,
    colorRules,
  };
};
