import React from 'react';

type props = {
  actions: React.ReactNode;
  list: React.ReactNode;
};
export function StatusesPageWrapper({ actions, list }: props) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="font-bold">Статусы</div>
      {actions}
      {list}
    </div>
  );
}
