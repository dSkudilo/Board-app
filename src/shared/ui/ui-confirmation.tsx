import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/shadcn/alert-dialog';
import { ReactNode } from 'react';

export type ConfirmationPropsType = {
  trigger: ReactNode;
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  confirmFn: () => void;
  cancelFn?: () => void;
};

export function UiConfirmation({
  trigger,
  title = 'Подтвердите действие',
  description = 'Вы уверены, что хотите удалить?',
  cancelText = 'Отмена',
  confirmText = 'Подтвердить',
  confirmFn,
  cancelFn,
}: ConfirmationPropsType) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancelFn}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={confirmFn}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
