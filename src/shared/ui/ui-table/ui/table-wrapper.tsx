import { ReactNode } from 'react';
import { cn } from '@/shared/lib';

export function TableWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        'border-t border-b border-input  relative w-full h-full overflow-x-auto no-scrollbar overflow-y-auto'
      )}
    >
      {children}
    </div>
  );
}
