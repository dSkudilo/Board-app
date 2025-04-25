'use client';
import { StatusesPageWrapper } from './statuses-page-wrapper';
import { StatusesList } from './statuses-list';
import { UiOverlay } from '@/shared/ui';
import { StatusCreate } from '@/features/status';
import { statusesModel } from '@/entities/status';

export function StatusesPage() {
  const statusesModelFn = statusesModel();
  return (
    <StatusesPageWrapper
      actions={
        <UiOverlay>
          <StatusCreate onCreate={statusesModelFn.createStatus} />
        </UiOverlay>
      }
      list={<StatusesList></StatusesList>}
    ></StatusesPageWrapper>
  );
}
