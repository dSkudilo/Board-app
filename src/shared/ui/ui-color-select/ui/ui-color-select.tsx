import { cn } from '@/shared/lib';
import { ColorItem } from '@/shared/ui/ui-color-select';
import * as React from 'react';

type Props = {
  className?: string;
  colors: ColorItem[];
  error?: string;
  value?: ColorItem | null;
  onChange: (value: ColorItem) => void;
};

export function UiColorSelect({
  className,
  colors,
  error,
  value,
  onChange,
}: Props) {
  return (
    <div className={cn(className, 'flex flex-col gap-y-1 w-full')}>
      <div className={'flex gap-x-4 gap-y-2 border-chart-3'}>
        {colors.map((color) => (
          <button
            className={cn(
              'w-5 h-5 rounded-full  bg-transparent border-3 cursor-pointer transition-colors',
              `border-${color.color} hover:bg-${color.color}`,
              color.id === value?.id && `bg-${color.color}`
            )}
            key={color.id}
            onClick={() => onChange(color)}
            type="button"
          ></button>
        ))}
      </div>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
