import { useMemo } from 'react';

export function useColsStyles(length: number) {
  const getColsStyle = useMemo(() => {
    return { gridTemplateColumns: `repeat(${length}, minmax(500px, 1fr))` };
  }, [length]);
  return { getColsStyle };
}
