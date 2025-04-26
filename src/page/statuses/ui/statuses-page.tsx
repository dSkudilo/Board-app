'use client';
import { StatusesPageWrapper } from './statuses-page-wrapper';
import { StatusesList } from './statuses-list';
import { UiOverlay } from '@/shared/ui';
import { StatusCreate } from '@/features/status';
import { useStatuses } from '@/entities/status';
import { useEffect } from 'react';

export function StatusesPage() {
  const { fetchData, createStatus, memoStatuses } = useStatuses();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StatusesPageWrapper
      actions={
        <UiOverlay>
          <StatusCreate onCreate={createStatus} />
        </UiOverlay>
      }
      list={<StatusesList statuses={memoStatuses}></StatusesList>}
    ></StatusesPageWrapper>
  );
}
