import { useMemo } from 'react';
import {
  renderTableCellWithClosure,
  TableHeaderItem,
  UiImgCell,
} from '@/shared/ui';
import { User } from '@/entities/user';
import { UsersListActions } from '@/page/users/ui/users-list-actions';

export function useTableHeader(
  onDelete: (id: string) => Promise<void>,
  onEdit: (id: string) => void
) {
  const headers = useMemo<TableHeaderItem[]>(
    () => [
      {
        id: 'avatar',
        name: 'Аватар',
        field: 'avatar',
        width: '100px',
        slotRender: renderTableCellWithClosure({
          component: UiImgCell,
        }),
      },
      {
        id: 'username',
        name: 'Имя пользователя',
        field: 'username',
        width: 'minmax(100px, 1fr)',
      },
      {
        id: 'statusesActions',
        name: '',
        width: '94px',
        type: 'actions',
        slotRender: renderTableCellWithClosure({
          component: UsersListActions,
          onDelete: async (item: User) => {
            await onDelete(item.id);
          },
          onEdit: (item: User) => {
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
