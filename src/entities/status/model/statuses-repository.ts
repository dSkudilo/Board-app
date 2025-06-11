import { persistStorage } from '@/shared/lib';
import { Status } from './domain/types';

const STATUSES_STORAGE_KEY = 'statuses_storage';

export const statusesRepository = {
  getStatuses: async () => {
    return await persistStorage.getItemsSafe<Status[]>(
      STATUSES_STORAGE_KEY,
      []
    );
  },
  getStatus: async (id: string) => {
    const statuses = await statusesRepository.getStatuses();
    if (!statuses || statuses.length === 0) return;
    return statuses.find((status) => status.id === id);
  },
  saveStatus: async (value: Status) => {
    const statuses = await statusesRepository.getStatuses();
    if (!statuses) return;

    const statusIndex = statuses.findIndex((status) => status.id === value.id);
    if (statusIndex === -1) {
      statuses.push(value);
    } else {
      statuses[statusIndex] = value;
    }

    await persistStorage.setItemsSafe(STATUSES_STORAGE_KEY, statuses);
  },

  removeStatus: async (statusId: string) => {
    const statuses = await statusesRepository.getStatuses();
    if (!statuses) return;
    await persistStorage.setItemsSafe(
      STATUSES_STORAGE_KEY,
      statuses.filter((status) => status.id !== statusId)
    );
  },
};
