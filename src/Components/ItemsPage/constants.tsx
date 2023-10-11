import { ColumnType } from '../types';
import {CategoryItem} from './types'

export const columns: ColumnType<CategoryItem>[] = [
    {
      title: "Айди",
      value: "id",
    },
    {
      title: "Имя",
      value: "name",
    },
    {
      title: "Год",
      value: (item) => (
        <div style={{ color: "red" }}>
          {new Date(item.createdAt).getFullYear()}
        </div>
      ),
    },
  ];