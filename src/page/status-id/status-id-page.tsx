'use client';
import { StatusEditDialog } from '@/features/status/edit';
import { use } from 'react';
type StatusIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export function StatusIdPage({ params }: StatusIdPageProps) {
  const unwrappedParams = use(params);

  return <StatusEditDialog statusId={unwrappedParams.id} />;
}
