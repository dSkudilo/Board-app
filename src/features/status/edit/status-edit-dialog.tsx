import { UiButton, UiDialog, UiInput } from '@/shared/ui';
import { setStatuses, Status, useStatus, useStatuses } from '@/entities/status';
import { Controller, useForm } from 'react-hook-form';
import { UiColorSelect } from '@/shared/ui/ui-color-select';
import { statusColors } from '@/entities/status/model/constants';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from '@/shared/lib';
import { useMoveToStatuses } from './model/use-move-to-statuses';
import { useFormFields } from './view-model/use-form';

export function StatusEditDialog({ statusId }: { statusId: string }) {
  const actions = bindActionCreators({ setStatuses }, useAppDispatch());
  const { loadStatuses } = useStatuses(actions.setStatuses);

  const { status, isStatusUpdate, updateStatus } = useStatus(
    statusId,
    loadStatuses
  );

  const { moveToStatuses } = useMoveToStatuses();

  const { control, reset, handleSubmit, nameRules, colorRules } =
    useFormFields(status);
  return (
    <>
      {status && (
        <UiDialog
          onOpenChange={moveToStatuses}
          open
          title="Редактирование статуса"
          content={
            <form
              className="flex flex-col gap-y-4"
              onSubmit={handleSubmit(async (data) => {
                await updateStatus(data);
                reset();
                moveToStatuses();
              })}
            >
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

              <UiButton
                className="cursor-pointer"
                type="submit"
                isLoading={isStatusUpdate}
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
