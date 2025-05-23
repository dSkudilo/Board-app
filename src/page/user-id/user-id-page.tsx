import { UserEditDialog } from '@/features/user/edit';
import { use } from 'react';

type StatusIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export function UserIdPage({ params }: StatusIdPageProps) {
  const unwrappedParams = use(params);

  return <UserEditDialog userId={unwrappedParams.id} />;
}
