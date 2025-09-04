import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag, ShoppingBag, DollarSign, Star } from 'lucide-react';

const CodesManagement = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { title: t('admin.codes.stats.totalCodes'), value: '2,456', icon: Tag, color: 'text-yellow-600' },
    { title: t('admin.codes.stats.activeCodes'), value: '1,987', icon: ShoppingBag, color: 'text-blue-600' },
    { title: t('admin.codes.stats.totalSales'), value: '$18.7K', icon: DollarSign, color: 'text-green-600' },
    { title: t('admin.codes.stats.averageRating'), value: '4.5', icon: Star, color: 'text-purple-600' }
  ];

  return (
    <div className="space-y-6">
      <div className={isRTL ? 'text-right' : 'text-left'}>
        <h2 className="text-2xl font-bold text-foreground">{t('admin.codes.title')}</h2>
        <p className="text-muted-foreground">{t('admin.codes.description')}</p>
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
          <CardTitle>{t('admin.codes.comingSoon')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t('admin.codes.comingSoonDesc')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodesManagement;
