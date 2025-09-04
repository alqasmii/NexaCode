import { useState } from 'react';
import { 
  Bell, 
  Mail, 
  User, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Crown, 
  Star,
  Users,
  Clock,
  Gift,
  Shield
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/hooks/useLanguage';

const AppWaitlist = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notifications: true,
    updates: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: Crown,
      titleKey: 'apps.waitlist.benefits.earlyAccess.title',
      descKey: 'apps.waitlist.benefits.earlyAccess.description',
      color: 'text-yellow-400'
    },
    {
      icon: Gift,
      titleKey: 'apps.waitlist.benefits.exclusiveOffers.title',
      descKey: 'apps.waitlist.benefits.exclusiveOffers.description',
      color: 'text-pink-400'
    },
    {
      icon: Bell,
      titleKey: 'apps.waitlist.benefits.notifications.title',
      descKey: 'apps.waitlist.benefits.notifications.description',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      titleKey: 'apps.waitlist.benefits.priority.title',
      descKey: 'apps.waitlist.benefits.priority.description',
      color: 'text-green-400'
    }
  ];

  const stats = [
    { number: '10,000+', key: 'apps.waitlist.stats.members', icon: Users },
    { number: '50+', key: 'apps.waitlist.stats.apps', icon: Sparkles },
    { number: t('apps.launchDate'), key: 'apps.waitlist.stats.launch', icon: Clock },
    { number: '100%', key: 'apps.waitlist.stats.free', icon: Star }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-b from-pink-900/50 to-purple-900/50">
        <div className={`container mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border-green-500/30 p-12 text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('apps.waitlist.success.title')}
              </h2>
              <p className="text-green-200 text-lg mb-6">
                {t('apps.waitlist.success.message')}
              </p>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <p className="text-green-100 text-sm">
                  {t('apps.waitlist.success.details')}
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-green-500 text-green-300 hover:bg-green-500/20"
              >
                {t('apps.waitlist.success.addAnother')}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-pink-900/50 to-purple-900/50">
      <div className={`container mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-500/20 text-pink-200 border-pink-500/30">
            {t('apps.waitlist.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('apps.waitlist.title')}
          </h2>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto">
            {t('apps.waitlist.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Waitlist Form */}
          <Card className="bg-white/10 backdrop-blur-md border-pink-500/30 p-8">
            <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center gap-3 mb-4 justify-center">
                <div className="p-3 bg-pink-500/20 rounded-full">
                  <Bell className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t('apps.waitlist.form.title')}
                </h3>
              </div>
              <p className="text-pink-200">
                {t('apps.waitlist.form.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  {t('apps.waitlist.form.name')}
                </Label>
                <div className="relative">
                  <User className={`absolute top-3 h-5 w-5 text-pink-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                  <Input
                    id="name"
                    type="text"
                    placeholder={t('apps.waitlist.form.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`bg-white/20 border-pink-400/50 text-white placeholder:text-pink-200 ${
                      isRTL ? 'pr-10 text-right' : 'pl-10 text-left'
                    }`}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  {t('apps.waitlist.form.email')}
                </Label>
                <div className="relative">
                  <Mail className={`absolute top-3 h-5 w-5 text-pink-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('apps.waitlist.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-white/20 border-pink-400/50 text-white placeholder:text-pink-200 ${
                      isRTL ? 'pr-10 text-right' : 'pl-10 text-left'
                    }`}
                    required
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <Label className="text-white">
                  {t('apps.waitlist.form.preferences')}
                </Label>
                
                <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Checkbox
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) => handleInputChange('notifications', checked as boolean)}
                    className="border-pink-400 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                  />
                  <Label htmlFor="notifications" className="text-pink-200 text-sm">
                    {t('apps.waitlist.form.notificationsLabel')}
                  </Label>
                </div>

                <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Checkbox
                    id="updates"
                    checked={formData.updates}
                    onCheckedChange={(checked) => handleInputChange('updates', checked as boolean)}
                    className="border-pink-400 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                  />
                  <Label htmlFor="updates" className="text-pink-200 text-sm">
                    {t('apps.waitlist.form.updatesLabel')}
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
              >
                <Bell className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('apps.waitlist.form.submit')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>

              <p className="text-center text-sm text-pink-300">
                {t('apps.waitlist.form.privacy')}
              </p>
            </form>
          </Card>

          {/* Benefits & Stats */}
          <div className="space-y-8">
            {/* Benefits */}
            <Card className="bg-white/5 backdrop-blur-md border-purple-500/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {t('apps.waitlist.benefits.title')}
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <benefit.icon className={`h-5 w-5 ${benefit.color}`} />
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 className="font-medium text-white mb-1">
                        {t(benefit.titleKey)}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {t(benefit.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Stats */}
            <Card className="bg-white/5 backdrop-blur-md border-purple-500/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {t('apps.waitlist.stats.title')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="p-3 bg-purple-500/20 rounded-full w-fit mx-auto mb-2">
                      <stat.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-purple-200">{t(stat.key)}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-purple-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('apps.waitlist.trust.secure')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('apps.waitlist.trust.noSpam')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('apps.waitlist.trust.unsubscribe')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWaitlist;
