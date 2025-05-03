import { persistStorage } from '@/shared/lib';
import { Status } from '@/entities/status/model/types';
import { uiToast } from '@/shared/ui/ui-toaster';

const STATUSES_STORAGE_KEY = 'statuses_storage';

export const statusesRepository = {
  getStatuses: async () => {
    try {
      return await persistStorage.getItemsSafe<Status[]>(
        STATUSES_STORAGE_KEY,
        []
      );
    } catch {
      uiToast.error('Не удалось загрузить список статусов');
    }
  },
  getStatus: async (id: string) => {
    const statuses = await statusesRepository.getStatuses();
    if (!statuses || statuses.length === 0) return;
    return statuses.find((status) => status.id === id);
  },
  saveStatus: async (value: Status) => {
    try {
      const statuses = await statusesRepository.getStatuses();
      if (!statuses) return;

      const statusIndex = statuses.findIndex(
        (status) => status.id === value.id
      );
      if (statusIndex === -1) {
        statuses.push(value);
      } else {
        statuses[statusIndex] = value;
      }

      await persistStorage.setItemsSafe(STATUSES_STORAGE_KEY, statuses);
      uiToast.success('Статус обновлен');
    } catch {
      uiToast.error('Не удалось сохранить статус');
    }
  },

  removeStatus: async (statusId: string) => {
    try {
      const statuses = await statusesRepository.getStatuses();
      if (!statuses) return;
      await persistStorage.setItemsSafe(
        STATUSES_STORAGE_KEY,
        statuses.filter((status) => status.id !== statusId)
      );
      uiToast.success('Статус удален');
    } catch {
      uiToast.error('Не удалось удалить статус');
    }
  },
};
