'use client';
import { StatusesPageWrapper } from './ui/statuses-page-wrapper';
import { TableHeaderItem, UiColorCell, UiOverlay, UiTable } from '@/shared/ui';
import { StatusCreate } from '@/features/status/create';
import { setStatuses, Status, useStatuses } from '@/entities/status';
import { ReactNode, useMemo } from 'react';
import { StatusesListActions } from '@/page/statuses/ui/statuses-list-actions';
import { renderTableCellWithClosure } from '@/shared/ui/ui-table';
import { useRouter } from 'next/navigation';
import { ROUTER_PATHS } from '@/shared/constants';
import { bindActionCreators } from 'redux';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectStatusesList } from '@/entities/status';

export function StatusesPage({ children }: { children: ReactNode }) {
  const statusesList = useAppSelector(selectStatusesList);
  const actions = bindActionCreators({ setStatuses }, useAppDispatch());

  const { createStatus, isLoading, removeStatus } = useStatuses(
    actions.setStatuses
  );
  const router = useRouter();
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
          onEdit: (item: Status) => {
            if (item.id) router.push(`${ROUTER_PATHS.STATUSES}/${item.id}`);
          },
        }),
      },
    ],
    []
  );
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
            items={statusesList}
            isLoading={isLoading}
            numberItemsForLoader={20}
            headers={headers}
          />
        </UiOverlay>
      }
    >
      {children}
    </StatusesPageWrapper>
  );
}
