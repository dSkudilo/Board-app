import React from 'react';

type props = {
  actions: React.ReactNode;
  list: React.ReactNode;
  children: React.ReactNode;
};
export function StatusesPageWrapper({ actions, list, children }: props) {
  return (
    <div className="flex flex-col gap-y-4 flex-grow overflow-hidden">
      <div className="font-bold">Статусы</div>
      {actions}
      <div className="flex flex-col flex-grow overflow-hidden">{list}</div>
      {children}
    </div>
  );
}
