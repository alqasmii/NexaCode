import { Clock, Smartphone, Download, Star, Users, Bell, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const AppsHero = () => {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');

  const stats = [
    { icon: Smartphone, number: '50+', key: 'apps.featured.title', color: 'text-blue-500' },
    { icon: Users, number: '10K+', key: 'apps.waitlist.title', color: 'text-green-500' },
    { icon: Star, number: '5.0', key: 'apps.store.security', color: 'text-yellow-500' },
    { icon: Clock, number: t('apps.launchDate'), key: 'apps.launchingSoon', color: 'text-purple-500' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-32 right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating App Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
            📱
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
            ⚡
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-float delay-2000">
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            🔥
          </div>
        </div>
        <div className="absolute top-1/2 right-1/6 animate-float delay-3000">
          <div className="w-18 h-18 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
            ✨
          </div>
        </div>
      </div>

      <div className={`relative z-10 container mx-auto px-4 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="text-center mb-16">
          {/* Apps Badge */}
          <Badge className="mb-6 bg-pink-500/20 text-pink-200 border-pink-500/30 px-6 py-2 text-lg">
            {t('apps.badge')}
          </Badge>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {t('apps.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              {t('apps.titleHighlight')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl font-cairo text-pink-200 mb-8">
            {t('apps.subtitle')}
          </p>

          {/* Description */}
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('apps.description')}
          </p>

          {/* Coming Soon Countdown */}
          <Card className="max-w-md mx-auto mb-12 p-6 bg-white/10 backdrop-blur-md border-purple-500/30">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('apps.comingSoon')}</h3>
              <p className="text-purple-200 mb-4">{t('apps.launchDate')}</p>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {t('apps.launchDate')}
              </div>
            </div>
          </Card>

          {/* Quick Email Signup */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="p-4 bg-white/10 backdrop-blur-md border-purple-500/30">
              <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Input
                  placeholder={t('apps.waitlist.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 bg-white/20 border-purple-400/50 text-white placeholder:text-purple-200 ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                />
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                  <Bell className={`h-4 w-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {t('apps.notifyMe')}
                </Button>
              </div>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-md border-purple-500/30 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-purple-500/20 rounded-full">
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-purple-200">{t(stat.key)}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
              <Bell className={`h-6 w-6 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('apps.joinWaitlist')}
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-500/20 px-8 py-4 text-lg">
              <Download className={`h-6 w-6 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('apps.featured.title')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-purple-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('apps.store.security')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('apps.store.updates')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('apps.store.support')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Zap className="h-8 w-8 text-purple-300" />
      </div>
    </section>
  );
};

export default AppsHero;
