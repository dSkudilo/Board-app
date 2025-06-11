import React, { useState } from 'react';
import { Task } from '@/entities/tasks';

export function useDrag(
  changeFakeCardPosition: (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void,
  resetFakeCardPosition: () => void,
  updateTask: (task: Task) => Promise<void>
) {
  const [draggingTask, setDraggingTask] = useState<Task | null>();

  const onDragStart = (
    task: Task,
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (!task) return;
    setDraggingTask(task);
    changeFakeCardPosition(e);
  };

  const onDragMove = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (!draggingTask) return;
    changeFakeCardPosition(e);
  };

  const onDragEnd = async (statusId: string) => {
    if (!draggingTask) return;
    if (draggingTask && draggingTask.statusId !== statusId) {
      await updateTask({ ...draggingTask, statusId });
    }
    resetFakeCardPosition();
    setDraggingTask(null);
  };

  const stopDrag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return {
    draggingTask,
    onDragStart,
    onDragMove,
    onDragEnd,
    stopDrag,
  };
}
