import { UiOverlay, UiTable } from '@/shared/ui';
import { Status } from '@/entities/status';
import { TableHeaderItem } from '@/shared/ui';

type Props = {
  statuses: Status[];
};

const header: TableHeaderItem[] = [
  {
    id: '1',
    name: 'da',
    field: 'test',
    width: '200px',
  },
  {
    id: '1',
    name: 'daasdasdasd',
    field: 'test',
    // width: '1fr',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
  {
    id: '1',
    name: 'da',
    field: 'test',
  },
];

export function StatusesList({ statuses }: Props) {
  return (
    <UiOverlay>
      <UiTable items={statuses} headers={header} />
    </UiOverlay>
  );
}
