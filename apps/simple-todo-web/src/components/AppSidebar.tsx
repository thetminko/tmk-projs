import {
  P,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@tmk-projs/ui';

const listItems = [
  { uid: 1, title: 'Personal' },
  { uid: 2, title: 'Work' }
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader className="mx-2 flex cursor-default select-none flex-row items-center gap-0.5">
        <P className="select-none font-bold tracking-wider">Simple ToDo</P>
        <P className="text-xs font-light italic tracking-wide">1.0</P>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="cursor-default select-none">Collections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {listItems.map(item => (
                <SidebarMenuItem key={item.uid}>
                  <SidebarMenuButton asChild>
                    <span className="select-none hover:cursor-default">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
