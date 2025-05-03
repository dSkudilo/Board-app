import { UiButton, UiDialog, UiInput } from '@/shared/ui';
import { Status } from '@/entities/status';
import { Controller, useForm } from 'react-hook-form';
import { UiColorSelect } from '@/shared/ui/ui-color-select';
import { statusColors } from '@/entities/status/model/constants';

type Props = {
  onOpenChange: (val?: boolean) => void;
  status: Status | null;
  onUpdateStatus: (data: Status) => void;
  isLoading: boolean;
};

export function StatusEditDialog({
  onOpenChange,
  status,
  onUpdateStatus,
  isLoading,
}: Props) {
  const { control, reset, handleSubmit } = useForm<Status>({
    defaultValues: status || { name: '', color: null },
  });
  return (
    <UiDialog
      onOpenChange={onOpenChange}
      open
      title="Редактирование статуса"
      content={
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(async (data) => {
            onUpdateStatus(data);
            reset();
          })}
        >
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

          <UiButton
            className="cursor-pointer"
            type="submit"
            isLoading={isLoading}
          >
            Сохранить
          </UiButton>
        </form>
      }
    />
  );
}
