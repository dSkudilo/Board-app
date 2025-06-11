import { Controller } from 'react-hook-form';
import { UiButton, UiInput } from '@/shared/ui';
import { useFormFields } from './view-model/use-form';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from '@/shared/lib';
import { setTasks, useTasks } from '@/entities/tasks';
import { UserSelect } from '@/entities/user';
import { StatusSelect } from '@/entities/status';

type Props = { statusId: string; onSubmit: () => void };

export function TaskCreate({ statusId, onSubmit }: Props) {
  const actions = bindActionCreators({ setTasks }, useAppDispatch());

  const { createTask } = useTasks(actions.setTasks);
  const { control, reset, handleSubmit, nameRules, statusIdRules } =
    useFormFields(statusId);
  return (
    <form
      className="flex flex-col gap-y-4 w-full"
      onSubmit={handleSubmit(async (data) => {
        await createTask?.(data);
        reset();
        onSubmit();
      })}
    >
      <Controller
        control={control}
        name="name"
        rules={nameRules}
        render={({ field, fieldState }) => (
          <UiInput
            className="flex-1"
            label="Название задачи"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <UiInput
            className="flex-1"
            label="Описание"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="statusId"
        rules={statusIdRules}
        render={({ field, fieldState }) => (
          <StatusSelect
            label="Статус"
            value={field.value}
            onValueChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="userId"
        render={({ field, fieldState }) => (
          <UserSelect
            label="Исполнитель"
            value={field.value}
            onValueChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />
      <UiButton size="sm" type="submit" className="cursor-pointer">
        Создать
      </UiButton>
    </form>
  );
}
