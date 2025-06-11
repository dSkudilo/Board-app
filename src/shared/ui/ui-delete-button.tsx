import { UiButton } from '@/shared/ui/ui-button';
import { Trash } from 'lucide-react';
import React from 'react';

type Props<T> = {
  item: T;
  onDelete: (
    item: T,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onMouseDown?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
export function UiDeleteButton<T>({ item, onDelete, onMouseDown }: Props<T>) {
  return (
    <UiButton
      onMouseDown={(event) => onMouseDown && onMouseDown(event)}
      variant="destructive"
      size="icon"
      className="cursor-pointer"
      onClick={(event) => onDelete(item, event)}
    >
      <Trash />
    </UiButton>
  );
}
