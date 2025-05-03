import * as React from 'react';
import { Input } from '@/shared/ui/shadcn/input';

export function UiInput({
  label,
  error,
  ...props
}: React.ComponentProps<'input'> & { label?: string; error?: string }) {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label className="text-xs">{label}</label>
      <Input {...props}></Input>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
