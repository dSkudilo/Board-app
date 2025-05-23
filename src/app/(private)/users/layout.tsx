import { ReactNode } from 'react';
import { UsersPage } from '@/page/users';

export default function StatusesLayout({ children }: { children: ReactNode }) {
  return <UsersPage>{children}</UsersPage>;
}
