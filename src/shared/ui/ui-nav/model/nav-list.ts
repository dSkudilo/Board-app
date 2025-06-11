import { NavItem } from './types';
import { ROUTER_PATHS } from '@/shared/constants';

export const navList: NavItem[] = [
  {
    title: 'Доска',
    href: ROUTER_PATHS.BOARD,
  },
  {
    title: 'Статусы',
    href: ROUTER_PATHS.STATUSES,
  },
  {
    title: 'Пользователи',
    href: ROUTER_PATHS.USERS,
  },
];
