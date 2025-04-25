import {ROUTER_PATHS} from "@/shared/constants";

export type NavItem = {
  title: string;
  href: typeof ROUTER_PATHS[keyof typeof ROUTER_PATHS];
}