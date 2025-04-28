import { UiButton } from '@/shared/ui/index';
import { Edit } from 'lucide-react';

type Props<T> = {
  item: T;
  onEdit: (item: T) => void;
};
export function UiEditButton<T>({ item, onEdit }: Props<T>) {
  return (
    <UiButton
      variant="secondary"
      size="icon"
      className="cursor-pointer"
      onClick={() => onEdit(item)}
    >
      <Edit />
    </UiButton>
  );
}
