import { BoardPage } from '@/page/board';

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BoardPage>{children}</BoardPage>;
}
