import { Button, buttonVariants } from '@/shared/ui/shadcn/button';
import { VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
} & React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;
export function UiButton({ children, isLoading, disabled, ...props }: Props) {
  return (
    <Button {...props} disabled={isLoading || disabled}>
      {isLoading ? (
        <div className="flex items-center gap-x-2">
          <Loader2 className="animate-spin" />
          Загрузка
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
