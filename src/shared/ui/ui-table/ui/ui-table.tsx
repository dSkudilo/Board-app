import { Identifiable, TableProps } from '@/shared/ui/ui-table/model/types';
import { ReactNode, memo } from 'react';
import { UiSkeleton } from '@/shared/ui';
import { TableCell } from '@/shared/ui/ui-table/ui/table-cell';
import { TableRow } from '@/shared/ui/ui-table/ui/table-row';
import { TableHeaderRow } from '@/shared/ui/ui-table/ui/table-header-row';
import { useRow } from '@/shared/ui/ui-table/model/use-row';
import { TableWrapper } from '@/shared/ui/ui-table/ui/table-wrapper';

export const UiTable = memo(function UiTable<T extends Identifiable>({
  items,
  headers,
  isLoading,
  className,
  numberItemsForLoader = 10,
}: TableProps<T>) {
  const { gridTemplateColumns } = useRow(headers);
  console.log('render table');
  return (
    <TableWrapper className={className}>
      <TableHeaderRow style={{ gridTemplateColumns }}>
        {headers.map((item) => (
          <TableCell key={item.id}>{item.name}</TableCell>
        ))}
      </TableHeaderRow>

      {!isLoading &&
        items.map((item) => (
          <TableRow key={item.id} style={{ gridTemplateColumns }}>
            {headers.map((header) => (
              <TableCell key={`${header.id}-${item.id}`}>
                {header.slotRender
                  ? header.slotRender({
                      item: item,
                      cellValue: item[header.field as keyof typeof item],
                    })
                  : header.field &&
                    (item[header.field as keyof typeof item] as ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))}

      {isLoading &&
        Array.from({ length: numberItemsForLoader }).map((_, index) => (
          <TableRow key={index} style={{ gridTemplateColumns }}>
            {headers.map((header) => (
              <TableCell key={`${header.id}-${index}`}>
                <UiSkeleton className="h-5 w-full" />
              </TableCell>
            ))}
          </TableRow>
        ))}
    </TableWrapper>
  );
});
