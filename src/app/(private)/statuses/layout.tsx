import { ReactNode } from 'react';
import { StatusesPage } from '@/page/statuses';

export default function StatusesLayout({ children }: { children: ReactNode }) {
  return <StatusesPage>{children}</StatusesPage>;
}
