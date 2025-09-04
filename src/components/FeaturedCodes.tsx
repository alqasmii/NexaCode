import { Star, Shield, Clock, Key, ChevronRight, Heart, Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const FeaturedCodes = () => {
  const { t, isRTL } = useLanguage();
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const featuredCodes = [
    {
      id: 'steam-wallet-50',
      name: 'Steam Wallet Code $50',
      nameAr: 'كود محفظة ستيم 50 دولار',
      description: 'Add $50 to your Steam wallet instantly. Works globally.',
      descriptionAr: 'أضف 50 دولار لمحفظة ستيم فوراً. يعمل عالمياً.',
      price: '38.25',
      originalPrice: '50.00',
      currency: 'OMR',
      platform: 'Steam',
      platformAr: 'ستيم',
      rating: 4.9,
      reviews: 1847,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
      features: ['Global Region', 'Instant Delivery', 'No Expiry', 'Email Delivery'],
      badge: 'Best Seller',
      badgeAr: 'الأكثر مبيعاً',
      category: 'gift-cards',
      verified: true,
      instantDelivery: true,
      region: 'Global'
    },
    {
      id: 'xbox-game-pass-3m',
      name: 'Xbox Game Pass Ultimate 3 Months',
      nameAr: 'إكس بوكس جيم باس التميمة 3 أشهر',
      description: 'Access 100+ games, Xbox Live Gold, and EA Play included.',
      descriptionAr: 'الوصول لأكثر من 100 لعبة، إكس بوكس لايف جولد، وإي إيه بلاي.',
      price: '28.50',
      originalPrice: '44.99',
      currency: 'OMR',
      platform: 'Xbox',
      platformAr: 'إكس بوكس',
      rating: 4.8,
      reviews: 923,
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80',
      features: ['100+ Games', 'Xbox Live Gold', 'EA Play', 'Cloud Gaming'],
      badge: 'Popular',
      badgeAr: 'شائع',
      category: 'gaming-subscriptions',
      verified: true,
      instantDelivery: true,
      region: 'Global'
    },
    {
      id: 'psn-card-25',
      name: 'PlayStation Store Gift Card $25',
      nameAr: 'بطاقة هدايا بلايستيشن ستور 25 دولار',
      description: 'Buy games, add-ons, and more from PlayStation Store.',
      descriptionAr: 'اشتري الألعاب والإضافات والمزيد من متجر بلايستيشن.',
      price: '19.25',
      originalPrice: '25.00',
      currency: 'OMR',
      platform: 'PlayStation',
      platformAr: 'بلايستيشن',
      rating: 4.7,
      reviews: 1456,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=400&q=80',
      features: ['PS4 & PS5', 'Digital Games', 'DLC Content', 'Movies & TV'],
      badge: 'Great Value',
      badgeAr: 'قيمة رائعة',
      category: 'gift-cards',
      verified: true,
      instantDelivery: true,
      region: 'US'
    },
    {
      id: 'office-365-1year',
      name: 'Microsoft Office 365 Personal 1 Year',
      nameAr: 'مايكروسوفت أوفيس 365 شخصي سنة واحدة',
      description: 'Full Office suite with 1TB OneDrive storage included.',
      descriptionAr: 'مجموعة أوفيس كاملة مع 1 تيرابايت تخزين ون درايف.',
      price: '45.75',
      originalPrice: '69.99',
      currency: 'OMR',
      platform: 'Microsoft',
      platformAr: 'مايكروسوفت',
      rating: 4.6,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80',
      features: ['Word, Excel, PowerPoint', '1TB OneDrive', 'Premium Templates', 'Mobile Apps'],
      badge: 'Professional',
      badgeAr: 'احترافي',
      category: 'software',
      verified: true,
      instantDelivery: true,
      region: 'Global'
    },
    {
      id: 'google-play-20',
      name: 'Google Play Gift Card $20',
      nameAr: 'بطاقة هدايا جوجل بلاي 20 دولار',
      description: 'Buy apps, games, movies, books and more from Google Play.',
      descriptionAr: 'اشتري التطبيقات والألعاب والأفلام والكتب من جوجل بلاي.',
      price: '15.50',
      originalPrice: '20.00',
      currency: 'OMR',
      platform: 'Google Play',
      platformAr: 'جوجل بلاي',
      rating: 4.5,
      reviews: 2134,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
      features: ['Android Apps', 'Mobile Games', 'Movies & Books', 'In-app Purchases'],
      badge: 'Mobile',
      badgeAr: 'الهاتف المحمول',
      category: 'gift-cards',
      verified: true,
      instantDelivery: true,
      region: 'US'
    },
    {
      id: 'spotify-premium-6m',
      name: 'Spotify Premium 6 Months Code',
      nameAr: 'كود سبوتيفاي بريميوم 6 أشهر',
      description: 'Ad-free music streaming with offline downloads and high quality.',
      descriptionAr: 'بث موسيقى بدون إعلانات مع تحميل أوفلاين وجودة عالية.',
      price: '22.75',
      originalPrice: '35.94',
      currency: 'OMR',
      platform: 'Spotify',
      platformAr: 'سبوتيفاي',
      rating: 4.4,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80',
      features: ['Ad-free Music', 'Offline Downloads', 'High Quality Audio', 'Unlimited Skips'],
      badge: 'Music',
      badgeAr: 'موسيقى',
      category: 'entertainment',
      verified: true,
      instantDelivery: true,
      region: 'Global'
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'steam': return 'bg-blue-500';
      case 'xbox': return 'bg-green-500';
      case 'playstation': return 'bg-blue-600';
      case 'microsoft': return 'bg-cyan-500';
      case 'google play': return 'bg-emerald-500';
      case 'spotify': return 'bg-green-400';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className={`container mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
            {t('codes.featured.title')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('codes.featured.title')} <span className="text-emerald-500">{t('codes.titleHighlight')}</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            {t('codes.featured.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('codes.description')}
          </p>
        </div>

        {/* Featured Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCodes.map((code) => (
            <Card key={code.id} className="group overflow-hidden border-2 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              {/* Code Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={code.image} 
                  alt={code.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className={`${getPlatformColor(code.platform)} text-white font-semibold`}>
                    {code.platform}
                  </Badge>
                  <Badge className="bg-accent-gold text-primary-navy font-semibold">
                    {code.badge}
                  </Badge>
                  {code.verified && (
                    <Badge className="bg-green-500 text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(code.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    favorites.includes(code.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white/80 text-gray-600 hover:bg-white'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(code.id) ? 'fill-current' : ''}`} />
                </Button>

                {/* Instant Delivery Badge */}
                {code.instantDelivery && (
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-emerald-600 text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {t('codes.featured.instantDelivery')}
                    </Badge>
                  </div>
                )}

                {/* Region Badge */}
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-blue-600 text-white">
                    🌍 {code.region}
                  </Badge>
                </div>
              </div>

              {/* Code Details */}
              <div className="p-6">
                {/* Title and Rating */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {isRTL ? code.nameAr : code.name}
                    </h3>
                    <p className="text-sm font-cairo text-emerald-500">
                      {isRTL ? code.name : code.nameAr}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{code.rating}</span>
                    <span className="text-xs text-muted-foreground">({code.reviews} {t('codes.featured.reviews')})</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {isRTL ? code.descriptionAr : code.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {code.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {code.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{code.features.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Price and Platform */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-emerald-500">
                        {code.price} {code.currency}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {code.originalPrice} {code.currency}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {code.platform} • {code.platformAr}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Savings</p>
                    <p className="text-sm font-semibold text-green-600">
                      {Math.round(((parseFloat(code.originalPrice) - parseFloat(code.price)) / parseFloat(code.originalPrice)) * 100)}% OFF
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Button className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700 font-semibold">
                    {t('codes.featured.buyNow')}
                    <Key className={`h-4 w-4 ${isRTL ? 'mr-1' : 'ml-1'}`} />
                  </Button>
                  <Button variant="outline" size="sm" className="px-3 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                {/* Code Features */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3 text-emerald-500" />
                    <span>{t('codes.trust.instantCodeDelivery')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-blue-500" />
                    <span>{t('codes.featured.verified')}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
            {t('codes.categories.viewAll')}
            <ChevronRight className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCodes;
