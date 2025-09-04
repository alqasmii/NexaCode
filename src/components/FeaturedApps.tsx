import { Star, Download, Clock, Shield, Zap, Crown, Plus, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const FeaturedApps = () => {
  const { t, isRTL } = useLanguage();

  const featuredApps = [
    {
      name: 'Instagram Plus',
      nameKey: 'apps.apps.instagramPlus.name',
      descKey: 'apps.apps.instagramPlus.description',
      icon: '📷',
      gradient: 'from-pink-500 to-purple-600',
      category: 'Social Media',
      features: ['Download Photos/Videos', 'No Ads', 'Privacy Mode', 'Themes'],
      rating: 4.9,
      downloads: '2M+',
      popular: true
    },
    {
      name: 'Snapchat Plus',
      nameKey: 'apps.apps.snapchatPlus.name',
      descKey: 'apps.apps.snapchatPlus.description',
      icon: '👻',
      gradient: 'from-yellow-400 to-yellow-600',
      category: 'Social Media',
      features: ['Save Snaps', 'No Screenshot Detection', 'Ghost Mode+', 'Filters'],
      rating: 4.8,
      downloads: '1.5M+',
      popular: true
    },
    {
      name: 'WhatsApp Plus',
      nameKey: 'apps.apps.whatsappPlus.name',
      descKey: 'apps.apps.whatsappPlus.description',
      icon: '💬',
      gradient: 'from-green-500 to-emerald-600',
      category: 'Communication',
      features: ['Hide Read Receipts', 'Auto Reply', 'Theme Customization', 'Privacy++'],
      rating: 4.7,
      downloads: '3M+',
      popular: false
    },
    {
      name: 'YouTube Premium Plus',
      nameKey: 'apps.apps.youtubePlus.name',
      descKey: 'apps.apps.youtubePlus.description',
      icon: '📺',
      gradient: 'from-red-500 to-red-700',
      category: 'Entertainment',
      features: ['No Ads', 'Background Play', 'Download Videos', 'Music Premium'],
      rating: 4.9,
      downloads: '4M+',
      popular: true
    },
    {
      name: 'Spotify Plus',
      nameKey: 'apps.apps.spotifyPlus.name',
      descKey: 'apps.apps.spotifyPlus.description',
      icon: '🎵',
      gradient: 'from-green-400 to-green-600',
      category: 'Music',
      features: ['No Ads', 'Unlimited Skips', 'High Quality', 'Download Music'],
      rating: 4.8,
      downloads: '2.8M+',
      popular: false
    },
    {
      name: 'TikTok Plus',
      nameKey: 'apps.apps.tiktokPlus.name',
      descKey: 'apps.apps.tiktokPlus.description',
      icon: '🎬',
      gradient: 'from-pink-500 to-indigo-600',
      category: 'Entertainment',
      features: ['Download Videos', 'No Watermark', 'Analytics+', 'Ad-Free'],
      rating: 4.6,
      downloads: '1.8M+',
      popular: false
    },
    {
      name: 'Ninja IPA',
      nameKey: 'apps.apps.ninjaIpa.name',
      descKey: 'apps.apps.ninjaIpa.description',
      icon: '🥷',
      gradient: 'from-gray-700 to-black',
      category: 'Tools',
      features: ['IPA Installer', 'Tweaks Manager', 'Bypass Detection', 'iOS Tools'],
      rating: 4.5,
      downloads: '800K+',
      popular: false
    },
    {
      name: 'TweakBox Plus',
      nameKey: 'apps.apps.tweakboxPlus.name',
      descKey: 'apps.apps.tweakboxPlus.description',
      icon: '🔧',
      gradient: 'from-blue-500 to-indigo-600',
      category: 'Tools',
      features: ['App Store++', 'Tweaked Apps', 'No Revokes', 'Premium Access'],
      rating: 4.7,
      downloads: '1.2M+',
      popular: false
    }
  ];

  const AppCard = ({ app, index }: { app: typeof featuredApps[0], index: number }) => (
    <Card className="group relative overflow-hidden bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
      {/* Popular Badge */}
      {app.popular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
            <Crown className="h-3 w-3 mr-1" />
            {t('apps.popular')}
          </Badge>
        </div>
      )}

      {/* App Icon & Gradient Background */}
      <div className={`relative h-32 bg-gradient-to-br ${app.gradient} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className={`relative text-6xl animate-float`}>
          {app.icon}
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/20 text-white border-0">
            {app.category}
          </Badge>
        </div>
      </div>

      <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* App Name & Rating */}
        <div className={`flex items-start justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {t(app.nameKey)}
            </h3>
            <div className={`flex items-center gap-2 text-sm text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>{app.rating}</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Download className="h-4 w-4 text-green-500" />
                <span>{app.downloads}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-purple-400">
            <Plus className="h-5 w-5" />
            <span className="text-sm font-medium">Plus</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {t(app.descKey)}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-white font-medium mb-2 text-sm">{t('apps.features.title')}</h4>
          <div className="flex flex-wrap gap-1">
            {app.features.map((feature, featureIndex) => (
              <Badge
                key={featureIndex}
                variant="secondary"
                className="bg-purple-500/20 text-purple-200 border-purple-500/30 text-xs"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <Clock className={`h-4 w-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
            {t('apps.comingSoon')}
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
          >
            <Shield className="h-4 w-4" />
          </Button>
        </div>

        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="text-center">
            <Clock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <p className="text-white font-medium">{t('apps.launchingSoon')}</p>
            <p className="text-purple-300 text-sm">{t('apps.launchDate')}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/50 to-indigo-900/50">
      <div className={`container mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-200 border-purple-500/30">
            {t('apps.featured.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('apps.featured.title')}
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            {t('apps.featured.subtitle')}
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredApps.map((app, index) => (
            <AppCard key={index} app={app} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8"
          >
            {t('apps.viewAll')}
            <ChevronRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200">{t('apps.stats.totalApps')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">15M+</div>
              <div className="text-purple-200">{t('apps.stats.totalDownloads')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-purple-200">{t('apps.stats.uptime')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
