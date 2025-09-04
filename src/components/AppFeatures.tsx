import { 
  Shield, 
  Zap, 
  Download, 
  Palette, 
  EyeOff, 
  Bell, 
  Crown, 
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Lock,
  Smartphone,
  RefreshCw
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const AppFeatures = () => {
  const { t, isRTL } = useLanguage();

  const mainFeatures = [
    {
      icon: Shield,
      titleKey: 'apps.features.security.title',
      descKey: 'apps.features.security.description',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      gradient: 'from-green-500 to-emerald-500',
      details: [
        'End-to-end encryption',
        'Privacy-first design',
        'No data collection',
        'Secure authentication'
      ]
    },
    {
      icon: Zap,
      titleKey: 'apps.features.performance.title',
      descKey: 'apps.features.performance.description',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      gradient: 'from-yellow-500 to-orange-500',
      details: [
        'Lightning fast',
        'Optimized code',
        'Low memory usage',
        'Battery efficient'
      ]
    },
    {
      icon: Palette,
      titleKey: 'apps.features.customization.title',
      descKey: 'apps.features.customization.description',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      gradient: 'from-purple-500 to-pink-500',
      details: [
        'Custom themes',
        'UI modifications',
        'Color schemes',
        'Layout options'
      ]
    },
    {
      icon: Download,
      titleKey: 'apps.features.downloading.title',
      descKey: 'apps.features.downloading.description',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      gradient: 'from-blue-500 to-indigo-500',
      details: [
        'Download any content',
        'High quality files',
        'Batch downloads',
        'No watermarks'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: EyeOff,
      titleKey: 'apps.features.privacy.title',
      descKey: 'apps.features.privacy.description'
    },
    {
      icon: Bell,
      titleKey: 'apps.features.notifications.title',
      descKey: 'apps.features.notifications.description'
    },
    {
      icon: Crown,
      titleKey: 'apps.features.premium.title',
      descKey: 'apps.features.premium.description'
    },
    {
      icon: RefreshCw,
      titleKey: 'apps.features.updates.title',
      descKey: 'apps.features.updates.description'
    },
    {
      icon: Lock,
      titleKey: 'apps.features.noRevoke.title',
      descKey: 'apps.features.noRevoke.description'
    },
    {
      icon: Smartphone,
      titleKey: 'apps.features.compatibility.title',
      descKey: 'apps.features.compatibility.description'
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: typeof mainFeatures[0], index: number }) => (
    <Card className={`group relative overflow-hidden bg-white/5 backdrop-blur-md ${feature.borderColor} hover:border-opacity-60 transition-all duration-500 hover:scale-105`}>
      {/* Feature Header */}
      <div className={`relative h-20 bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/20" />
        <feature.icon className="relative h-8 w-8 text-white" />
      </div>

      <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Feature Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {t(feature.titleKey)}
        </h3>

        {/* Feature Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {t(feature.descKey)}
        </p>

        {/* Feature Details */}
        <div className="space-y-2 mb-6">
          {feature.details.map((detail, detailIndex) => (
            <div key={detailIndex} className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <CheckCircle className={`h-4 w-4 ${feature.color} flex-shrink-0`} />
              <span className="text-gray-300">{detail}</span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <Button 
          size="sm" 
          variant="outline" 
          className={`w-full ${feature.borderColor} ${feature.color} hover:${feature.bgColor} group-hover:scale-105 transition-all`}
        >
          {t('apps.features.learnMore')}
          <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'} group-hover:translate-x-1 transition-transform`} />
        </Button>
      </div>

      {/* Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    </Card>
  );

  const AdditionalFeatureItem = ({ feature }: { feature: typeof additionalFeatures[0] }) => (
    <div className={`flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}>
      <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
        <feature.icon className="h-5 w-5 text-purple-400" />
      </div>
      <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
        <h4 className="font-medium text-white mb-1 group-hover:text-purple-300 transition-colors">
          {t(feature.titleKey)}
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          {t(feature.descKey)}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/50 to-pink-900/50">
      <div className={`container mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-200 border-purple-500/30">
            {t('apps.features.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('apps.features.title')}
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            {t('apps.features.subtitle')}
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('apps.features.additional.title')}
            </h3>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              {t('apps.features.additional.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalFeatures.map((feature, index) => (
              <AdditionalFeatureItem key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Premium Features Banner */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8">
          <div className={`flex flex-col lg:flex-row items-center gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Sparkles className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {t('apps.features.premium.banner.title')}
                  </h3>
                  <p className="text-purple-200">
                    {t('apps.features.premium.banner.subtitle')}
                  </p>
                </div>
              </div>
              <p className="text-purple-100 mb-6 leading-relaxed">
                {t('apps.features.premium.banner.description')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  'apps.features.premium.banner.feature1',
                  'apps.features.premium.banner.feature2',
                  'apps.features.premium.banner.feature3',
                  'apps.features.premium.banner.feature4'
                ].map((key, index) => (
                  <div key={index} className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
              >
                <Crown className={`h-6 w-6 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('apps.features.premium.getAccess')}
              </Button>
              <p className="text-purple-300 text-sm mt-2">
                {t('apps.features.premium.comingSoon')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
