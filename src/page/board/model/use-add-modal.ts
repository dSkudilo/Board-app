'use client';
import { useState } from 'react';
import { Status } from '@/entities/status';

export function useOpenAddModal() {
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const openAddModal = (status: Status) => {
    setSelectedStatus(status);
  };
  const clearModal = () => {
    setSelectedStatus(null);
  };

  return { selectedStatus, openAddModal, clearModal };
}
