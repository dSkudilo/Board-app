import React from 'react';

type Props = {
  children?: React.ReactNode;
  colsStyles: { gridTemplateColumns: string };
};
export function BoardContent({ children, colsStyles }: Props) {
  return (
    <div className="grid h-full w-full" style={colsStyles}>
      {children}
    </div>
  );
}
