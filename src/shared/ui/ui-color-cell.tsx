import { cn, ColorItem } from '@/shared/lib';

export function UiColorCell({ cellValue }: { cellValue: ColorItem }) {
  return (
    <div className={cn(`bg-${cellValue.color} w-5 h-5 rounded-full`)}></div>
  );
}
