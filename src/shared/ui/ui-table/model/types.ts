import {ReactNode} from "react";

export type TableProps<T extends Identifiable> = {
  items: T[];
  headers: TableHeaderItem<T>[];
  isLoading?: boolean;
  className?: string;
  numberItemsForLoader?: number;
};

export type TableHeaderItem<T> = {
  name: string;
  field?: keyof T;
  id: string;
  width?: string;
  type?: 'data' | 'actions';
  isRandomSkeletonWidth?: boolean;
  slotRender?: (item: T) => ReactNode
};

export type Identifiable = {
  id: string;
};
