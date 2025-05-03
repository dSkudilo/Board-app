'use client';
import { StatusesPageWrapper } from './statuses-page-wrapper';
import { TableHeaderItem, UiColorCell, UiOverlay, UiTable } from '@/shared/ui';
import { StatusCreate } from '@/features/status/create';
import { Status, useStatuses } from '@/entities/status';
import { useEffect, useMemo } from 'react';
import { StatusesListActions } from '@/page/statuses/ui/statuses-list-actions';
import { renderTableCellWithClosure } from '@/shared/ui/ui-table';
import { StatusEditDialog } from '@/features/status/edit';

export function StatusesPage() {
  const {
    fetchData,
    createStatus,
    memoStatuses,
    isLoading,
    removeStatus,
    openEditStatus,
    isStatusEditOpen,
    closeEditStatus,
    editStatus,
    updateStatus,
    isStatusUpdate,
  } = useStatuses();
  const headers = useMemo<TableHeaderItem[]>(
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
        slotRender: renderTableCellWithClosure({
          component: UiColorCell,
        }),
      },
      {
        id: 'statusesActions',
        name: '',
        width: '94px',
        type: 'actions',
        slotRender: renderTableCellWithClosure({
          component: StatusesListActions,
          onDelete: async (item: Status) => {
            if (item.id) await removeStatus(item.id);
          },
          onEdit: async (item: Status) => {
            if (item.id) await openEditStatus(item.id);
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
            isLoading={isLoading}
            numberItemsForLoader={20}
            headers={headers}
          />
        </UiOverlay>
      }
      dialogs={
        isStatusEditOpen && (
          <StatusEditDialog
            status={editStatus}
            onOpenChange={closeEditStatus}
            onUpdateStatus={updateStatus}
            isLoading={isStatusUpdate}
          />
        )
      }
    ></StatusesPageWrapper>
  );
}
