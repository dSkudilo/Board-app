'use client';
import { useEffect, useState } from 'react';
import { Status } from './domain/types';
import { statusesRepository } from './statuses-repository';
import { uiToast } from '@/shared/ui';

export function useStatus(id: string, loadStatuses: () => Promise<void>) {
  const [status, setStatus] = useState<Status | null>(null);
  const [isStatusUpdate, setIsStatusUpdate] = useState(false);

  const loadStatus = async (id: string) => {
    try {
      const res = await statusesRepository.getStatus(id);
      if (res) setStatus(res);
    } catch {
      uiToast.error('Не удалось загрузить статус');
    }
  };

  const updateStatus = async (data: Status) => {
    try {
      setIsStatusUpdate(true);
      await Promise.all([
        await statusesRepository.saveStatus(data),
        await loadStatuses(),
      ]);
      setIsStatusUpdate(false);

      uiToast.success('Статус изменён');
    } catch {
      uiToast.error('Не удалось загрузить статус');
    }
  };

  useEffect(() => {
    loadStatus(id);
  }, []);
  return {
    status,
    isStatusUpdate,
    updateStatus,
  };
}
