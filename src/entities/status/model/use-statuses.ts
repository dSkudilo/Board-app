import { Status, StatusPayload } from './types';
import { nanoid } from 'nanoid';
import { statusesRepository } from '@/entities/status/model/statuses-repository';
import { useMemo, useState } from 'react';

export function useStatuses() {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const memoStatuses = useMemo(() => {
    return [...statuses];
  }, [statuses]);

  const loadStatuses = async () => {
    const res = await statusesRepository.getStatuses();
    if (!res) return;
    setStatuses(res);
  };

  const fetchData = async () => {
    setIsLoading(true);
    await Promise.all([loadStatuses()]);
    setIsLoading(false);
  };

  const createStatus = async (data: StatusPayload) => {
    const newStatus = { id: nanoid(), ...data };
    await statusesRepository.addStatus(newStatus);
  };

  return { createStatus, memoStatuses, fetchData, isLoading };
}
