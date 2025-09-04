import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Eye, Users } from 'lucide-react';

const AnalyticsManagement = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { title: t('admin.analytics.stats.totalViews'), value: '2.3M', icon: Eye, color: 'text-blue-600' },
    { title: t('admin.analytics.stats.conversionRate'), value: '12.5%', icon: TrendingUp, color: 'text-green-600' },
    { title: t('admin.analytics.stats.activeUsers'), value: '8,967', icon: Users, color: 'text-purple-600' },
    { title: t('admin.analytics.stats.revenue'), value: '$45.2K', icon: BarChart3, color: 'text-yellow-600' }
  ];

  return (
    <div className="space-y-6">
      <div className={isRTL ? 'text-right' : 'text-left'}>
        <h2 className="text-2xl font-bold text-foreground">{t('admin.analytics.title')}</h2>
        <p className="text-muted-foreground">{t('admin.analytics.description')}</p>
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
          <CardTitle>{t('admin.analytics.comingSoon')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t('admin.analytics.comingSoonDesc')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsManagement;
