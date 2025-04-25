import React from "react";
import {cn} from "../lib/utils";

type props = {
  className?: string,
  left: React.ReactNode,
  navBar: React.ReactNode,
  right?: React.ReactNode,
}

export function UiHeader({className, left, right, navBar}: props) {
  return (
    <div className={cn(className, 'bg-primary h-10 text-secondary flex justify-between items-center gap-x-4')}>
    asdasd
    </div>
  )
}