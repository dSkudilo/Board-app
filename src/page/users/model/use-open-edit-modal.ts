import { ROUTER_PATHS } from '@/shared/constants';
import { useRouter } from 'next/navigation';

export function useOpenEditModal() {
  const router = useRouter();

  const openEditModal = (id: string) => {
    router.push(`${ROUTER_PATHS.USERS}/${id}`);
  };

  return {
    openEditModal,
  };
}
