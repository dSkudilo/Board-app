import { CSSProperties, ReactNode } from 'react';

export function TableHeaderRow({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className="grid border-b border-input  min-w-min  h-13 sticky top-0 bg-primary z-10"
      style={style}
    >
      {children}
    </div>
  );
}
