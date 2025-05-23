import { FileType } from '@/shared/lib';

export function UiImgCell({ cellValue }: { cellValue: FileType }) {
  return (
    <div
      className="w-5 h-5 rounded-full bg-cover bg-secondary"
      style={{ backgroundImage: `url(${cellValue.url})` }}
    ></div>
  );
}
