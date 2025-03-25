import { ReactNode, useState } from 'react';
import { SvgIcons } from '../../assets/SvgIcons';
import { useLocation } from 'react-router';
import { Sidebar } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import IconPlaceholder from '../shared/IconPlaceholder';

const SidebarItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    role="button"
    onClick={onClick}
    className={`
    flex items-center p-1 rounded-full cursor-pointer w-full gap-4
    ${active ? 'bg-gray-green text-sidebar-primary' : 'hover:bg-gray-100/10'}
  `}
  >
    <span className="rounded-full bg-card h-10 w-10 flex items-center justify-center shadow-[0px_0px_4px_0px_#00000033]">
      {icon}
    </span>
    <span className="text-sm font-normal">{label}</span>
  </button>
);

const sidebarItems = [
  { icon: SvgIcons['discover'](), label: 'Discover', url: '/dashbord' },
  { icon: SvgIcons['trade'](), label: 'Trade', url: '#' },
  { icon: SvgIcons['rewards'](), label: 'Rewards', url: '#' },
  { icon: SvgIcons['develop'](), label: 'Develop', url: '#' },
];
const sidebarItemstoo = [
  { icon: SvgIcons['bug'](), label: 'Bug Report', url: '#' },
  { icon: SvgIcons['discover'](), label: 'Security', url: '#' },
  { icon: SvgIcons['setting'](), label: 'Settings', url: '#' },
];
const GWSidebar = () => {
  const { pathname } = useLocation();
  const [activeItem, setActiveItem] = useState(() =>
    sidebarItems?.find((item) => item.url === pathname)
  );

  return (
    <Sidebar className="bg-transparent lg:left-[50px] lg:top-[50px] lg:bottom-2 overflow-hidden block px-4 w-full lg:w-[280px]">
      <section className="bg-card border border-sidebar-border text-sidebar-foreground rounded-xl shadow-[0px_0px_4px_0px_#0000001A] p-4  overflow-y-auto h-[calc(100vh-70px)] no-scrollbar w-full">
        <div className="flex items-center mb-6 gap-3">
          <IconPlaceholder />
          <div>
            <h2 className="text-lg font-normal">StarkNet Global wallet</h2>
          </div>
        </div>

        <div className="space-y-2">
          {sidebarItems.map((item, i) => (
            <SidebarItem
              key={i}
              icon={item.icon}
              label={item.label}
              active={activeItem?.label === item.label}
              onClick={() => setActiveItem(item)}
            />
          ))}
          <Separator className="my-10" />
          {sidebarItemstoo.map((item, i) => (
            <SidebarItem
              key={i}
              icon={item.icon}
              label={item.label}
              active={activeItem?.label === item.label}
              onClick={() => setActiveItem(item)}
            />
          ))}
        </div>
      </section>
    </Sidebar>
  );
};

export default GWSidebar;
