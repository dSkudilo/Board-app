'use client';
import { useFormFields } from './view-model/use-form';
import { Controller } from 'react-hook-form';
import { UiButton, UiInput } from '@/shared/ui';
import { avatarArr, setUsers, useUsers } from '@/entities/user';
import { UserCreateWrapper } from './ui/user-create-wrapper';
import { UserCreateFormWrapper } from './ui/user-create-form-wrapper';
import { UiImgSelect } from '@/shared/ui/ui-img-select';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from '@/shared/lib';

export function UserCreate() {
  const actions = bindActionCreators({ setUsers }, useAppDispatch());
  const { createUser } = useUsers(actions.setUsers);

  const { control, reset, handleSubmit, usernameRules, avatarRules } =
    useFormFields();
  return (
    <UserCreateWrapper>
      <form
        className="flex items-end gap-x-4 w-full"
        onSubmit={handleSubmit((data) => {
          createUser?.(data);
          reset();
        })}
      >
        <UserCreateFormWrapper>
          <Controller
            name="avatar"
            rules={avatarRules}
            control={control}
            render={({ field, fieldState }) => (
              <UiImgSelect
                imgList={avatarArr}
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />

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
        </UserCreateFormWrapper>
        <UiButton variant="secondary" size="sm" type="submit">
          Создать
        </UiButton>
      </form>
    </UserCreateWrapper>
  );
}
