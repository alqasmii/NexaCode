import { Search, Filter, Zap, Users, Video, Settings, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesHero = () => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const serviceTypes = [
    { id: 'all', key: 'services.filters.allServices' },
    { id: 'pc-optimization', key: 'services.filters.pcOptimization' },
    { id: 'troubleshooting', key: 'services.filters.troubleshooting' },
    { id: 'development', key: 'services.filters.development' },
    { id: 'consulting', key: 'services.filters.consulting' }
  ];

  const quickStats = [
    {
      icon: Users,
      value: '5000+',
      key: 'services.stats.clientsServed',
      color: 'text-violet-500'
    },
    {
      icon: Video,
      value: '24/7',
      key: 'services.stats.liveSupport',
      color: 'text-blue-500'
    },
    {
      icon: Settings,
      value: '99%',
      key: 'services.stats.successRate',
      color: 'text-green-500'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Settings className="h-8 w-8 text-violet-400/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
          <Zap className="h-10 w-10 text-blue-400/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-float delay-2000">
          <Video className="h-6 w-6 text-purple-400/30" />
        </div>
      </div>

      <div className={`relative z-10 container mx-auto px-4 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="text-center mb-16">
          {/* Service Badge */}
          <Badge className="mb-6 bg-violet-500/20 text-violet-200 border-violet-500/30 px-6 py-2 text-lg">
            {t('services.badge')}
          </Badge>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('services.titleHighlight')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">{t('services.title')}</span>
            <br />
            <span className="text-4xl lg:text-5xl text-violet-200">{t('services.subtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-violet-100 max-w-4xl mx-auto mb-16 leading-relaxed">
            {t('services.description')}
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-violet-500/30">
              <div className={`flex flex-col lg:flex-row gap-4 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className={`absolute top-1/2 transform -translate-y-1/2 text-violet-300 h-5 w-5 ${isRTL ? 'right-3' : 'left-3'}`} />
                  <Input
                    placeholder={t('services.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`bg-white/20 border-violet-400/50 text-white placeholder:text-violet-200 h-12 ${
                      isRTL ? 'pr-12 text-right' : 'pl-12 text-left'
                    }`}
                  />
                </div>

                {/* Filter Dropdown */}
                <div className="relative">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="appearance-none bg-white/20 border border-violet-400/50 rounded-md px-4 py-3 pr-10 text-white h-12 min-w-[200px]"
                    title="Service Type Filter"
                  >
                    {serviceTypes.map((type) => (
                      <option key={type.id} value={type.id} className="bg-purple-900 text-white">
                        {t(type.key)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-300 h-5 w-5 pointer-events-none" />
                </div>

                {/* Search Button */}
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white px-8 h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Find Service
                </Button>
              </div>

              {/* Quick Filter Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {serviceTypes.slice(1).map((type) => (
                  <Button
                    key={type.id}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFilter(type.id)}
                    className={`border-violet-400/50 text-violet-200 hover:bg-violet-500/20 ${
                      selectedFilter === type.id ? 'bg-violet-500/30' : ''
                    }`}
                  >
                    {t(type.key)}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Service Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-6 bg-white/10 backdrop-blur-md border-violet-500/30 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-violet-500/20 rounded-full">
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <p className="text-violet-200 text-sm">{t(stat.key)}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
              <Video className={`h-6 w-6 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('services.actions.bookConsultation')}
            </Button>
            <Button size="lg" variant="outline" className="border-violet-400 text-violet-200 hover:bg-violet-500/20 px-8 py-4 text-lg">
              <Settings className={`h-6 w-6 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('services.actions.viewServices')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-violet-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('services.stats.liveSupport')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('services.benefits.expertsAvailable')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              <span className="text-sm">{t('services.benefits.qualityGuarantee')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-violet-300" />
      </div>
    </section>
  );
};

export default ServicesHero;
