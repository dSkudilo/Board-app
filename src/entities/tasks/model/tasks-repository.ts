import { persistStorage } from '@/shared/lib';
import { Task } from './domain/types';

const TASKS_STORAGE_KEY = 'tasks_storage';

export const tasksRepository = {
  getTasks: async () => {
    return await persistStorage.getItemsSafe<Task[]>(TASKS_STORAGE_KEY, []);
  },
  getTask: async (id: string) => {
    const tasks = await tasksRepository.getTasks();
    if (!tasks || tasks.length === 0) return;
    return tasks.find((tasks) => tasks.id === id);
  },
  saveTask: async (value: Task) => {
    const tasks = await tasksRepository.getTasks();
    if (!tasks) return;

    const taskIndex = tasks.findIndex((task) => task.id === value.id);
    if (taskIndex === -1) {
      tasks.push(value);
    } else {
      tasks[taskIndex] = value;
    }

    await persistStorage.setItemsSafe(TASKS_STORAGE_KEY, tasks);
  },

  removeTask: async (taskId: string) => {
    const tasks = await tasksRepository.getTasks();
    if (!tasks) return;
    await persistStorage.setItemsSafe(
      TASKS_STORAGE_KEY,
      tasks.filter((task) => task.id !== taskId)
    );
  },
};
