import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Download,
  Star,
  Calendar,
  Users,
  Smartphone
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/hooks/useLanguage';

const AppsManagement = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const apps = [
    {
      id: 1,
      name: 'Instagram Plus',
      category: 'Social Media',
      icon: '📷',
      downloads: 12429,
      rating: 4.9,
      status: 'active',
      lastUpdated: '2025-09-01',
      version: '2.1.0',
      size: '45.2 MB'
    },
    {
      id: 2,
      name: 'Snapchat Plus',
      category: 'Social Media',
      icon: '👻',
      downloads: 8756,
      rating: 4.8,
      status: 'active',
      lastUpdated: '2025-08-28',
      version: '1.8.5',
      size: '38.7 MB'
    },
    {
      id: 3,
      name: 'WhatsApp Plus',
      category: 'Communication',
      icon: '💬',
      downloads: 15673,
      rating: 4.7,
      status: 'active',
      lastUpdated: '2025-09-02',
      version: '3.2.1',
      size: '52.1 MB'
    },
    {
      id: 4,
      name: 'YouTube Plus',
      category: 'Entertainment',
      icon: '📺',
      downloads: 23847,
      rating: 4.9,
      status: 'active',
      lastUpdated: '2025-08-30',
      version: '4.1.0',
      size: '67.8 MB'
    },
    {
      id: 5,
      name: 'TikTok Plus',
      category: 'Entertainment',
      icon: '🎬',
      downloads: 9234,
      rating: 4.6,
      status: 'pending',
      lastUpdated: '2025-09-03',
      version: '2.5.2',
      size: '41.3 MB'
    }
  ];

  const stats = [
    {
      title: t('admin.apps.stats.totalApps'),
      value: '342',
      icon: Smartphone,
      color: 'text-purple-600'
    },
    {
      title: t('admin.apps.stats.activeApps'),
      value: '298',
      icon: Eye,
      color: 'text-green-600'
    },
    {
      title: t('admin.apps.stats.totalDownloads'),
      value: '1.2M',
      icon: Download,
      color: 'text-blue-600'
    },
    {
      title: t('admin.apps.stats.averageRating'),
      value: '4.7',
      icon: Star,
      color: 'text-yellow-600'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500 text-white">{t('admin.apps.status.active')}</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500 text-white">{t('admin.apps.status.pending')}</Badge>;
      case 'inactive':
        return <Badge className="bg-red-500 text-white">{t('admin.apps.status.inactive')}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={isRTL ? 'text-right' : 'text-left'}>
          <h2 className="text-2xl font-bold text-foreground">
            {t('admin.apps.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('admin.apps.description')}
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t('admin.apps.addNew')}
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

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative flex-1">
              <Search className={`absolute top-3 h-4 w-4 text-muted-foreground ${
                isRTL ? 'right-3' : 'left-3'
              }`} />
              <Input
                placeholder={t('admin.apps.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
              />
            </div>
            <Button variant="outline">
              <Filter className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('admin.apps.filter')}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Apps Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.apps.table.app')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.apps.table.category')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.apps.table.downloads')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.apps.table.rating')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.apps.table.status')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.apps.table.lastUpdated')}
                </TableHead>
                <TableHead className={isRTL ? 'text-right' : 'text-left'}>
                  {t('admin.apps.table.actions')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApps.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>
                    <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="text-2xl">{app.icon}</div>
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-sm text-muted-foreground">
                          v{app.version} • {app.size}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{app.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Download className="h-4 w-4 text-muted-foreground" />
                      {app.downloads.toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      {app.rating}
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(app.status)}
                  </TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {app.lastUpdated}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{t('admin.apps.actions.title')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('admin.apps.actions.view')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('admin.apps.actions.edit')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('admin.apps.actions.download')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('admin.apps.actions.delete')}
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

export default AppsManagement;
