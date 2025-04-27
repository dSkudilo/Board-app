'use client';
import { Skeleton } from '@/shared/ui/shadcn/skeleton';
import React from 'react';
import { cn } from '@/shared/lib';

type Props = {
  className?: string;
  numberForWidth?: number | null;
} & React.ComponentProps<typeof Skeleton>;

const widthClasses = [
  'w-1/4',
  'w-5/12',
  'w-1/2',
  'w-3/5',
  'w-1/6',
  'w-11/12',
  'w-2/3',
  'w-1/5',
  'w-3/4',
  'w-5/5',
  'w-7/12',
  'w-1/3',
  'w-4/5',
  'w-5/6',
  'w-2/5',
  'w-1/12',
];
function transformInputToWidthClass(input: number) {
  const index = +input % widthClasses.length;
  return widthClasses[index];
}

export function UiSkeleton({ className, numberForWidth, ...props }: Props) {
  const widthClass = numberForWidth
    ? transformInputToWidthClass(numberForWidth)
    : '';
  return <Skeleton className={cn(className, widthClass)} {...props}></Skeleton>;
}
