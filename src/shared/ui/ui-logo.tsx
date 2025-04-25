import { cn } from '../lib/utils';

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={cn(className, 'flex items-center gap-2 text-2xl ')}>
      <span className="font-bold text-transparent bg-clip-text bg-secondary">
        Easy Board App
      </span>
    </div>
  );
}
