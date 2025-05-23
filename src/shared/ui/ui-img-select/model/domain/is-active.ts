export function isAvatarsEqual(
  firstAvatarId: string | undefined,
  secondAvatarId: string | undefined
) {
  if (!firstAvatarId || !secondAvatarId) return false;
  return firstAvatarId === secondAvatarId;
}
