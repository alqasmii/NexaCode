import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Shield, Database, Globe } from 'lucide-react';

const SettingsManagement = () => {
  const { t, isRTL } = useLanguage();

  const settingsCards = [
    { title: t('admin.settings.general.title'), description: t('admin.settings.general.description'), icon: Settings, color: 'text-blue-600' },
    { title: t('admin.settings.security.title'), description: t('admin.settings.security.description'), icon: Shield, color: 'text-green-600' },
    { title: t('admin.settings.database.title'), description: t('admin.settings.database.description'), icon: Database, color: 'text-purple-600' },
    { title: t('admin.settings.website.title'), description: t('admin.settings.website.description'), icon: Globe, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      <div className={isRTL ? 'text-right' : 'text-left'}>
        <h2 className="text-2xl font-bold text-foreground">{t('admin.settings.title')}</h2>
        <p className="text-muted-foreground">{t('admin.settings.description')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsCards.map((setting, index) => {
          const Icon = setting.icon;
          return (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Icon className={`h-6 w-6 ${setting.color}`} />
                  <CardTitle>{setting.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{setting.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.settings.comingSoon')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t('admin.settings.comingSoonDesc')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsManagement;
