import { SidebarInset, SidebarProvider, ThemeProvider } from '@tmk-projs/ui';
import { TaskList } from '../components/TaskList';
import { AppSidebar } from '../components/AppSidebar';
import { AppHeader } from '../components/AppHeader';

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <TaskList />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
