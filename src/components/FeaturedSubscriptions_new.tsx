import { Star, Shield, Clock, Users, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const FeaturedSubscriptions = () => {
  const { t, isRTL } = useLanguage();
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const featuredAccounts = [
    {
      id: 'netflix-premium',
      nameAr: 'نتفليكس بريميوم',
      nameEn: 'Netflix Premium',
      descriptionAr: 'جودة 4K فائقة الوضوح، 4 شاشات، تحميل للمشاهدة بدون إنترنت',
      descriptionEn: '4K Ultra HD, 4 Screens, Download for offline viewing',
      price: '8.50',
      originalPrice: '15.99',
      currency: 'OMR',
      durationAr: 'شهر واحد',
      durationEn: '1 Month',
      rating: 4.9,
      reviews: 2341,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=80',
      features: ['4K Ultra HD', '4 Screens', 'Downloads', 'All Regions'],
      badgeAr: 'الأكثر شعبية',
      badgeEn: 'Most Popular',
      category: 'streaming',
      verified: true,
      instantDelivery: true,
      warranty: 'Lifetime'
    },
    {
      id: 'chatgpt-plus',
      nameAr: 'تشات جي بي تي بلس',
      nameEn: 'ChatGPT Plus',
      descriptionAr: 'الوصول إلى GPT-4، استجابة أسرع، أولوية الوصول',
      descriptionEn: 'GPT-4 Access, Faster Response, Priority Access',
      price: '7.50',
      originalPrice: '20.00',
      currency: 'OMR',
      durationAr: 'شهر واحد',
      durationEn: '1 Month',
      rating: 4.8,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
      features: ['GPT-4 Access', 'Faster Response', 'Priority Access', 'Advanced Features'],
      badgeAr: 'احترافي',
      badgeEn: 'Professional',
      category: 'productivity',
      verified: true,
      instantDelivery: true,
      warranty: '7 Days'
    },
    {
      id: 'youtube-premium',
      nameAr: 'يوتيوب بريميوم',
      nameEn: 'YouTube Premium',
      descriptionAr: 'يوتيوب بدون إعلانات، تشغيل في الخلفية، يوتيوب موسيك',
      descriptionEn: 'Ad-free YouTube, Background Play, YouTube Music',
      price: '5.50',
      originalPrice: '11.99',
      currency: 'OMR',
      durationAr: 'شهر واحد',
      durationEn: '1 Month',
      rating: 4.5,
      reviews: 2876,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80',
      features: ['Ad-free', 'Background Play', 'YouTube Music', 'Downloads'],
      badgeAr: 'شائع',
      badgeEn: 'Popular',
      category: 'streaming',
      verified: true,
      instantDelivery: true,
      warranty: 'Lifetime'
    }
  ];

  return (
    <section className={`py-20 bg-background ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-gold/10 text-accent-gold border-accent-gold/20">
            ⭐ {t('subscriptions.featured.title')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('subscriptions.title')} <span className="text-accent-gold">{t('subscriptions.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('subscriptions.featured.subtitle')}
          </p>
        </div>

        {/* Featured Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAccounts.map((account) => (
            <Card key={account.id} className="group overflow-hidden border-2 hover:border-accent-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-gold/10">
              {/* Account Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={account.image} 
                  alt={isRTL ? account.nameAr : account.nameEn}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Badges */}
                <div className={`absolute top-4 flex flex-col gap-2 ${isRTL ? 'right-4' : 'left-4'}`}>
                  <Badge className="bg-accent-gold text-primary-navy font-semibold">
                    {isRTL ? account.badgeAr : account.badgeEn}
                  </Badge>
                  {account.verified && (
                    <Badge className="bg-green-500 text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      {t('subscriptions.featured.verified')}
                    </Badge>
                  )}
                </div>

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 bg-white/20 hover:bg-white/30 ${isRTL ? 'left-4' : 'right-4'}`}
                  onClick={() => toggleFavorite(account.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(account.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </Button>
              </div>

              {/* Account Details */}
              <div className="p-6">
                {/* Name and Rating */}
                <div className={`flex justify-between items-start mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {isRTL ? account.nameAr : account.nameEn}
                    </h3>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{account.rating}</span>
                      <span className="text-sm text-muted-foreground">({account.reviews} {t('subscriptions.featured.reviews')})</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {isRTL ? account.descriptionAr : account.descriptionEn}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {account.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price and Duration */}
                <div className={`flex justify-between items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-2xl font-bold text-accent-gold">{account.price} {account.currency}</span>
                      <span className="text-sm text-muted-foreground line-through">{account.originalPrice} {account.currency}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">/ {isRTL ? account.durationAr : account.durationEn}</span>
                  </div>
                </div>

                {/* Service Icons */}
                <div className={`flex items-center gap-4 mb-4 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock className="h-4 w-4" />
                    <span>{t('subscriptions.featured.instantDelivery')}</span>
                  </div>
                  <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Shield className="h-4 w-4" />
                    <span>{t('subscriptions.featured.warranty')}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Button variant="outline" className="flex-1">
                    {t('subscriptions.featured.addToCart')}
                  </Button>
                  <Button className="flex-1 bg-accent-gold text-primary-navy hover:bg-accent-gold/90">
                    {t('subscriptions.featured.buyNow')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            {t('subscriptions.featured.viewAll')}
            <ChevronRight className={`h-4 w-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSubscriptions;
