import { H4, P } from '@tmk-projs/ui';

export function Sidebar() {
  return (
    <aside className="bg-gray-100 rounded-lg p-4 space-y-4">
      <div className="flex flex-row gap-2 justify-between">
        <H4>Simple ToDo</H4>
      </div>
      <div>
        <P className="font-semibold text-sm">List</P>
        <ul>
          <li>Personal</li>
          <li>Work</li>
        </ul>
      </div>
    </aside>
  );
}
