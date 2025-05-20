'use client';
import { StatusEditDialog } from '@/features/status/edit';
import { setStatuses, useStatus, useStatuses } from '@/entities/status';
import { useRouter } from 'next/navigation';
import { ROUTER_PATHS } from '@/shared/constants';
import { use } from 'react';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from '@/shared/lib';
type StatusIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export function StatusIdPage({ params }: StatusIdPageProps) {
  const router = useRouter();

  const actions = bindActionCreators({ setStatuses }, useAppDispatch());
  const { loadStatuses } = useStatuses(actions.setStatuses);

  const unwrappedParams = use(params);
  const { status, isStatusUpdate, updateStatus } = useStatus(
    unwrappedParams.id,
    loadStatuses
  );
  return (
    <>
      {status && (
        <StatusEditDialog
          onOpenChange={() => router.push(ROUTER_PATHS.STATUSES)}
          status={status}
          onUpdateStatus={updateStatus}
          isLoading={isStatusUpdate}
        />
      )}
    </>
  );
}
