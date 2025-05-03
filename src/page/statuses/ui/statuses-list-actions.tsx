import { Status } from '@/entities/status';
import { UiEditButton } from '@/shared/ui';
import { UiConfirmationDelete } from '@/shared/ui/ui-confirmation-delete';

export function StatusesListActions({
  item,
  onDelete,
  onEdit,
}: {
  item: Status;
  onDelete: (item: Status) => void;
  onEdit: (item: Status) => void;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <UiEditButton item={item} onEdit={onEdit} />
      <UiConfirmationDelete confirmFn={onDelete} item={item} />
    </div>
  );
}
