import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Button, Checkbox, Label } from '@tmk-projs/ui';

export interface TaskItemProps {
  uid: string;
  title: string;
  checked?: boolean;
  onCheckedChange?: (isChecked: boolean) => void;
  onOpen?: () => void;
}

export function TaskItem({ uid, title, checked, onCheckedChange, onOpen }: TaskItemProps) {
  return (
    <div className="flex flex-row justify-between border-b border-muted py-2">
      <div className="flex flex-row items-center gap-2">
        <Checkbox id={uid} checked={checked} onCheckedChange={onCheckedChange}></Checkbox>
        <Label htmlFor={uid} className="text-sm font-medium leading-none">
          {title}
        </Label>
      </div>
      <Button size={'icon'} variant={'ghost'} onClick={onOpen}>
        <ChevronRightIcon className="stroke-foreground stroke-1" />
      </Button>
    </div>
  );
}
