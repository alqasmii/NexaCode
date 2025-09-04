import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Gamepad2, 
  Tag, 
  Settings,
  Smartphone,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const AdminSidebar = ({ activeTab, onTabChange, collapsed, onToggleCollapse }: AdminSidebarProps) => {
  const { t, isRTL } = useLanguage();

  const sidebarItems = [
    {
      id: 'overview',
      label: t('admin.sidebar.overview'),
      icon: LayoutDashboard,
      color: 'text-blue-600'
    },
    {
      id: 'apps',
      label: t('admin.sidebar.apps'),
      icon: Smartphone,
      color: 'text-purple-600'
    },
    {
      id: 'subscriptions',
      label: t('admin.sidebar.subscriptions'),
      icon: ShoppingBag,
      color: 'text-green-600'
    },
    {
      id: 'gaming',
      label: t('admin.sidebar.gaming'),
      icon: Gamepad2,
      color: 'text-red-600'
    },
    {
      id: 'codes',
      label: t('admin.sidebar.codes'),
      icon: Tag,
      color: 'text-yellow-600'
    },
    {
      id: 'services',
      label: t('admin.sidebar.services'),
      icon: ShoppingBag,
      color: 'text-indigo-600'
    },
    {
      id: 'users',
      label: t('admin.sidebar.users'),
      icon: Users,
      color: 'text-pink-600'
    },
    {
      id: 'analytics',
      label: t('admin.sidebar.analytics'),
      icon: BarChart3,
      color: 'text-orange-600'
    },
    {
      id: 'settings',
      label: t('admin.sidebar.settings'),
      icon: Settings,
      color: 'text-gray-600'
    }
  ];

  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 shadow-sm",
      collapsed ? "w-16" : "w-64",
      isRTL && "border-l border-r-0"
    )}>
      {/* Header */}
      <div className={cn(
        "flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700",
        collapsed ? 'justify-center' : 'justify-between'
      )}>
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">{t('admin.sidebar.title')}</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10 transition-all duration-200",
                collapsed && "px-2 justify-center",
                isActive && "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
                !isActive && "hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-blue-600" : item.color)} />
              {!collapsed && (
                <span className="font-medium truncate">
                  {item.label}
                </span>
              )}
            </Button>
          );
        })}
      </nav>

      {/* Help Section */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                {t('admin.sidebar.help.title')}
              </span>
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
              {t('admin.sidebar.help.description')}
            </p>
            <Button size="sm" variant="outline" className="w-full text-xs border-blue-200 dark:border-blue-800">
              {t('admin.sidebar.help.contact')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
