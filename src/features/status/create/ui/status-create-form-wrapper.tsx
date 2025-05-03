import { ReactNode } from 'react';

export function StatusCreateFormWrapper({ children }: { children: ReactNode }) {
  return <div className="w-full flex flex-col gap-4">{children}</div>;
}
