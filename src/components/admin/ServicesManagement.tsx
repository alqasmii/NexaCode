import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Users, DollarSign, Star } from 'lucide-react';

const ServicesManagement = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { title: t('admin.services.stats.totalServices'), value: '89', icon: Settings, color: 'text-indigo-600' },
    { title: t('admin.services.stats.activeClients'), value: '3,421', icon: Users, color: 'text-blue-600' },
    { title: t('admin.services.stats.totalRevenue'), value: '$32.1K', icon: DollarSign, color: 'text-green-600' },
    { title: t('admin.services.stats.averageRating'), value: '4.8', icon: Star, color: 'text-yellow-600' }
  ];

  return (
    <div className="space-y-6">
      <div className={isRTL ? 'text-right' : 'text-left'}>
        <h2 className="text-2xl font-bold text-foreground">{t('admin.services.title')}</h2>
        <p className="text-muted-foreground">{t('admin.services.description')}</p>
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
          <CardTitle>{t('admin.services.comingSoon')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t('admin.services.comingSoonDesc')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesManagement;
