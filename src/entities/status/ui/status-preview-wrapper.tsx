import { ReactNode } from 'react';

type Props = {
  name: string;
  color: ReactNode;
};

export function StatusPreviewWrapper({ name, color }: Props) {
  return (
    <div className="flex items-center gap-x-2">
      {color}
      <div>{name}</div>
    </div>
  );
}
