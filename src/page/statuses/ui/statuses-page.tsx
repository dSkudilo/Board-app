'use client';
import { StatusesPageWrapper } from './statuses-page-wrapper';
import { TableHeaderItem, UiColorCell, UiOverlay, UiTable } from '@/shared/ui';
import { StatusCreate } from '@/features/status/create';
import { Status, useStatuses } from '@/entities/status';
import { ReactNode, useEffect, useMemo } from 'react';
import { StatusesListActions } from '@/page/statuses/ui/statuses-list-actions';
import { renderTableCellWithClosure } from '@/shared/ui/ui-table';
import { useRouter, usePathname } from 'next/navigation';
import { ROUTER_PATHS } from '@/shared/constants';

export function StatusesPage({ children }: { children: ReactNode }) {
  const { createStatus, memoStatuses, isLoading, removeStatus, loadStatuses } =
    useStatuses();
  const router = useRouter();
  const pathname = usePathname();
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
  useEffect(() => {
    if (pathname === ROUTER_PATHS.STATUSES) loadStatuses();
  }, [pathname]);
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
    >
      {children}
    </StatusesPageWrapper>
  );
}
