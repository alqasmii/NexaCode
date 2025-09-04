import { 
  Users, 
  Smartphone, 
  ShoppingBag, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  Download,
  Star,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/hooks/useLanguage';

const DashboardOverview = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    {
      title: t('admin.overview.stats.totalUsers'),
      value: '12,429',
      change: '+12.5%',
      changeType: 'increase',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: t('admin.overview.stats.totalApps'),
      value: '342',
      change: '+5.2%',
      changeType: 'increase',
      icon: Smartphone,
      color: 'text-purple-600'
    },
    {
      title: t('admin.overview.stats.totalSales'),
      value: '$45,231',
      change: '-2.1%',
      changeType: 'decrease',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: t('admin.overview.stats.totalOrders'),
      value: '1,429',
      change: '+8.3%',
      changeType: 'increase',
      icon: ShoppingBag,
      color: 'text-orange-600'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'user_registration',
      message: t('admin.overview.activity.userRegistered'),
      user: 'Ahmed Mohamed',
      time: '2 minutes ago',
      icon: Users
    },
    {
      id: 2,
      type: 'app_download',
      message: t('admin.overview.activity.appDownloaded'),
      item: 'Instagram Plus',
      time: '5 minutes ago',
      icon: Download
    },
    {
      id: 3,
      type: 'subscription_purchase',
      message: t('admin.overview.activity.subscriptionPurchased'),
      item: 'Netflix Premium',
      time: '12 minutes ago',
      icon: ShoppingBag
    },
    {
      id: 4,
      type: 'gaming_account_sold',
      message: t('admin.overview.activity.gamingAccountSold'),
      item: 'Fortnite Account',
      time: '25 minutes ago',
      icon: Star
    }
  ];

  const topApps = [
    { name: 'Instagram Plus', downloads: 2847, rating: 4.9 },
    { name: 'Snapchat Plus', downloads: 2156, rating: 4.8 },
    { name: 'WhatsApp Plus', downloads: 1923, rating: 4.7 },
    { name: 'YouTube Plus', downloads: 1654, rating: 4.6 },
    { name: 'TikTok Plus', downloads: 1432, rating: 4.5 }
  ];

  const categoryPerformance = [
    { name: t('admin.overview.categories.apps'), value: 85, color: 'bg-purple-500' },
    { name: t('admin.overview.categories.subscriptions'), value: 72, color: 'bg-green-500' },
    { name: t('admin.overview.categories.gaming'), value: 68, color: 'bg-red-500' },
    { name: t('admin.overview.categories.codes'), value: 54, color: 'bg-yellow-500' },
    { name: t('admin.overview.categories.services'), value: 41, color: 'bg-indigo-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isIncrease = stat.changeType === 'increase';
          
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`flex items-center text-sm ${
                  isIncrease ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isIncrease ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {stat.change} {t('admin.overview.stats.fromLastMonth')}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>{t('admin.overview.recentActivity.title')}</CardTitle>
            <CardDescription>
              {t('admin.overview.recentActivity.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className={`flex items-center gap-4 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <div className="p-2 bg-muted rounded-full">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <p className="text-sm font-medium">
                        {activity.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button variant="outline" className="w-full mt-4">
              {t('admin.overview.recentActivity.viewAll')}
            </Button>
          </CardContent>
        </Card>

        {/* Top Apps */}
        <Card>
          <CardHeader>
            <CardTitle>{t('admin.overview.topApps.title')}</CardTitle>
            <CardDescription>
              {t('admin.overview.topApps.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topApps.map((app, index) => (
                <div key={index} className={`flex items-center justify-between ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-sm font-medium">{app.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {app.downloads.toLocaleString()} {t('admin.overview.topApps.downloads')}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{app.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Performance */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.overview.categoryPerformance.title')}</CardTitle>
          <CardDescription>
            {t('admin.overview.categoryPerformance.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryPerformance.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className={`flex items-center justify-between ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}>
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-sm text-muted-foreground">{category.value}%</span>
                </div>
                <Progress value={category.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <CardTitle className="text-lg">{t('admin.overview.quickActions.addApp')}</CardTitle>
            <CardDescription>
              {t('admin.overview.quickActions.addAppDesc')}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-lg">{t('admin.overview.quickActions.manageUsers')}</CardTitle>
            <CardDescription>
              {t('admin.overview.quickActions.manageUsersDesc')}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-lg">{t('admin.overview.quickActions.viewAnalytics')}</CardTitle>
            <CardDescription>
              {t('admin.overview.quickActions.viewAnalyticsDesc')}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
