import { TableProps } from '@/shared/ui/ui-table/model/types';
import { useMemo } from 'react';
import { cn } from '@/shared/lib/utils';

export function UiTable<T>({ items, headers }: TableProps<T>) {
  const gridTemplateColumns = useMemo(() => {
    const widthArr = headers.reduce((acc: string[], col) => {
      if (col.width) acc.push(`${col.width}`);
      else acc.push('minmax(100px, 1fr)');
      return acc;
    }, []);
    return widthArr.join(' ');
  }, [headers]);
  return (
    <div className="w-full h-full border-t border-b border-input ">
      <div
        className={cn('grid overflow-x-auto no-scrollbar')}
        style={{ gridTemplateColumns }}
      >
        {headers.map((item) => (
          <div key={item.id} className="px-2 py-4">
            {item.name}
          </div>
        ))}
      </div>
      <div>items</div>
    </div>
  );
}
