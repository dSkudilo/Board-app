import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/shadcn/select';
import * as React from 'react';
import { cn } from '@/shared/lib';

type Props<T> = {
  placeholder?: string;
  className?: string;
  options: (T & { id: string; name: string })[];
  optionSlot?: (item: T & { id: string; name: string }) => React.ReactNode;
  viewKey?: keyof (T & { id: string; name: string });
  label?: string;
  error?: string;
};

export function UiSelect<T>({
  placeholder,
  className,
  options,
  optionSlot,
  viewKey = 'name',
  label,
  error,
  ...props
}: Props<T>) {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label className="text-xs">{label}</label>
      <Select {...props}>
        <SelectTrigger className={cn(className, 'w-full !h-[29px]')}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {optionSlot ? optionSlot(option) : (option[viewKey] as string)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
