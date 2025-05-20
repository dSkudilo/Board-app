import { ROUTER_PATHS } from '@/shared/constants';
import { useRouter } from 'next/navigation';

export function useOpenEditModal() {
  const router = useRouter();

  const openEditModal = (id: string) => {
    router.push(`${ROUTER_PATHS.STATUSES}/${id}`);
  };

  return {
    openEditModal,
  };
}
