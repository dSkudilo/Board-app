import { ColorItem } from '@/shared/lib';
import * as React from 'react';
import { ColorBtn } from './ui/color-btn';
import { ErrorText } from './ui/error-text';
import { ColorWrapper } from './ui/color-wrapper';
import { isColorsEqual } from './model/domain/is-active';

type Props = {
  className?: string;
  colors: ColorItem[];
  error?: string;
  value?: ColorItem | null;
  onChange: (value: ColorItem) => void;
};

export function UiColorSelect({
  className,
  colors,
  error,
  value,
  onChange,
}: Props) {
  return (
    <ColorWrapper
      className={className}
      select={colors.map((color) => (
        <ColorBtn
          color={color.color}
          isActive={isColorsEqual(color.id, value?.id)}
          onClick={() => onChange(color)}
          key={color.id}
        />
      ))}
      error={error && <ErrorText>{error}</ErrorText>}
    />
  );
}
