'use client';

import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { uiToast } from '@/shared/ui';
import { Task } from './domain/types';
import { tasksRepository } from './tasks-repository';
import { TaskPayload } from './type';

export function useTasks(setTasks: (task: Task[]) => void) {
  const [isLoading, setIsLoading] = useState(true);

  const loadTasks = async () => {
    try {
      const res = await tasksRepository.getTasks();
      if (!res) return;
      setTasks(res);
    } catch {
      uiToast.error('Не удалось загрузить задачи');
    }
  };

  const createTask = async (data: TaskPayload) => {
    try {
      const newTask = { id: nanoid(), ...data };
      await Promise.all([
        await tasksRepository.saveTask(newTask),
        await loadTasks(),
      ]);
      uiToast.success('Задача создана');
    } catch {
      uiToast.error('Не удалось создать задачу');
    }
  };

  const removeTask = async (taskId: string) => {
    try {
      await Promise.all([
        await tasksRepository.removeTask(taskId),
        await loadTasks(),
      ]);
      uiToast.success('Задача удалена');
    } catch {
      uiToast.error('Не удалось удалить задачу');
    }
  };

  const updateTask = async (data: Task) => {
    try {
      await Promise.all([
        await tasksRepository.saveTask(data),
        await loadTasks(),
      ]);

      uiToast.success('Статус задачи изменен');
    } catch {
      uiToast.error('Не удалось изменить задачу');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    await loadTasks();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    createTask,
    isLoading,
    removeTask,
    loadTasks,
    updateTask,
  };
}
