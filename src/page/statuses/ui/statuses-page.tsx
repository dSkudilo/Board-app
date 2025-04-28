'use client';
import { StatusesPageWrapper } from './statuses-page-wrapper';
import { TableHeaderItem, UiOverlay, UiTable } from '@/shared/ui';
import { StatusCreate } from '@/features/status';
import { Status, useStatuses } from '@/entities/status';
import { useEffect, useMemo } from 'react';
import { StatusesListActions } from '@/page/statuses/ui/statuses-list-actions';

export function StatusesPage() {
  const { fetchData, createStatus, memoStatuses, isLoading } = useStatuses();
  const header = useMemo<TableHeaderItem<Status>[]>(
    () => [
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
        width: '94px',
        type: 'actions',
        slotRender: StatusesListActions({
          onDelete: (item: Status) => {
            console.log('on delete', item);
          },
          onEdit: (item: Status) => {
            console.log('on edit', item);
          },
        }),
      },
    ],
    []
  );

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
        <UiOverlay
          className="flex-grow overflow-hidden flex flex-col"
          isLoading={isLoading}
        >
          <UiTable
            items={memoStatuses}
            headers={header}
            isLoading={isLoading}
            numberItemsForLoader={20}
          />
        </UiOverlay>
      }
    ></StatusesPageWrapper>
  );
}
