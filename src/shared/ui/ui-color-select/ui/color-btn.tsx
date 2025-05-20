import { cn } from '@/shared/lib';

type Props = {
  color: string;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
};
export function ColorBtn({ color, isActive, className, ...props }: Props) {
  return (
    <button
      className={cn(
        'w-5 h-5 rounded-full  bg-transparent border-3 cursor-pointer transition-colors',
        `border-${color} hover:bg-${color}`,
        isActive && `bg-${color}`,
        className
      )}
      type="button"
      {...props}
    ></button>
  );
}
