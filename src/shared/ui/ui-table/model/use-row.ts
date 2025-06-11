import { useMemo } from 'react';
import { TableHeaderItem } from '@/shared/ui';

export function useRow(headers: TableHeaderItem[]) {
  const gridTemplateColumns = useMemo(() => {
    const widthArr = headers.reduce((acc: string[], col) => {
      if (col.width) acc.push(`${col.width}`);
      else acc.push('minmax(100px, 1fr)');
      return acc;
    }, []);
    return widthArr.join(' ');
  }, [headers]);
  return { gridTemplateColumns };
}
