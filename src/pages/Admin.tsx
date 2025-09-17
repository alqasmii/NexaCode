import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import AdminSidebar from '@/components/admin/AdminSidebar';
import DashboardOverview from '@/components/admin/DashboardOverview';
import AppsManagement from '@/components/admin/AppsManagement';
import SubscriptionsManagement from '@/components/admin/SubscriptionsManagement';
import GamingManagement from '@/components/admin/GamingManagement';
import CodesManagement from '@/components/admin/CodesManagement';
import ServicesManagement from '@/components/admin/ServicesManagement';
import UsersManagement from '@/components/admin/UsersManagement';
import AnalyticsManagement from '@/components/admin/AnalyticsManagement';
import SettingsManagement from '@/components/admin/SettingsManagement';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Settings, ExternalLink, LogOut, Crown, Shield } from 'lucide-react';

export default function Admin() {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'apps':
        return <AppsManagement />;
      case 'subscriptions':
        return <SubscriptionsManagement />;
      case 'gaming':
        return <GamingManagement />;
      case 'codes':
        return <CodesManagement />;
      case 'services':
        return <ServicesManagement />;
      case 'users':
        return <UsersManagement />;
      case 'analytics':
        return <AnalyticsManagement />;
      case 'settings':
        return <SettingsManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900" dir="ltr">
      {/* Enhanced Sidebar */}
      <AdminSidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Enhanced Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 shadow-sm" dir="rtl">
          <div className="flex items-center justify-between flex-row-reverse">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    لوحة الإدارة
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    إدارة شاملة لجميع أقسام الموقع
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Crown className="h-3 w-3 ml-1" />
                لوحة الإدارة
              </Badge>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="البحث في لوحة الإدارة..."
                  className="pr-10 w-64 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-right"
                />
              </div>
              
              {/* Admin Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border-2 border-blue-200 dark:border-blue-800">
                      <AvatarImage src={user?.user_metadata?.avatar_url} />
                      <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-semibold">
                        {user?.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center gap-2">
                        <Crown className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">Admin Profile</span>
                      </div>
                      <p className="text-xs text-gray-500 break-all">{user?.email}</p>
                      <Badge variant="outline" className="w-fit text-xs">
                        Super Admin
                      </Badge>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setActiveTab('settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open('/', '_blank')}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Site
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={signOut}
                    className="text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
