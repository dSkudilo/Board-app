import { Identifiable } from '@/shared/ui/ui-table/model/types';
import { ColorItem } from '@/shared/ui/ui-color-select';

export type Status = Identifiable & {
  name: string;
  color?: ColorItem | null;
};
