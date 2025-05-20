import { Status, StatusPayload } from './types';
import { nanoid } from 'nanoid';
import { statusesRepository } from '@/entities/status/model/statuses-repository';
import { useEffect, useState } from 'react';

export function useStatuses(setStatuses: (status: Status[]) => void) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadStatuses = async () => {
    const res = await statusesRepository.getStatuses();
    if (!res) return;
    setStatuses(res);
  };

  const addStatus = async (data: StatusPayload) => {
    const newStatus = { id: nanoid(), ...data };
    await statusesRepository.saveStatus(newStatus);
  };

  const createStatus = async (data: StatusPayload) => {
    await Promise.all([await addStatus(data), await loadStatuses()]);
  };

  const removeStatus = async (statusId: string) => {
    await Promise.all([
      await statusesRepository.removeStatus(statusId),
      await loadStatuses(),
    ]);
  };

  const fetchData = async () => {
    setIsLoading(true);
    await Promise.all([await loadStatuses()]);
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
