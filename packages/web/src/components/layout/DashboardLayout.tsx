import { Outlet } from 'react-router';
import GWSidebar from './SideBar';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { setupThemeToggle } from '@/lib/themeToggle';
import { Switch } from '../ui/switch';
import { SvgIcons } from '@/assets/SvgIcons';
import { Copy } from 'lucide-react';
import IconPlaceholder from '../shared/IconPlaceholder';

const { toggleTheme, isDarkMode } = setupThemeToggle();
const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="h-screen bg-primary p-4 md:p-10 lg:p-[3.125rem] flex w-full">
        <GWSidebar />
        <main className="flex-1 relative w-full overflow-auto no-scrollbar">
          <div className="absolute top-0 right-0 w-max flex gap-2 items-center">
            <SidebarTrigger />
            <Switch defaultChecked={isDarkMode} onClick={toggleTheme} />
            <IconPlaceholder className="w-[34px] h-[34px]" />
            <div className="flex text-xs items-center gap-2.5 py-2.5 px-6 rounded-full border border-[#DEDEDE] dark:border-[#314140]">
              <span className="block max-w-[138px] truncate">
                0x6526add146daa32e6781def
              </span>

              <button>
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>
            <span>{SvgIcons['dashes']()}</span>
          </div>

          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
