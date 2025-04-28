import { Status } from '@/entities/status';
import { UiDeleteButton, UiEditButton } from '@/shared/ui';

function StatusesListActionsUi({
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
      <UiDeleteButton item={item} onDelete={onDelete} />
    </div>
  );
}

export function StatusesListActions({
  onDelete,
  onEdit,
}: {
  onDelete: (item: Status) => void;
  onEdit: (item: Status) => void;
}) {
  const renderActions = (item: Status) => (
    <StatusesListActionsUi
      item={item}
      onDelete={() => onDelete(item)}
      onEdit={() => onEdit(item)}
    />
  );
  renderActions.displayName = 'StatusesListActions';
  return renderActions;
}
