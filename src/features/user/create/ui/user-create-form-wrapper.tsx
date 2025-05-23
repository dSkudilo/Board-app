import { ReactNode } from 'react';

export function UserCreateFormWrapper({ children }: { children: ReactNode }) {
  return <div className="w-full flex flex-col gap-4">{children}</div>;
}
