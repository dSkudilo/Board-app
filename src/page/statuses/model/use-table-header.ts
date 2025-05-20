import { useMemo } from 'react';
import {
  renderTableCellWithClosure,
  TableHeaderItem,
  UiColorCell,
} from '@/shared/ui';
import { StatusesListActions } from '../ui/statuses-list-actions';
import { Status } from '@/entities/status';

export function useTableHeader(
  onDelete: (id: string) => Promise<void>,
  onEdit: (id: string) => void
) {
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
            await onDelete(item.id);
          },
          onEdit: (item: Status) => {
            onEdit(item.id);
          },
        }),
      },
    ],
    []
  );
  return {
    headers,
  };
}
