'use client';
import { useRouter } from 'next/navigation';
import { ROUTER_PATHS } from '@/shared/constants';

export function useMoveToUsers() {
  const router = useRouter();
  const moveToUsers = () => {
    router.push(ROUTER_PATHS.USERS);
  };

  return { moveToUsers };
}
