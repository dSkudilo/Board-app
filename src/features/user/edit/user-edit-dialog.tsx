'use client';
import { UiButton, UiDialog, UiImgSelect, UiInput } from '@/shared/ui';
import { Controller } from 'react-hook-form';
import { avatarArr, setUsers, useUser, useUsers } from '@/entities/user';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from '@/shared/lib';
import { useMoveToUsers } from './model/use-move-to-users';
import { useFormFields } from './view-model/use-form';

export function UserEditDialog({ userId }: { userId: string }) {
  const actions = bindActionCreators({ setUsers }, useAppDispatch());
  const { loadUsers } = useUsers(actions.setUsers);
  const { user, isUserUpdate, updateUser } = useUser(userId, loadUsers);

  const { moveToUsers } = useMoveToUsers();
  const { control, reset, handleSubmit, usernameRules, avatarRules } =
    useFormFields(user);

  return (
    <>
      {user?.username && (
        <UiDialog
          key={user.id}
          onOpenChange={moveToUsers}
          open
          title="Редактирование пользователя"
          content={
            <form
              className="flex flex-col gap-y-4"
              onSubmit={handleSubmit(async (data) => {
                await updateUser(data);
                reset();
                moveToUsers();
              })}
            >
              <Controller
                control={control}
                name="username"
                rules={usernameRules}
                render={({ field, fieldState }) => (
                  <UiInput
                    className="flex-1"
                    label="Имя пользователя"
                    {...field}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="avatar"
                rules={avatarRules}
                render={({ field, fieldState }) => (
                  <UiImgSelect
                    imgList={avatarArr}
                    className="flex-1"
                    {...field}
                    error={fieldState.error?.message}
                  />
                )}
              />

              <UiButton
                className="cursor-pointer"
                type="submit"
                isLoading={isUserUpdate}
              >
                Сохранить
              </UiButton>
            </form>
          }
        />
      )}
    </>
  );
}
