import { Status, StatusPayload } from './types';
import { nanoid } from 'nanoid';
import { statusesRepository } from '@/entities/status/model/statuses-repository';
import { useMemo, useState } from 'react';

export function useStatuses() {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isStatusEditOpen, setIsStatusEditOpen] = useState(false);
  const [editStatus, setEditStatus] = useState<Status | null>(null);
  const [isStatusUpdate, setIsStatusUpdate] = useState(false);

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
    await Promise.all([await loadStatuses()]);
    setIsLoading(false);
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

  const loadStatus = async (id: string) => {
    const res = await statusesRepository.getStatus(id);
    return res || null;
  };

  const openEditStatus = async (statusId: string) => {
    const status = await loadStatus(statusId);
    if (!status) return;
    setEditStatus(status);
    setIsStatusEditOpen(true);
  };

  const closeEditStatus = () => {
    setIsStatusEditOpen(false);
    setEditStatus(null);
  };

  const updateStatus = async (data: Status) => {
    setIsStatusUpdate(true);
    await statusesRepository.saveStatus(data);
    setIsStatusUpdate(false);
    closeEditStatus();
    await loadStatuses();
  };

  return {
    createStatus,
    memoStatuses,
    fetchData,
    isLoading,
    removeStatus,
    openEditStatus,
    isStatusEditOpen,
    closeEditStatus,
    editStatus,
    updateStatus,
    isStatusUpdate,
  };
}
