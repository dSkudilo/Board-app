import { StatusCreateWrapper } from './status-create-wrapper';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiInput } from '@/shared/ui';
import { Status, StatusPayload } from '@/entities/status';
import { StatusCreateFormWrapper } from './status-create-form-wrapper';
import { UiColorSelect } from '@/shared/ui/ui-color-select';
import { statusColors } from '@/entities/status/model/constants';
type Props = {
  onCreate: (data: StatusPayload) => Promise<void>;
};
export function StatusCreate({ onCreate }: Props) {
  const { control, reset, handleSubmit } = useForm<Status>({
    defaultValues: {
      name: '',
      color: null,
    },
  });
  return (
    <StatusCreateWrapper>
      <form
        className="flex items-end gap-x-4 w-full"
        onSubmit={handleSubmit((data) => {
          onCreate?.(data);
          reset();
        })}
      >
        <StatusCreateFormWrapper>
          <Controller
            name="color"
            rules={{ required: 'Цвет - обязательное поле' }}
            control={control}
            render={({ field, fieldState }) => (
              <UiColorSelect
                colors={statusColors}
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />

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
        </StatusCreateFormWrapper>
        <UiButton variant="secondary" size="sm" type="submit">
          Создать
        </UiButton>
      </form>
    </StatusCreateWrapper>
  );
}
