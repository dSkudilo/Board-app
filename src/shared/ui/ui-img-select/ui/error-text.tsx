import * as React from 'react';
import { ReactNode } from 'react';

export function ErrorText({ children }: { children: ReactNode }) {
  return <div className="text-rose-400 text-sm">{children}</div>;
}
