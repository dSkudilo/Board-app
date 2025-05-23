import React from 'react';

export function UserCreateWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-lg mb-2 font-semibold">Добавить пользователя</h2>
      <div className="flex gap-x-2 items-center">{children}</div>
    </div>
  );
}
