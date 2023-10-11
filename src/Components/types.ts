
export interface TableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
}

export interface ColumnType<T> {
  title: string;
  value: keyof T | (( item: T) => any);
}
