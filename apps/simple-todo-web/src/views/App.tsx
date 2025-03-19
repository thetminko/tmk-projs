import { SidebarInset, SidebarProvider, ThemeProvider } from '@tmk-projs/ui';
import { ToDoList } from '../components/ToDoList';
import { AppSidebar } from '../components/AppSidebar';
import { AppHeader } from '../components/AppHeader';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <ToDoList className="flex-1" />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
