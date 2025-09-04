import { Search, Filter, Star, Shield, Clock, Zap, Gamepad2, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const GamingHero = () => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', key: 'gaming.filters.allGames' },
    { id: 'fortnite', key: 'gaming.filters.fortnite' },
    { id: 'steam', key: 'gaming.filters.steam' },
    { id: 'roblox', key: 'gaming.filters.roblox' },
    { id: 'valorant', key: 'gaming.filters.valorant' },
    { id: 'minecraft', key: 'gaming.filters.minecraft' }
  ];

  const stats = [
    { icon: Trophy, number: '1000+', key: 'gaming.stats.gamingAccounts' },
    { icon: Zap, number: '24/7', key: 'gaming.stats.instantDelivery' },
    { icon: Shield, number: '100%', key: 'gaming.stats.secureAndSafe' },
    { icon: Users, number: '25K+', key: 'gaming.stats.happyGamers' }
  ];

  const quickAccessItems = [
    { key: 'gaming.quickAccess.fortniteAccounts', bgColor: 'bg-purple-500/20', textColor: 'text-purple-200', borderColor: 'border-purple-400/30' },
    { key: 'gaming.quickAccess.steamLibraries', bgColor: 'bg-blue-500/20', textColor: 'text-blue-200', borderColor: 'border-blue-400/30' },
    { key: 'gaming.quickAccess.vbucksRobux', bgColor: 'bg-green-500/20', textColor: 'text-green-200', borderColor: 'border-green-400/30' },
    { key: 'gaming.quickAccess.rareSkinsItems', bgColor: 'bg-red-500/20', textColor: 'text-red-200', borderColor: 'border-red-400/30' }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Gaming Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      {/* Hero Gaming Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" 
          alt="Gaming Universe" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/60"></div>
      </div>

      <div className={`relative z-10 container mx-auto px-4 pt-24 pb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Gaming Badge */}
          <Badge className="mb-6 bg-accent-gold/20 text-accent-gold border-accent-gold/30 text-lg px-6 py-2">
            {t('gaming.badge')}
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('gaming.title')}
            <br />
            <span className="text-accent-teal">{t('gaming.titleHighlight')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl font-cairo text-accent-gold mb-4">
            {t('gaming.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('gaming.description')}
          </p>

          {/* Search and Filter Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 mb-8">
            <div className={`flex flex-col lg:flex-row gap-4 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <Search className={`absolute top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5 ${isRTL ? 'right-3' : 'left-3'}`} />
                <Input
                  placeholder={t('gaming.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 text-lg ${
                    isRTL ? 'pr-10 text-right' : 'pl-10 text-left'
                  }`}
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                {filters.slice(0, 4).map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "outline"}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`${
                      selectedFilter === filter.id
                        ? 'bg-accent-gold text-primary-navy hover:bg-accent-gold/90'
                        : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                    }`}
                  >
                    {t(filter.key)}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Gaming Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-purple-400/30 p-4 text-center hover:border-accent-gold/50 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/80">{t(stat.key)}</div>
              </Card>
            ))}
          </div>

          {/* Popular Games Quick Access */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {quickAccessItems.map((item, index) => (
              <Badge key={index} className={`${item.bgColor} ${item.textColor} ${item.borderColor} px-4 py-2 text-sm`}>
                {t(item.key)}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default GamingHero;
