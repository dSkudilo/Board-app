import React, { ReactNode } from 'react';
import { cn } from '@/shared/lib';

type Props = {
  children: ReactNode;
  className?: string;
};
export function BoardWrapper({
  children,
  className,
  ...props
}: Props & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(className, 'h-full overflow-scroll no-scrollbar')}
      {...props}
    >
      {children}
    </div>
  );
}
