import React, { HTMLProps, ReactNode } from 'react';

type Props = {
  name?: string;
  description?: string;
  info: ReactNode;
} & HTMLProps<HTMLDivElement>;
export function BoardDraggingCard({
  name,
  description,
  info,
  ...props
}: Props) {
  return (
    <div
      className={
        'bg-primary absolute pointer-events-none select-none max-w-[500px] scale-80 w-full p-3  border-white border h-min rounded-lg  -translate-x-1/2   flex flex-col gap-y-4'
      }
      {...props}
    >
      <div className="flex- flex-col gap-y-1">
        <div className="font-medium ">{name || '-'}</div>
        <div className="text-sm">{description || '-'}</div>
      </div>

      <div className="flex justify-between items-center gap-x-1">{info}</div>
    </div>
  );
}
