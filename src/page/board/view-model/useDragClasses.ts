import { useMemo } from 'react';

export function useDragClasses(isDragging: boolean) {
  const containerIsDraggingClasses = useMemo(
    () => isDragging && 'cursor-grabbing',
    [isDragging]
  );
  const cardIsDraggingClasses = useMemo(
    () => isDragging && '!cursor-grabbing',
    [isDragging]
  );
  const cardIsDraggingStopClasses = useMemo(
    () => isDragging && 'hover:border-blue-500 hover:scale-105',
    [isDragging]
  );
  return {
    containerIsDraggingClasses,
    cardIsDraggingClasses,
    cardIsDraggingStopClasses,
  };
}
