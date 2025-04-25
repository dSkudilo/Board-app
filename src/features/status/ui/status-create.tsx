import { StatusCreateWrapper } from './status-create-wrapper';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiInput } from '@/shared/ui';
import { Status, StatusPayload } from '@/entities/status';
type Props = {
  onCreate: (data: StatusPayload) => Promise<void>;
};
export function StatusCreate({ onCreate }: Props) {
  const { control, reset, handleSubmit } = useForm<Status>({
    defaultValues: {
      name: '',
    },
  });
  return (
    <StatusCreateWrapper>
      <form
        className="flex items-end gap-x-2 w-full"
        onSubmit={handleSubmit((data) => {
          onCreate?.(data);
          reset();
        })}
      >
        <Controller
          control={control}
          name="name"
          rules={{ required: 'Название статуса - обязательное поле' }}
          render={({ field, fieldState }) => (
            <UiInput
              className="flex-1"
              label="Название статуса"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        <UiButton variant="secondary" size="sm" type="submit">
          Создать
        </UiButton>
      </form>
    </StatusCreateWrapper>
  );
}
