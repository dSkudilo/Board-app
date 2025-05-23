import { AvatarWrapper } from './ui/awatar-wrapper';
import { AvatarBtn } from './ui/avatar-btn';
import { isAvatarsEqual } from './model/domain/is-active';
import { ErrorText } from './ui/error-text';
import { FileType } from '@/shared/lib';

type Props = {
  imgList: FileType[];
  className?: string;
  error?: string;
  value?: FileType | null;
  onChange: (value: FileType) => void;
};
export function UiImgSelect({
  imgList,
  className,
  error,
  value,
  onChange,
}: Props) {
  return (
    <AvatarWrapper
      className={className}
      select={imgList.map((e) => (
        <AvatarBtn
          url={e.url}
          isActive={isAvatarsEqual(e.id, value?.id)}
          key={e.id}
          onClick={() => onChange(e)}
        />
      ))}
      error={error && <ErrorText>{error}</ErrorText>}
    />
  );
}
