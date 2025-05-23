'use client';
import { useRouter } from 'next/navigation';
import { ROUTER_PATHS } from '@/shared/constants';

export function useMoveToStatuses() {
  const router = useRouter();
  const moveToStatuses = () => {
    router.push(ROUTER_PATHS.STATUSES);
  };

  return { moveToStatuses };
}
