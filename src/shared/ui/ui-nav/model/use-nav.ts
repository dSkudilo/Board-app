import { usePathname } from 'next/navigation';
import { NavItem } from '@/shared/ui/ui-nav';

export function useNav() {
  const pathname = usePathname();
  const getActiveClasses = (navItem: NavItem) =>
    pathname.includes(navItem.href) ? 'text-primary bg-secondary ' : '';
  return {
    getActiveClasses,
  };
}
