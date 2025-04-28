import { UiButton } from '@/shared/ui/ui-button';
import { Delete } from 'lucide-react';

type Props<T> = {
  item: T;
  onDelete: (item: T) => void;
};
//TODO сделать конфирм модалку для удаления
export function UiDeleteButton<T>({ item, onDelete }: Props<T>) {
  return (
    <UiButton
      variant="destructive"
      size="icon"
      className="cursor-pointer"
      onClick={() => onDelete(item)}
    >
      <Delete />
    </UiButton>
  );
}
