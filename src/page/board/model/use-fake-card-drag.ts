import React, { createRef, useMemo, useState } from 'react';

export function useFakeCardDrag() {
  const [draggedPosition, setDraggedPosition] = useState({ x: 0, y: 0 });

  const dragContainer = createRef<HTMLDivElement>();

  const getCoords = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    return {
      x: e.clientX - (dragContainer.current?.getBoundingClientRect().x || 0),
      y: e.clientY - (dragContainer.current?.getBoundingClientRect().y || 0),
    };
  };

  const changeFakeCardPosition = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    setDraggedPosition(getCoords(e));
  };

  const resetFakeCardPosition = () => {
    setDraggedPosition({ x: 0, y: 0 });
  };

  const fakeCardPositionStyle = useMemo(
    () => ({ top: draggedPosition.y, left: draggedPosition.x }),
    [draggedPosition.x, draggedPosition.y]
  );

  return {
    changeFakeCardPosition,
    resetFakeCardPosition,
    dragContainer,
    fakeCardPositionStyle,
  };
}
