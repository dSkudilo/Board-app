import { ColorItem } from '@/shared/lib';
import { StatusColorIndicator } from '@/entities/status/ui/status-color-indicator';
import { StatusPreviewWrapper } from '@/entities/status/ui/status-preview-wrapper';

type Props = {
  name: string;
  color?: ColorItem | null;
};
export function StatusPreview({ name, color }: Props) {
  return (
    <StatusPreviewWrapper
      color={<StatusColorIndicator color={color} />}
      name={name}
    />
  );
}
