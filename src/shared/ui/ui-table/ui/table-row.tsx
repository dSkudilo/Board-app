import { CSSProperties, ReactNode } from 'react';

export function TableRow({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className="grid min-w-min [&:not(:last-child)]:border-b border-input h-13"
      style={style}
    >
      {children}
    </div>
  );
}
