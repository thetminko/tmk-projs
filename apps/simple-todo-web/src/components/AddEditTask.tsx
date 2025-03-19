import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Label,
  Input,
  Button,
  SheetClose,
  SheetFooter
} from '@tmk-projs/ui';

export interface TaskDetailProps {
  open: boolean;
  task: any | undefined;
  onSave: (task: any) => void;
  onClose: () => void;
}

/**
 * TODO To change to form
 */
export function AddEditTask({ open, task, onSave, onClose }: TaskDetailProps) {
  const isNew = !task;
  const title = isNew ? 'Add task' : 'Edit task';

  return (
    <Sheet open={open} onOpenChange={open => !open && onClose()}>
      <SheetContent side={'bottom'}>
        <SheetHeader className="mt-4 space-y-0">
          <SheetTitle className="text-right">{title}</SheetTitle>
          <SheetDescription className="mt-0 text-right">
            {title} to your collection. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value={task?.title} className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" value={task?.description} className="col-span-2" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
