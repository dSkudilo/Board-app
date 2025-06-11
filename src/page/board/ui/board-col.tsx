import { HTMLProps, ReactNode } from 'react';

type Props = {
  statusInfoAndActions: ReactNode;
  cards: ReactNode;
} & HTMLProps<HTMLDivElement>;
export function BoardCol({ statusInfoAndActions, cards, ...props }: Props) {
  return (
    <div
      className="flex flex-col gap-y-2 border-r border-border first:border-l px-4"
      {...props}
    >
      <div className="flex items-center justify-between sticky top-0 bg-primary pb-4 ">
        {statusInfoAndActions}
      </div>
      <div className="w-full px-2 flex flex-wrap  items-stretch  gap-4">
        {cards}
      </div>
    </div>
  );
}
