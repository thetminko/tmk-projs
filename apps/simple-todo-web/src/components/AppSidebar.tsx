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
  { uid: 1, title: 'Personal', isActive: true },
  { uid: 2, title: 'Work', isActive: false }
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader className="mx-2 flex cursor-default select-none flex-row items-center justify-between gap-0.5">
        <P className="select-none font-bold tracking-wider">stodo</P>
        <P className="text-xs font-light italic tracking-wide">1.0</P>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="cursor-default select-none">Collections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {listItems.map(item => (
                <SidebarMenuItem key={item.uid}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
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
