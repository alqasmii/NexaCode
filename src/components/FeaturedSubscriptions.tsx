import { Star, Shield, Clock, Users, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const FeaturedSubscriptions = () => {
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
      name: 'Netflix Premium',
      nameAr: 'نتفليكس بريميوم',
      description: '4K Ultra HD, 4 Screens, Download for offline viewing',
      descriptionAr: 'جودة 4K فائقة الوضوح، 4 شاشات، تحميل للمشاهدة بدون إنترنت',
      price: '8.50',
      originalPrice: '15.99',
      currency: 'OMR',
      duration: '1 Month',
      durationAr: 'شهر واحد',
      rating: 4.9,
      reviews: 2341,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=80',
      features: ['4K Ultra HD', '4 Screens', 'Downloads', 'All Regions'],
      badge: 'Most Popular',
      badgeAr: 'الأكثر شعبية',
      category: 'streaming',
      verified: true,
      instantDelivery: true,
      warranty: 'Lifetime'
    },
    {
      id: 'chatgpt-plus',
      name: 'ChatGPT Plus',
      nameAr: 'تشات جي بي تي بلس',
      description: 'GPT-4 Access, Faster Response, Priority Access',
      descriptionAr: 'الوصول إلى GPT-4، استجابة أسرع، أولوية الوصول',
      price: '7.50',
      originalPrice: '20.00',
      currency: 'OMR',
      duration: '1 Month',
      durationAr: 'شهر واحد',
      rating: 4.8,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
      features: ['GPT-4 Access', 'Faster Response', 'Priority Support', 'Plugin Access'],
      badge: 'AI Powered',
      badgeAr: 'مدعوم بالذكاء الاصطناعي',
      category: 'productivity',
      verified: true,
      instantDelivery: true,
      warranty: '30 Days'
    },
    {
      id: 'spotify-premium',
      name: 'Spotify Premium',
      nameAr: 'سبوتيفاي بريميوم',
      description: 'Ad-free Music, Offline Downloads, High Quality Audio',
      descriptionAr: 'موسيقى بدون إعلانات، تحميل للاستماع بدون إنترنت، جودة صوت عالية',
      price: '4.25',
      originalPrice: '9.99',
      currency: 'OMR',
      duration: '1 Month',
      durationAr: 'شهر واحد',
      rating: 4.7,
      reviews: 3124,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80',
      features: ['Ad-free', 'Offline Mode', 'High Quality', 'Unlimited Skips'],
      badge: 'Best Value',
      badgeAr: 'أفضل قيمة',
      category: 'streaming',
      verified: true,
      instantDelivery: true,
      warranty: 'Lifetime'
    },
    {
      id: 'adobe-creative',
      name: 'Adobe Creative Cloud',
      nameAr: 'أدوبي كريتف كلاود',
      description: 'All Adobe Apps, 100GB Cloud Storage, Premium Fonts',
      descriptionAr: 'جميع تطبيقات أدوبي، 100 جيجا تخزين سحابي، خطوط مميزة',
      price: '18.75',
      originalPrice: '52.99',
      currency: 'OMR',
      duration: '1 Month',
      durationAr: 'شهر واحد',
      rating: 4.9,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80',
      features: ['All Apps', '100GB Storage', 'Premium Fonts', 'Cloud Sync'],
      badge: 'Professional',
      badgeAr: 'احترافي',
      category: 'productivity',
      verified: true,
      instantDelivery: true,
      warranty: '7 Days'
    },
    {
      id: 'discord-nitro',
      name: 'Discord Nitro',
      nameAr: 'ديسكورد نيترو',
      description: 'Enhanced Gaming Experience, Custom Emojis, HD Streaming',
      descriptionAr: 'تجربة ألعاب محسنة، رموز تعبيرية مخصصة، بث عالي الدقة',
      price: '3.85',
      originalPrice: '9.99',
      currency: 'OMR',
      duration: '1 Month',
      durationAr: 'شهر واحد',
      rating: 4.6,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=400&q=80',
      features: ['Custom Emojis', 'HD Streaming', 'File Uploads', 'Server Boosts'],
      badge: 'Gaming',
      badgeAr: 'الألعاب',
      category: 'gaming',
      verified: true,
      instantDelivery: true,
      warranty: 'Lifetime'
    },
    {
      id: 'youtube-premium',
      name: 'YouTube Premium',
      nameAr: 'يوتيوب بريميوم',
      description: 'Ad-free YouTube, Background Play, YouTube Music',
      descriptionAr: 'يوتيوب بدون إعلانات، تشغيل في الخلفية، يوتيوب موسيك',
      price: '5.50',
      originalPrice: '11.99',
      currency: 'OMR',
      duration: '1 Month',
      durationAr: 'شهر واحد',
      rating: 4.5,
      reviews: 2876,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80',
      features: ['Ad-free', 'Background Play', 'YouTube Music', 'Downloads'],
      badge: 'Popular',
      badgeAr: 'شائع',
      category: 'streaming',
      verified: true,
      instantDelivery: true,
      warranty: 'Lifetime'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-gold/10 text-accent-gold border-accent-gold/20">
            ⭐ Featured Accounts
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium <span className="text-accent-gold">Subscription</span> Accounts
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            حسابات اشتراكات مميزة وموثقة
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked premium accounts with instant delivery, lifetime warranty, and 24/7 support. 
            All accounts are verified and come with detailed setup instructions.
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
                  alt={account.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-accent-gold text-primary-navy font-semibold">
                    {account.badge}
                  </Badge>
                  {account.verified && (
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
                  onClick={() => toggleFavorite(account.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    favorites.includes(account.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white/80 text-gray-600 hover:bg-white'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(account.id) ? 'fill-current' : ''}`} />
                </Button>

                {/* Instant Delivery Badge */}
                {account.instantDelivery && (
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent-teal text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      Instant
                    </Badge>
                  </div>
                )}
              </div>

              {/* Account Details */}
              <div className="p-6">
                {/* Title and Rating */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{account.name}</h3>
                    <p className="text-sm font-cairo text-accent-gold">{account.nameAr}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{account.rating}</span>
                    <span className="text-xs text-muted-foreground">({account.reviews})</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-2">{account.description}</p>
                <p className="text-xs font-cairo text-accent-teal mb-4">{account.descriptionAr}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {account.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {account.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{account.features.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Price and Duration */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-accent-gold">
                        {account.price} {account.currency}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {account.originalPrice} {account.currency}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {account.duration} • {account.durationAr}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Warranty</p>
                    <p className="text-sm font-semibold text-accent-teal">{account.warranty}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-accent-gold text-primary-navy hover:bg-accent-gold/90 font-semibold">
                    Buy Now
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-navy">
            View All Subscription Accounts
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSubscriptions;
