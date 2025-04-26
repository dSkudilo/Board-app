export type TableProps<T> = {
  items: T[];
  headers: TableHeaderItem[];
};

export type TableHeaderItem = {
  name: string;
  field: string;
  id: string;
  width?: string;
};
