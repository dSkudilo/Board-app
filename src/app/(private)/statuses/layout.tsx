import { ReactNode } from 'react';
import { StatusesPage } from '@/page/statuses';

export default function StatusesLayout({ children }: { children: ReactNode }) {
  console.log('its server?');
  return <StatusesPage>{children}</StatusesPage>;
}
