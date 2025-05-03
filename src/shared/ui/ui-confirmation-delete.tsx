import {
  ConfirmationPropsType,
  UiConfirmation,
} from '@/shared/ui/ui-confirmation';
import { Delete } from 'lucide-react';
import { UiButton } from '@/shared/ui/ui-button';

type Props<T> = Omit<ConfirmationPropsType, 'trigger' | 'confirmFn'> & {
  item: T;
  confirmFn: (item: T) => void;
};

export function UiConfirmationDelete<T>({
  item,
  confirmFn,
  ...confirmationProps
}: Props<T>) {
  return (
    <UiConfirmation
      {...confirmationProps}
      trigger={
        <UiButton variant="destructive" size="icon" className="cursor-pointer">
          <Delete />
        </UiButton>
      }
      confirmFn={() => confirmFn(item)}
    ></UiConfirmation>
  );
}
