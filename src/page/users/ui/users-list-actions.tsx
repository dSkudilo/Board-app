import { UiEditButton } from '@/shared/ui';
import { UiConfirmationDelete } from '@/shared/ui/ui-confirmation-delete';
import { User } from '@/entities/user';

export function UsersListActions({
  item,
  onDelete,
  onEdit,
}: {
  item: User;
  onDelete: (item: User) => void;
  onEdit: (item: User) => void;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <UiEditButton item={item} onEdit={onEdit} />
      <UiConfirmationDelete confirmFn={onDelete} item={item} />
    </div>
  );
}
