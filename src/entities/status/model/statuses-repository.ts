import { persistStorage } from '@/shared/lib/persist-storage';
import { Status } from '@/entities/status/model/types';

const STATUSES_STORAGE_KEY = 'statuses_storage';

export const statusesRepository = {
  getStatuses: async () => {
    return await persistStorage.getItemsSafe<Status[]>(
      STATUSES_STORAGE_KEY,
      []
    );
  },
  addStatus: async (value: Status) => {
    const statuses = await statusesRepository.getStatuses();
    if (!statuses) return;
    await persistStorage.setItemsSafe(
      STATUSES_STORAGE_KEY,
      statuses.concat([value])
    );
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
