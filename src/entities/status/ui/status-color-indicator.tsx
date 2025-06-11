import { cn, ColorItem } from '@/shared/lib';

type Props = {
  color?: ColorItem | null;
};
export function StatusColorIndicator({ color }: Props) {
  return (
    <div
      className={cn(
        'w-5 h-5 rounded-full  ',
        ` bg-${color?.color || 'border'}`
      )}
    ></div>
  );
}
