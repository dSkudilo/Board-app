import { StatusCreateWrapper } from './ui/status-create-wrapper';
import { Controller } from 'react-hook-form';
import { UiButton, UiInput } from '@/shared/ui';
import { setStatuses, useStatuses } from '@/entities/status';
import { StatusCreateFormWrapper } from './ui/status-create-form-wrapper';
import { UiColorSelect } from '@/shared/ui/ui-color-select';
import { statusColors } from '@/entities/status/model/constants';
import { useFormFields } from './view-model/use-form';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from '@/shared/lib';

export function StatusCreate() {
  const actions = bindActionCreators({ setStatuses }, useAppDispatch());

  const { createStatus } = useStatuses(actions.setStatuses);
  const { control, reset, handleSubmit, nameRules, colorRules } =
    useFormFields();
  return (
    <StatusCreateWrapper>
      <form
        className="flex items-end gap-x-4 w-full"
        onSubmit={handleSubmit((data) => {
          createStatus?.(data);
          reset();
        })}
      >
        <StatusCreateFormWrapper>
          <Controller
            name="color"
            rules={colorRules}
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
            rules={nameRules}
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
