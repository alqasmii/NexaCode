import { Star, Shield, Clock, Users, ChevronRight, Heart, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const FeaturedGamingAccounts = () => {
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
      id: 'fortnite-og',
      name: 'Fortnite OG Account',
      nameAr: 'حساب فورتنايت الأصلي',
      description: 'Rare OG skins including Black Knight, Renegade Raider, and more',
      descriptionAr: 'سكينز نادرة أصلية تشمل الفارس الأسود وغارة المتمردين والمزيد',
      price: '450.00',
      originalPrice: '800.00',
      currency: 'OMR',
      level: 'Level 350+',
      levelAr: 'المستوى 350+',
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80',
      features: ['50+ Rare Skins', 'OG Emotes', 'Exclusive Pickaxes', 'Battle Pass Items'],
      badge: 'Ultra Rare',
      badgeAr: 'نادر جداً',
      category: 'fortnite',
      verified: true,
      rarity: 'legendary',
      warranty: '30 Days'
    },
    {
      id: 'steam-library',
      name: 'Steam Library 500+ Games',
      nameAr: 'مكتبة ستيم 500+ لعبة',
      description: 'Massive Steam library with AAA titles, indie games, and more',
      descriptionAr: 'مكتبة ستيم ضخمة مع ألعاب AAA والألعاب المستقلة والمزيد',
      price: '125.50',
      originalPrice: '2500.00',
      currency: 'OMR',
      level: 'Steam Level 80',
      levelAr: 'مستوى ستيم 80',
      rating: 4.8,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
      features: ['500+ Games', 'AAA Titles', 'Trading Cards', 'Achievements'],
      badge: 'Best Value',
      badgeAr: 'أفضل قيمة',
      category: 'steam',
      verified: true,
      rarity: 'epic',
      warranty: 'Lifetime'
    },
    {
      id: 'valorant-immortal',
      name: 'Valorant Immortal Account',
      nameAr: 'حساب فالورانت إمورتال',
      description: 'High-rank Valorant account with exclusive skins and agents',
      descriptionAr: 'حساب فالورانت عالي المستوى مع سكينز حصرية ووكلاء',
      price: '285.75',
      originalPrice: '450.00',
      currency: 'OMR',
      level: 'Immortal 2',
      levelAr: 'إمورتال 2',
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=400&q=80',
      features: ['Immortal Rank', 'Rare Skins', 'All Agents', 'Battle Pass'],
      badge: 'High Rank',
      badgeAr: 'رتبة عالية',
      category: 'valorant',
      verified: true,
      rarity: 'legendary',
      warranty: '15 Days'
    },
    {
      id: 'minecraft-premium',
      name: 'Minecraft Premium + Mods',
      nameAr: 'ماينكرافت بريميوم + مودز',
      description: 'Premium Minecraft account with exclusive texture packs and mods',
      descriptionAr: 'حساب ماينكرافت بريميوم مع حزم الخامات الحصرية والمودز',
      price: '18.50',
      originalPrice: '35.00',
      currency: 'OMR',
      level: 'Premium Access',
      levelAr: 'وصول بريميوم',
      rating: 4.6,
      reviews: 821,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
      features: ['Premium Account', 'Custom Skins', 'Mod Support', 'Realms Access'],
      badge: 'Popular',
      badgeAr: 'شائع',
      category: 'minecraft',
      verified: true,
      rarity: 'rare',
      warranty: 'Lifetime'
    },
    {
      id: 'roblox-premium',
      name: 'Roblox Premium + Robux',
      nameAr: 'روبلوكس بريميوم + روبوكس',
      description: 'Roblox account with Premium subscription and 50,000 Robux',
      descriptionAr: 'حساب روبلوكس مع اشتراك بريميوم و 50,000 روبوكس',
      price: '95.25',
      originalPrice: '150.00',
      currency: 'OMR',
      level: '50K Robux',
      levelAr: '50 ألف روبوكس',
      rating: 4.5,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80',
      features: ['Premium Subscription', '50K Robux', 'Exclusive Items', 'Trading Access'],
      badge: 'Premium',
      badgeAr: 'بريميوم',
      category: 'roblox',
      verified: true,
      rarity: 'epic',
      warranty: '7 Days'
    },
    {
      id: 'gta-online',
      name: 'GTA Online Modded Account',
      nameAr: 'حساب جراند ثيفت أوتو أونلاين محسن',
      description: 'High-level GTA Online account with billions in cash and unlocks',
      descriptionAr: 'حساب مستوى عالي في جي تي أي أونلاين مع مليارات النقود والفتحات',
      price: '58.75',
      originalPrice: '120.00',
      currency: 'OMR',
      level: 'Level 500+',
      levelAr: 'المستوى 500+',
      rating: 4.4,
      reviews: 278,
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=400&q=80',
      features: ['Billions in Cash', 'All Vehicles', 'Properties', 'Unlocks'],
      badge: 'Modded',
      badgeAr: 'محسن',
      category: 'gta',
      verified: true,
      rarity: 'epic',
      warranty: '3 Days'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'epic': return 'from-purple-400 to-pink-500';
      case 'rare': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return { text: 'LEGENDARY', color: 'bg-gradient-to-r from-yellow-500 to-orange-500' };
      case 'epic': return { text: 'EPIC', color: 'bg-gradient-to-r from-purple-500 to-pink-500' };
      case 'rare': return { text: 'RARE', color: 'bg-gradient-to-r from-blue-500 to-cyan-500' };
      default: return { text: 'COMMON', color: 'bg-gradient-to-r from-gray-500 to-gray-600' };
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-purple-500/20">
            🏆 Featured Gaming Accounts
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Epic <span className="text-purple-500">Gaming</span> Collection
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            مجموعة حسابات الألعاب المميزة
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium gaming accounts with rare items, high levels, and exclusive content. 
            All accounts are verified, secure, and come with detailed information.
          </p>
        </div>

        {/* Featured Gaming Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAccounts.map((account) => {
            const rarityBadge = getRarityBadge(account.rarity);
            return (
              <Card key={account.id} className="group overflow-hidden border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                {/* Account Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={account.image} 
                    alt={account.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Rarity Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getRarityColor(account.rarity)} opacity-20`} />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className={`${rarityBadge.color} text-white font-bold text-xs`}>
                      {rarityBadge.text}
                    </Badge>
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

                  {/* Level/Stats Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      <Trophy className="h-3 w-3 mr-1" />
                      {account.level}
                    </Badge>
                  </div>
                </div>

                {/* Account Details */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{account.name}</h3>
                      <p className="text-sm font-cairo text-purple-500">{account.nameAr}</p>
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

                  {/* Price and Level */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-purple-500">
                          {account.price} {account.currency}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {account.originalPrice} {account.currency}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {account.level} • {account.levelAr}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Warranty</p>
                      <p className="text-sm font-semibold text-accent-teal">{account.warranty}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-purple-600 text-white hover:bg-purple-700 font-semibold">
                      Buy Now
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                    <Button variant="outline" size="sm" className="px-3 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                      <Zap className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            View All Gaming Accounts
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGamingAccounts;
