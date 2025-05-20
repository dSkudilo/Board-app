'use client';
import { StatusesPageWrapper } from './ui/statuses-page-wrapper';
import { UiOverlay, UiTable } from '@/shared/ui';
import { StatusCreate } from '@/features/status/create';
import { setStatuses, useStatuses } from '@/entities/status';
import { ReactNode } from 'react';
import { bindActionCreators } from 'redux';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectStatusesList } from '@/entities/status';
import { useTableHeader } from './model/use-table-header';
import { useOpenEditModal } from '@/page/statuses/model/open-edit-modal';

export function StatusesPage({ children }: { children: ReactNode }) {
  const statusesList = useAppSelector(selectStatusesList);
  const actions = bindActionCreators({ setStatuses }, useAppDispatch());

  const { createStatus, isLoading, removeStatus } = useStatuses(
    actions.setStatuses
  );

  const { openEditModal } = useOpenEditModal();
  const { headers } = useTableHeader(removeStatus, openEditModal);
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
