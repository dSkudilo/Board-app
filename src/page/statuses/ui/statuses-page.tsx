'use client';
import { StatusesPageWrapper } from './statuses-page-wrapper';
import { TableHeaderItem, UiOverlay, UiTable } from '@/shared/ui';
import { StatusCreate } from '@/features/status';
import { Status, useStatuses } from '@/entities/status';
import { useEffect } from 'react';

const header: TableHeaderItem<Status>[] = [
  {
    id: 'statusesName',
    name: 'Название',
    field: 'name',
    width: 'minmax(100px, 1fr)',
    isRandomSkeletonWidth: true,
  },
  {
    id: 'statusesColor',
    name: 'Цвет',
    field: 'color',
    width: '100px',
  },
  {
    id: 'statusesActions',
    name: '',
    width: '50px',
    type: 'actions',
  },
];

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
      list={
        <UiOverlay className="flex-grow overflow-hidden flex flex-col">
          <UiTable
            items={memoStatuses}
            headers={header}
            isLoading={false}
            numberItemsForLoader={20}
          />
        </UiOverlay>
      }
    ></StatusesPageWrapper>
  );
}
