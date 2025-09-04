import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  Users,
  Calendar,
  Star,
  ShoppingBag
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/useLanguage';

const SubscriptionsManagement = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const subscriptions = [
    {
      id: 1,
      service: 'Netflix Premium',
      provider: 'Netflix',
      price: '$15.99',
      duration: '1 Month',
      sales: 1429,
      rating: 4.9,
      status: 'active'
    },
    {
      id: 2,
      service: 'Spotify Premium',
      provider: 'Spotify',
      price: '$9.99',
      duration: '1 Month',
      sales: 2156,
      rating: 4.8,
      status: 'active'
    },
    {
      id: 3,
      service: 'Disney+ Premium',
      provider: 'Disney',
      price: '$12.99',
      duration: '1 Month',
      sales: 876,
      rating: 4.7,
      status: 'active'
    }
  ];

  const stats = [
    {
      title: t('admin.subscriptions.stats.totalServices'),
      value: '156',
      icon: ShoppingBag,
      color: 'text-green-600'
    },
    {
      title: t('admin.subscriptions.stats.activeSales'),
      value: '2.3K',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: t('admin.subscriptions.stats.totalRevenue'),
      value: '$45.2K',
      icon: DollarSign,
      color: 'text-yellow-600'
    },
    {
      title: t('admin.subscriptions.stats.averageRating'),
      value: '4.8',
      icon: Star,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={isRTL ? 'text-right' : 'text-left'}>
          <h2 className="text-2xl font-bold text-foreground">
            {t('admin.subscriptions.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('admin.subscriptions.description')}
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t('admin.subscriptions.addNew')}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
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
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Subscriptions Table */}
      <Card>
        <CardHeader>
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative flex-1">
              <Search className={`absolute top-3 h-4 w-4 text-muted-foreground ${
                isRTL ? 'right-3' : 'left-3'
              }`} />
              <Input
                placeholder={t('admin.subscriptions.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
              />
            </div>
            <Button variant="outline">
              <Filter className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('admin.subscriptions.filter')}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.subscriptions.table.service')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.subscriptions.table.price')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.subscriptions.table.sales')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.subscriptions.table.rating')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.subscriptions.table.status')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.subscriptions.table.actions')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((subscription) => (
                <TableRow key={subscription.id}>
                  <TableCell>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <div className="font-medium">{subscription.service}</div>
                      <div className="text-sm text-muted-foreground">
                        {subscription.provider} • {subscription.duration}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-500 text-white">{subscription.price}</Badge>
                  </TableCell>
                  <TableCell>
                    {subscription.sales.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      {subscription.rating}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-500 text-white">
                      {t('admin.subscriptions.status.active')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{t('admin.subscriptions.actions.title')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('admin.subscriptions.actions.view')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('admin.subscriptions.actions.edit')}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('admin.subscriptions.actions.delete')}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionsManagement;
