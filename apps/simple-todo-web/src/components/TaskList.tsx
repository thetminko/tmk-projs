import { cn, H1, P } from '@tmk-projs/ui';
import { AddTask } from './AddTask';
import { TaskItem } from './TaskItem';
import { AddEditTask } from './AddEditTask';
import { useReducer, useState } from 'react';

export type TaskListProps = React.HTMLAttributes<HTMLDivElement>;

function taskReducer(state: any, action: { type: string; payload?: any }) {
  if (action.type === 'addTask') {
    return { ...state, taskToEdit: undefined, isOpen: true };
  }
  if (action.type === 'editTask') {
    return { ...state, taskToEdit: action.payload, isOpen: true };
  }
  if (action.type === 'closeTask') {
    return { ...state, taskToEdit: undefined, isOpen: false };
  }
  return state;
}

export function TaskList({ className }: TaskListProps) {
  const items = [
    {
      uid: 'task-1',
      title: 'Buy groceries',
      checked: false,
      onCheckedChange: (isChecked: boolean) => console.log('Buy groceries', isChecked),
      onOpen: () => dispatch({ type: 'editTask', payload: { uid: 'task-1', task: 'Buy groceries' } })
    },
    {
      uid: 'task-2',
      title: 'Buy cookwares',
      checked: true,
      onCheckedChange: (isChecked: boolean) => console.log('Buy cookwares', isChecked),
      onOpen: () => dispatch({ type: 'editTask', payload: { uid: 'task-2', title: 'Buy cookwares' } })
    }
  ];

  const [taskState, dispatch] = useReducer(taskReducer, { taskToEdit: undefined, openTaskSheet: false });

  return (
    <main className={cn('mx-4', className)}>
      <header className="flex flex-row items-center gap-4">
        <H1>Personal</H1>
        <P className="w-fit rounded-md border px-4 py-2 text-lg font-semibold">5</P>
      </header>
      <article className="mt-8">
        <section className="space-y-4">
          <AddTask onAdd={() => dispatch({ type: 'addTask' })} />
          <div className="space-y-0">
            {items.map(item => (
              <TaskItem key={item.uid} {...item} />
            ))}
          </div>
        </section>
        <AddEditTask
          task={taskState.taskToEdit}
          open={taskState.isOpen}
          onSave={() => {
            console.log('Save');
          }}
          onClose={() => dispatch({ type: 'closeTask' })}
        />
      </article>
    </main>
  );
}
