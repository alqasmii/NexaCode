import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, UserX, Calendar } from 'lucide-react';

const UsersManagement = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { title: t('admin.users.stats.totalUsers'), value: '12,429', icon: Users, color: 'text-blue-600' },
    { title: t('admin.users.stats.activeUsers'), value: '8,967', icon: UserCheck, color: 'text-green-600' },
    { title: t('admin.users.stats.newUsers'), value: '+234', icon: Calendar, color: 'text-purple-600' },
    { title: t('admin.users.stats.bannedUsers'), value: '12', icon: UserX, color: 'text-red-600' }
  ];

  return (
    <div className="space-y-6">
      <div className={isRTL ? 'text-right' : 'text-left'}>
        <h2 className="text-2xl font-bold text-foreground">{t('admin.users.title')}</h2>
        <p className="text-muted-foreground">{t('admin.users.description')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.users.comingSoon')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t('admin.users.comingSoonDesc')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersManagement;
