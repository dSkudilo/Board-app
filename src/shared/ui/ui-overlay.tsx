import React, { useMemo } from 'react';
import { cn } from '@/shared/lib/utils';
import { UiSpinner } from '@/shared/ui/index';

type props = {
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
};
export function UiOverlay({ children, isLoading, className }: props) {
  const blurClasses = useMemo(() => (isLoading ? 'blur-xs' : ''), [isLoading]);
  return (
    <div
      className={cn(
        className,
        'bg-primary rounded-lg text-secondary p-4 shadow-card border border-ring relative'
      )}
    >
      {isLoading && (
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
          <UiSpinner />
        </div>
      )}
      <div className={cn(blurClasses, 'w-full h-full')}>{children}</div>
    </div>
  );
}
