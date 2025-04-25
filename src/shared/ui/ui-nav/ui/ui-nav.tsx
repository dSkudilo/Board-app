'use client'
import {NavItem} from "../model/types";
import {ROUTER_PATHS} from "@/shared/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/shared/ui/shadcn/navigation-menu";
import Link from "next/link";
import { usePathname  } from 'next/navigation';
import {cn} from "@/shared/lib/utils";

const navList: NavItem[] = [
  {
    title: 'Статусы',
    href: ROUTER_PATHS.STATUSES
  },
]

export function UiNav () {
  const pathname = usePathname ()
  const getActiveClasses = (navItem: NavItem) => pathname === navItem.href ? 'text-primary bg-secondary ' : ''
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-x-4'>
        {navList.map((item) => (
          <NavigationMenuItem key={item.href} className={cn(getActiveClasses(item), 'transition-colors px-2 py-1  hover:text-primary hover:bg-secondary rounded-xl')}>
              <Link href={item.href} passHref>
                {item.title}
              </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}