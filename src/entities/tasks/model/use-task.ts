'use client';
import { useEffect, useState } from 'react';
import { uiToast } from '@/shared/ui';
import { Task } from './domain/types';
import { tasksRepository } from './tasks-repository';

export function useTask(id: string, loadTasks: () => Promise<void>) {
  const [task, setTask] = useState<Task | null>(null);
  const [isTaskUpdate, setIsTaskUpdate] = useState(false);

  const loadTask = async (id: string) => {
    try {
      const res = await tasksRepository.getTask(id);
      if (res) setTask(res);
    } catch {
      uiToast.error('Не удалось загрузить задачу');
    }
  };

  const updateTask = async (data: Task) => {
    try {
      setIsTaskUpdate(true);
      await Promise.all([
        await tasksRepository.saveTask(data),
        await loadTasks(),
      ]);
      setIsTaskUpdate(false);

      uiToast.success('Задача изменена');
    } catch {
      uiToast.error('Не удалось изменить задачу');
    }
  };

  useEffect(() => {
    loadTask(id);
  }, []);
  return {
    task,
    isTaskUpdate,
    updateTask,
  };
}
