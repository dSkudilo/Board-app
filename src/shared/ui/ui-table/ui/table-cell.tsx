import { ReactNode } from 'react';

export function TableCell({ children }: { children: ReactNode }) {
  return <div className="px-2 py-2 truncate flex items-center">{children}</div>;
}
