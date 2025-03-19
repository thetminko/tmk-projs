import { Sidebar } from '@tmk-projs/ui';
import { ToDoList } from '../components/ToDoList';

export function App() {
  return (
    <div className="flex h-full flex-row space-x-4 p-4">
      <Sidebar />
      <ToDoList className="flex-1" />
    </div>
  );
}
