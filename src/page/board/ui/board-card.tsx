import { cn } from '@/shared/lib';
import { HTMLProps, ReactNode } from 'react';

type Props = {
  className?: string;
  name?: string;
  description?: string;
  info: ReactNode;
  actions: ReactNode;
} & HTMLProps<HTMLDivElement>;
export function BoardCard({
  className,
  name,
  description,
  info,
  actions,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        className,
        'hover:border-blue-500 hover:scale-105',
        'select-none max-w-[500px] w-full p-3  border-white border  rounded-lg cursor-grab  transition-colors  transition-transform flex flex-col gap-y-4'
      )}
      {...props}
    >
      <div className="flex- flex-col gap-y-1 flex-1">
        <div className="font-medium ">{name || '-'}</div>
        <div className="text-sm">{description || '-'}</div>
      </div>

      <div className="flex justify-between items-center gap-x-1">{info}</div>
      {actions}
    </div>
  );
}
