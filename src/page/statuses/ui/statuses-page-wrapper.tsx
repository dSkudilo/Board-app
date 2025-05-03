import React from 'react';

type props = {
  actions: React.ReactNode;
  list: React.ReactNode;
  dialogs: React.ReactNode;
};
export function StatusesPageWrapper({ actions, list, dialogs }: props) {
  return (
    <div className="flex flex-col gap-y-4 flex-grow overflow-hidden">
      <div className="font-bold">Статусы</div>
      {actions}
      <div className="flex flex-col flex-grow overflow-hidden">{list}</div>
      {dialogs}
    </div>
  );
}
