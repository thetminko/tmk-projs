import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@tmk-projs/ui';

export interface AddTaskProps {
  onAdd: () => void;
}

export function AddTask({ onAdd }: AddTaskProps) {
  return (
    <Button variant={'outline'} className="w-full justify-start" onClick={onAdd}>
      <PlusIcon />
      Add New Task
    </Button>
  );
}
