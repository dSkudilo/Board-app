import { Status, StatusPayload } from './types';
import { nanoid } from 'nanoid';
import { statusesRepository } from '@/entities/status/model/statuses-repository';
import { useEffect, useMemo, useState } from 'react';

export function useStatuses() {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const memoStatuses = useMemo(() => {
    return [...statuses];
  }, [statuses]);

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
    memoStatuses,
    isLoading,
    removeStatus,
    loadStatuses,
  };
}
