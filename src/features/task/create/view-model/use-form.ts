'use client';
import { useForm } from 'react-hook-form';
import { Task } from '@/entities/tasks';

export const useFormFields = (statusId: string) => {
  const { control, reset, handleSubmit } = useForm<Task>({
    defaultValues: {
      name: '',
      statusId,
      description: '',
      userId: '',
    },
  });

  const nameRules = { required: 'Название - обязательное поле' };
  const statusIdRules = { required: 'Статус - обязательное поле' };

  return {
    control,
    reset,
    handleSubmit,
    nameRules,
    statusIdRules,
  };
};
