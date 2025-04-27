import { Identifiable, TableProps } from '@/shared/ui/ui-table/model/types';
import { useMemo } from 'react';
import { cn } from '@/shared/lib';
import { UiSkeleton } from '@/shared/ui';

export function UiTable<T extends Identifiable>({
  items,
  headers,
  isLoading,
  className,
  numberItemsForLoader = 10,
}: TableProps<T>) {
  const gridTemplateColumns = useMemo(() => {
    const widthArr = headers.reduce((acc: string[], col) => {
      if (col.width) acc.push(`${col.width}`);
      else acc.push('minmax(100px, 1fr)');
      return acc;
    }, []);
    return widthArr.join(' ');
  }, [headers]);

  return (
    <div
      className={cn(
        className,
        ' border-t border-b border-input  relative w-full h-full overflow-x-auto no-scrollbar overflow-y-scroll'
      )}
    >
      <div
        className="grid border-b border-input  min-w-min sticky top-0 bg-primary z-10"
        style={{ gridTemplateColumns }}
      >
        {headers.map((item) => (
          <div key={item.id} className="px-2 py-4">
            {item.name}
          </div>
        ))}
      </div>

      {!isLoading &&
        items.map((item) => (
          <div
            key={item.id}
            className="grid min-w-min [&:not(:last-child)]:border-b border-input"
            style={{ gridTemplateColumns }}
          >
            {headers.map((header) => (
              <div className="px-2 py-2" key={`${header.id}-${item.id}`}></div>
            ))}
          </div>
        ))}

      {isLoading &&
        Array.from({ length: numberItemsForLoader }).map((_, index) => (
          <div
            key={index}
            className="grid min-w-min [&:not(:last-child)]:border-b border-input"
            style={{ gridTemplateColumns }}
          >
            {headers.map((header) => (
              <div
                className="px-2 py-2 h-14 flex items-center"
                key={`${header.id}-${index}`}
              >
                <UiSkeleton
                  className="h-4 w-full"
                  numberForWidth={header.isRandomSkeletonWidth ? index : null}
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
