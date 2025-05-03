import { ComponentProps, ComponentType, ElementType } from 'react';

type Props<T extends ElementType> = {
  component: ComponentType<T>;
} & ComponentProps<T>;

export function renderTableCellWithClosure<T extends ElementType>({
  component: Component,
  ...closureProps
}: Props<T>) {
  const renderActions = ({ ...props }: ComponentProps<T>) => (
    <Component {...closureProps} {...props} />
  );

  return renderActions;
}
