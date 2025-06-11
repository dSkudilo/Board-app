import { cn } from '@/shared/lib';

type Props = {
  name: string;
  url?: string | null;
};
export function UserPreview({ name, url }: Props) {
  return (
    <div className="flex items-center gap-x-2">
      <div
        style={{ backgroundImage: `url(${url})` }}
        className={cn(!url && 'bg-gray-400', 'w-4 h-4 rounded-full bg-cover')}
      ></div>
      <div>{name}</div>
    </div>
  );
}
