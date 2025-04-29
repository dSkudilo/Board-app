'use client';
import { StatusesPageWrapper } from './statuses-page-wrapper';
import { TableHeaderItem, UiOverlay, UiTable } from '@/shared/ui';
import { StatusCreate } from '@/features/status';
import { Status, useStatuses } from '@/entities/status';
import { useEffect, useMemo, useState } from 'react';
import { StatusesListActions } from '@/page/statuses/ui/statuses-list-actions';
import { renderTableCellWithClosure } from '@/shared/ui/ui-table';

export function StatusesPage() {
  const { fetchData, createStatus, memoStatuses, isLoading } = useStatuses();
  const headers = useMemo<TableHeaderItem<Status>[]>(
    () => [
      {
        id: 'statusesName',
        name: 'Название',
        field: 'name',
        width: 'minmax(100px, 1fr)',
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
        slotRender: renderTableCellWithClosure({
          component: StatusesListActions,
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

  const [test, setTes] = useState(false);
  console.log('parent render');
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StatusesPageWrapper
      actions={
        <UiOverlay>
          <StatusCreate onCreate={createStatus} />
          <button onClick={() => setTes((v) => !v)}>
            yag {test ? 'true' : 'false'}
          </button>
        </UiOverlay>
      }
      list={
        <UiOverlay
          className="flex-grow overflow-hidden flex flex-col"
          isLoading={isLoading}
        >
          <UiTable
            items={memoStatuses}
            headers={headers}
            isLoading={isLoading}
            numberItemsForLoader={20}
          />
        </UiOverlay>
      }
    ></StatusesPageWrapper>
  );
}
