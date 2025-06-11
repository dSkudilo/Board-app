import {
  ConfirmationPropsType,
  UiConfirmation,
} from '@/shared/ui/ui-confirmation';
import { Trash } from 'lucide-react';
import { UiButton } from '@/shared/ui/ui-button';
import { MouseEvent } from 'react';

type Props<T> = Omit<ConfirmationPropsType, 'trigger' | 'confirmFn'> & {
  item: T;
  confirmFn: (item: T) => void;
  onButtonClick?: (e: MouseEvent) => void;
};

export function UiConfirmationDelete<T>({
  item,
  confirmFn,
  onButtonClick,
  ...confirmationProps
}: Props<T>) {
  return (
    <UiConfirmation
      {...confirmationProps}
      trigger={
        <UiButton
          variant="destructive"
          size="icon"
          className="cursor-pointer"
          onClick={onButtonClick}
        >
          <Trash />
        </UiButton>
      }
      confirmFn={() => confirmFn(item)}
    ></UiConfirmation>
  );
}
