'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/shared/ui/shadcn/navigation-menu';
import Link from 'next/link';
import { cn } from '@/shared/lib';
import { useNav } from './model/use-nav';
import { navList } from './model/nav-list';

export function UiNav() {
  const { getActiveClasses } = useNav();
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-x-4">
        {navList.map((item) => (
          <NavigationMenuItem
            key={item.href}
            className={cn(
              getActiveClasses(item),
              'transition-colors px-2 py-1  hover:text-primary hover:bg-secondary rounded-xl flex justify-center items-center'
            )}
          >
            <Link href={item.href} passHref>
              {item.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
