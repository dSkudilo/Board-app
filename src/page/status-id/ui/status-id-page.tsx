'use client';
import { StatusEditDialog } from '@/features/status/edit';
import { useStatus } from '@/entities/status';
import { useRouter } from 'next/navigation';
import { ROUTER_PATHS } from '@/shared/constants';
import { use } from 'react';
type StatusIdPageProps = {
  params: Promise<{
    id: string; // Adjust based on your actual params structure
  }>;
};
export function StatusIdPage({ params }: StatusIdPageProps) {
  const unwrappedParams = use(params);
  const { status, isStatusUpdate, updateStatus } = useStatus(
    unwrappedParams.id
  );
  const router = useRouter();
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
