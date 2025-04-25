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
    <div className={cn(className, 'bg-primary text-secondary flex justify-center items-center gap-x-4 h-16 relative')}>
      <div className='absolute left-4 top-1/2 -translate-y-1/2'>{left}</div>
      <div>{navBar}</div>
      {right && <div className='absolute right-4 top-1/2 -translate-y-1/2'>{right}</div>}
    </div>
  )
}