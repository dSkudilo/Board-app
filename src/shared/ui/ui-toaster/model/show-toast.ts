import { toast } from 'sonner';
import { error, info, success, warning } from './toast-class-names';

export function showToast(message: string) {
  toast(message);
}

export const uiToast = {
  success: (description: string) =>
    toast.success('Готово', {
      description,
      classNames: success,
    }),
  info: (description: string) =>
    toast.info('Информация', {
      description,
      classNames: info,
    }),
  warning: (description: string) =>
    toast.warning('Внимание', {
      description,
      classNames: warning,
    }),
  error: (description: string) =>
    toast.error('Ошибка', {
      description,
      classNames: error,
    }),
};
