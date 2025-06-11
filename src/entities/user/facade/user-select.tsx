import { UiSelect } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';
import { selectUsersList } from '../model/selectors/users-list';
import { UserPreview } from '../ui/user-preview';
import { findUserAvatar } from '@/entities/user/model/find-user-avatar';
export function UserSelect({ ...props }) {
  const usersList = useAppSelector(selectUsersList);

  return (
    <UiSelect
      viewKey="username"
      options={usersList}
      placeholder="Выберите пользователя"
      optionSlot={(item) => (
        <UserPreview
          name={item.username}
          url={findUserAvatar(item.avatar?.id)?.url || null}
        />
      )}
      {...props}
    />
  );
}
