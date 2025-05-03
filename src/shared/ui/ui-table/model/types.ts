import { ReactNode } from 'react';

export type TableProps<T extends Identifiable> = {
  items: T[];
  headers: TableHeaderItem[];
  isLoading?: boolean;
  className?: string;
  numberItemsForLoader?: number;
};

export type TableHeaderItem = {
  name: string;
  field?: string;
  id: string;
  width?: string;
  type?: 'data' | 'actions';
  slotRender?: ({ ...props }) => ReactNode;
};

export type Identifiable = {
  id: string;
};
