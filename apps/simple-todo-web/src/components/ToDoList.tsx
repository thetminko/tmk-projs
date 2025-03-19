import { cn } from '@tmk-projs/ui';

export type ToDoListProps = React.HTMLAttributes<HTMLDivElement>;

export function ToDoList({ className }: ToDoListProps) {
  return <main className={cn('', className)}>Hello from ToDoList main</main>;
}
