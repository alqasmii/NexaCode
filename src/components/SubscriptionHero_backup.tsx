import { Search, Filter, Star, Shield, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const SubscriptionHero = () => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', key: 'subscriptions.filters.all' },
    { id: 'streaming', key: 'subscriptions.filters.streaming' },
    { id: 'productivity', key: 'subscriptions.filters.productivity' },
    { id: 'gaming', key: 'subscriptions.filters.gaming' },
    { id: 'education', key: 'subscriptions.filters.education' },
    { id: 'business', key: 'subscriptions.filters.business' }
  ];

  const stats = [
    { icon: Shield, number: '500+', key: 'subscriptions.stats.verifiedAccounts' },
    { icon: Clock, number: '24/7', key: 'subscriptions.stats.instantDelivery' },
    { icon: Star, number: '4.9', key: 'subscriptions.stats.customerRating' },
    { icon: Zap, number: '1M+', key: 'subscriptions.stats.happyCustomers' }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-primary-navy via-secondary-purple to-accent-teal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80" 
          alt="Premium Subscriptions" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/80 to-secondary-purple/60"></div>
      </div>

      <div className={`relative z-10 container mx-auto px-4 pt-24 pb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-accent-gold/20 text-accent-gold border-accent-gold/30 text-lg px-6 py-2">
            {t('subscriptions.badge')}
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('subscriptions.title')}
            <br />
            <span className="text-accent-teal">{t('subscriptions.titleHighlight')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl font-cairo text-accent-gold mb-4">
            {t('subscriptions.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('subscriptions.description')}
          </p>

          {/* Search and Filter Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 mb-8">
            <div className={`flex flex-col lg:flex-row gap-4 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <Search className={`absolute top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5 ${isRTL ? 'right-3' : 'left-3'}`} />
                <Input
                  placeholder={t('subscriptions.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 text-lg ${
                    isRTL ? 'pr-10 text-right' : 'pl-10 text-left'
                  }`}
                />
              </div>

              {/* Filter Dropdown */}
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

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <stat.icon className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/80">{t(stat.key)}</div>
              </Card>
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

export default SubscriptionHero;
