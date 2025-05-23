import { cn } from '@/shared/lib';
import { ReactNode } from 'react';
type Props = {
  className?: string;
  select: ReactNode;
  error?: ReactNode;
};
export function AvatarWrapper({ className, select, error }: Props) {
  return (
    <div className={cn(className, 'flex flex-col gap-y-1 w-full')}>
      <div className={'flex gap-x-4 gap-y-2 border-chart-3'}>{select}</div>
      {error}
    </div>
  );
}
