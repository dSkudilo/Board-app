'use client';
import { useEffect, useState } from 'react';
import { Status } from '@/entities/status';
import { statusesRepository } from '@/entities/status/model/statuses-repository';

export function useStatus(id: string) {
  const [status, setStatus] = useState<Status | null>(null);
  const [isStatusUpdate, setIsStatusUpdate] = useState(false);

  const loadStatus = async (id: string) => {
    const res = await statusesRepository.getStatus(id);
    if (!res) return;
    setStatus(res);
  };

  const updateStatus = async (data: Status) => {
    setIsStatusUpdate(true);
    await statusesRepository.saveStatus(data);
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
