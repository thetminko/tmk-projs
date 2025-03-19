import { Sidebar } from '../components/Sidebar';
import { ToDoList } from '../components/ToDoList';

export function App() {
  return (
    <div className="flex flex-row p-4 h-full space-x-4">
      <Sidebar />
      <ToDoList className="flex-1" />
    </div>
  );
}
