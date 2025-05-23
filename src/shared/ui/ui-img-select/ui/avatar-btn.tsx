import { cn } from '@/shared/lib';

type Props = {
  url: string;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
};
export function AvatarBtn({ url, isActive, className, ...props }: Props) {
  return (
    <button
      className={cn(
        'w-10 h-10 rounded-full  bg-transparent border-1 border-transparent cursor-pointer transition-colors bg-cover hover:bg-secondary hover:border-secondary',
        isActive && `bg-secondary border-secondary`,
        className
      )}
      type="button"
      style={{ backgroundImage: `url(${url})` }}
      {...props}
    >
      {/*<Image src={url} alt={url} width="100" height="100" />*/}
    </button>
  );
}
