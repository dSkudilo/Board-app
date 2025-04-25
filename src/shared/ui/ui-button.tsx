import { Button, buttonVariants } from '@/shared/ui/shadcn/button';
import { VariantProps } from 'class-variance-authority';

export function UiButton({
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return <Button {...props}></Button>;
}
