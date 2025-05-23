'use client';

import { ReactNode } from 'react';
import { UsersPageWrapper } from './ui/users-page-wrapper';
import { UiOverlay, UiTable } from '@/shared/ui';
import { UserCreate } from '@/features/user/create';
import { selectUsersList, setUsers, useUsers } from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { bindActionCreators } from 'redux';
import { useTableHeader } from './model/use-table-headers';
import { useOpenEditModal } from './model/use-open-edit-modal';

export function UsersPage({ children }: { children: ReactNode }) {
  const usersList = useAppSelector(selectUsersList);
  const actions = bindActionCreators({ setUsers }, useAppDispatch());
  const { isLoading, removeUser } = useUsers(actions.setUsers);
  const { openEditModal } = useOpenEditModal();

  const { headers } = useTableHeader(removeUser, openEditModal);

  return (
    <UsersPageWrapper
      actions={
        <UiOverlay>
          <UserCreate />
        </UiOverlay>
      }
      list={
        <UiOverlay className="flex-grow overflow-hidden flex flex-col">
          <UiTable
            items={usersList}
            isLoading={isLoading}
            numberItemsForLoader={20}
            headers={headers}
          ></UiTable>
        </UiOverlay>
      }
    >
      {children}
    </UsersPageWrapper>
  );
}
