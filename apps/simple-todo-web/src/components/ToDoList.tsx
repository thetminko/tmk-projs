import { cn } from '@tmk-projs/ui';

export type ToDoListProps = React.HTMLAttributes<HTMLDivElement>;

export function ToDoList({ className }: ToDoListProps) {
  return <main className={cn('bg-gray-300 rounded-lg p-4', className)}>Hello from ToDoList main</main>;
}
