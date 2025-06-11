'use client';
import React, { ReactNode, useMemo } from 'react';
import { UiButton, UiDeleteButton, UiDialog, UiOverlay } from '@/shared/ui';
import { cn, useAppDispatch, useAppSelector } from '@/shared/lib';
import {
  selectStatusesList,
  setStatuses,
  StatusColorIndicator,
  StatusPreview,
  useStatuses,
} from '@/entities/status';
import { bindActionCreators } from 'redux';
import { useOpenAddModal } from './model/use-add-modal';
import { TaskCreate } from '@/features/task/create';
import {
  selectTasksBoard,
  setDraggingTask,
  setTasks,
  useTasks,
} from '@/entities/tasks';
import {
  selectUsersList,
  setUsers,
  UserPreview,
  useUsers,
} from '@/entities/user';
import { BoardWrapper } from './ui/board-wrapper';
import { BoardContent } from './ui/board-content';
import { BoardCol } from './ui/board-col';
import { BoardCard } from './ui/board-card';
import { BoardEmptyCol } from './ui/board-empty-col';
import { BoardDraggingCard } from './ui/board-dragging-card';
import { useFakeCardDrag } from '@/page/board/model/use-fake-card-drag';
import { useDrag } from '@/page/board/model/use-drag';
import { fnGetStatusById, fnGetUserById } from '@/page/board/model/helpers';
import { useColsStyles } from '@/page/board/view-model/useColsStyles';
import { useDragClasses } from '@/page/board/view-model/useDragClasses';

export function BoardPage({ children }: { children: ReactNode }) {
  const statusesList = useAppSelector(selectStatusesList);
  const statusesActions = bindActionCreators({ setStatuses }, useAppDispatch());
  const { isLoading: statusesIsLoading } = useStatuses(
    statusesActions.setStatuses
  );

  const usersList = useAppSelector(selectUsersList);
  const usersActions = bindActionCreators({ setUsers }, useAppDispatch());
  const { isLoading: usersIsLoading } = useUsers(usersActions.setUsers);

  const tasksList = useAppSelector(selectTasksBoard);
  const tasksActions = bindActionCreators(
    { setTasks, setDraggingTask },
    useAppDispatch()
  );

  const {
    isLoading: tasksIsLoading,
    removeTask,
    updateTask,
  } = useTasks(tasksActions.setTasks);

  const { selectedStatus, openAddModal, clearModal } = useOpenAddModal();

  const {
    changeFakeCardPosition,
    resetFakeCardPosition,
    dragContainer,
    fakeCardPositionStyle,
  } = useFakeCardDrag();

  const { draggingTask, onDragStart, onDragMove, onDragEnd, stopDrag } =
    useDrag(changeFakeCardPosition, resetFakeCardPosition, updateTask);

  const getUserById = fnGetUserById(usersList);
  const getStatusById = fnGetStatusById(statusesList);

  const dataIsLoading = useMemo(
    () => statusesIsLoading || tasksIsLoading || usersIsLoading,
    [statusesIsLoading, tasksIsLoading, usersIsLoading]
  );
  const { getColsStyle } = useColsStyles(statusesList.length);

  const {
    containerIsDraggingClasses,
    cardIsDraggingClasses,
    cardIsDraggingStopClasses,
  } = useDragClasses(!!draggingTask);
  return (
    <UiOverlay className="h-full" isLoading={dataIsLoading}>
      <BoardWrapper
        className={cn(containerIsDraggingClasses)}
        onMouseMove={onDragMove}
        ref={dragContainer}
      >
        <BoardContent colsStyles={getColsStyle}>
          {statusesList.map((status) => (
            <BoardCol
              key={status.id}
              onMouseUp={() => onDragEnd(status.id)}
              statusInfoAndActions={
                <>
                  <StatusPreview name={status.name} color={status.color} />
                  <UiButton
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => openAddModal(status)}
                  >
                    Добавить задачу
                  </UiButton>
                </>
              }
              cards={
                <>
                  {tasksList[status.id]?.length &&
                    tasksList[status.id].map((task) => (
                      <BoardCard
                        className={cn(
                          cardIsDraggingClasses,
                          cardIsDraggingStopClasses
                        )}
                        key={task.id}
                        onMouseDown={(e) => onDragStart(task, e)}
                        name={task.name}
                        description={task.description}
                        info={
                          <>
                            <UserPreview
                              name={getUserById(task.userId)?.username || '-'}
                              url={getUserById(task.userId)?.avatar?.url}
                            />
                            {
                              <StatusColorIndicator
                                color={getStatusById(task.statusId)?.color}
                              />
                            }
                          </>
                        }
                        actions={
                          <UiDeleteButton
                            item={task.id}
                            onDelete={removeTask}
                            onMouseDown={stopDrag}
                          />
                        }
                      />
                    ))}
                  {!tasksList[status.id]?.length && <BoardEmptyCol />}
                </>
              }
            />
          ))}
        </BoardContent>

        {!!selectedStatus && (
          <UiDialog
            open
            onOpenChange={clearModal}
            content={
              <TaskCreate statusId={selectedStatus.id} onSubmit={clearModal} />
            }
            title="Создание задачи"
          />
        )}

        {!!draggingTask && (
          <BoardDraggingCard
            style={fakeCardPositionStyle}
            name={draggingTask.name}
            description={draggingTask.description}
            info={
              <>
                <UserPreview
                  name={getUserById(draggingTask.userId)?.username || '-'}
                  url={getUserById(draggingTask.userId)?.avatar?.url}
                />
                <StatusColorIndicator
                  color={getStatusById(draggingTask.statusId)?.color}
                />
              </>
            }
          />
        )}
      </BoardWrapper>
    </UiOverlay>
  );
}
