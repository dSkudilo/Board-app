'use client';
import { useEffect, useState } from 'react';
import { Status } from '@/entities/status';
import { statusesRepository } from '@/entities/status/model/statuses-repository';

export function useStatus(id: string, loadStatuses: () => Promise<void>) {
  const [status, setStatus] = useState<Status | null>(null);
  const [isStatusUpdate, setIsStatusUpdate] = useState(false);

  const loadStatus = async (id: string) => {
    const res = await statusesRepository.getStatus(id);
    if (res) setStatus(res);
  };

  const updateStatus = async (data: Status) => {
    setIsStatusUpdate(true);
    await statusesRepository.saveStatus(data);
    await loadStatuses();
    setIsStatusUpdate(false);
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
