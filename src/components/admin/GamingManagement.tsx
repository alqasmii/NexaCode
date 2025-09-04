import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Users, DollarSign, Star } from 'lucide-react';

const GamingManagement = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { title: t('admin.gaming.stats.totalAccounts'), value: '1,234', icon: Gamepad2, color: 'text-red-600' },
    { title: t('admin.gaming.stats.activePlayers'), value: '8,567', icon: Users, color: 'text-blue-600' },
    { title: t('admin.gaming.stats.totalSales'), value: '$23.4K', icon: DollarSign, color: 'text-green-600' },
    { title: t('admin.gaming.stats.averageRating'), value: '4.6', icon: Star, color: 'text-yellow-600' }
  ];

  return (
    <div className="space-y-6">
      <div className={isRTL ? 'text-right' : 'text-left'}>
        <h2 className="text-2xl font-bold text-foreground">{t('admin.gaming.title')}</h2>
        <p className="text-muted-foreground">{t('admin.gaming.description')}</p>
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
          <CardTitle>{t('admin.gaming.comingSoon')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t('admin.gaming.comingSoonDesc')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GamingManagement;
