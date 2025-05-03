import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/shadcn/dialog';
import { ReactNode } from 'react';
import { Button } from '@/shared/ui/shadcn/button';

type Props = {
  trigger?: ReactNode;
  content?: ReactNode;
  title?: string;
  description?: string;
  actions?: ReactNode;
  open?: boolean;
  onOpenChange?: (val: boolean) => void;
};

export function UiDialog({
  trigger,
  content,
  title,
  description,
  actions,
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      {title && (
        <DialogContent className="w-10/12 max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {content && content}
          {actions && (
            <DialogFooter className="flex justify-between">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
