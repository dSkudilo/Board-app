import { UiSelect } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';
import { selectStatusesList } from '../model/selectors/statuses-list';
import { StatusPreview } from './status-preview';
export function StatusSelect({ ...props }) {
  const statusesList = useAppSelector(selectStatusesList);

  return (
    <UiSelect
      options={statusesList}
      placeholder="Выберите статус"
      optionSlot={(item) => (
        <StatusPreview name={item.name} color={item.color || null} />
      )}
      {...props}
    />
  );
}
