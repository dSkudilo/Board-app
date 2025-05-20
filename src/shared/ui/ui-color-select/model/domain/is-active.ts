export function isColorsEqual(
  firstColorId: string | undefined,
  secondColorId: string | undefined
) {
  if (!firstColorId || !secondColorId) return false;
  return firstColorId === secondColorId;
}
