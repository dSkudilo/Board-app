import { StatusPayload } from './types';
import { Status } from './domain/types';
import { nanoid } from 'nanoid';
import { statusesRepository } from '@/entities/status/model/statuses-repository';
import { useEffect, useState } from 'react';
import { uiToast } from '@/shared/ui';

export function useStatuses(setStatuses: (status: Status[]) => void) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadStatuses = async () => {
    try {
      const res = await statusesRepository.getStatuses();
      if (!res) return;
      setStatuses(res);
    } catch {
      uiToast.error('Не удалось загрузить список статусов');
    }
  };

  const createStatus = async (data: StatusPayload) => {
    try {
      const newStatus = { id: nanoid(), ...data };
      await Promise.all([
        await statusesRepository.saveStatus(newStatus),
        await loadStatuses(),
      ]);
      uiToast.success('Статус создан');
    } catch {
      uiToast.error('Не удалось сохранить статус');
    }
  };

  const removeStatus = async (statusId: string) => {
    try {
      await Promise.all([
        await statusesRepository.removeStatus(statusId),
        await loadStatuses(),
      ]);
      uiToast.success('Статус удалён');
    } catch {
      uiToast.error('Не удалось удалить статус');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    await loadStatuses();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    createStatus,
    isLoading,
    removeStatus,
    loadStatuses,
  };
}
