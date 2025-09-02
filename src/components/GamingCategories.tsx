import { Gamepad2, Trophy, Users, Zap, Star, Crown, Target, Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GamingCategories = () => {
  const categories = [
    {
      id: 'battle-royale',
      name: 'Battle Royale',
      nameAr: 'باتل رويال',
      description: 'Fortnite, PUBG, Apex Legends accounts with rare items',
      descriptionAr: 'حسابات فورتنايت وببجي وآبكس ليجندز مع عناصر نادرة',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      accounts: 250,
      popular: true,
      examples: ['Fortnite OG', 'PUBG Mobile', 'Apex Legends', 'Warzone'],
      priceRange: '15 - 500 OMR',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'fps-shooters',
      name: 'FPS Shooters',
      nameAr: 'ألعاب إطلاق النار',
      description: 'Valorant, CS:GO, COD accounts with high ranks and skins',
      descriptionAr: 'حسابات فالورانت وسي إس جو وكول أوف ديوتي برتب عالية وسكينز',
      icon: Swords,
      color: 'from-red-500 to-orange-500',
      accounts: 180,
      trending: true,
      examples: ['Valorant Radiant', 'CS:GO Global', 'COD MW2', 'Rainbow Six'],
      priceRange: '25 - 400 OMR',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'mmorpg',
      name: 'MMORPG & RPG',
      nameAr: 'ألعاب تقمص الأدوار',
      description: 'WoW, Final Fantasy, Lost Ark high-level characters',
      descriptionAr: 'شخصيات عالية المستوى في وورلد أوف ووركرافت وفاينل فانتازي',
      icon: Crown,
      color: 'from-blue-500 to-cyan-500',
      accounts: 120,
      examples: ['WoW Max Level', 'FFXIV Endgame', 'Lost Ark T3', 'Elder Scrolls'],
      priceRange: '50 - 800 OMR',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'mobile-gaming',
      name: 'Mobile Gaming',
      nameAr: 'ألعاب الهاتف المحمول',
      description: 'Mobile Legends, Free Fire, Clash of Clans premium accounts',
      descriptionAr: 'حسابات مميزة في موبايل ليجندز وفري فاير وكلاش أوف كلانز',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500',
      accounts: 300,
      new: true,
      examples: ['Mobile Legends', 'Free Fire', 'Clash of Clans', 'PUBG Mobile'],
      priceRange: '10 - 200 OMR',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'steam-libraries',
      name: 'Steam Libraries',
      nameAr: 'مكتبات ستيم',
      description: 'Massive Steam accounts with hundreds of premium games',
      descriptionAr: 'حسابات ستيم ضخمة مع مئات الألعاب المميزة',
      icon: Trophy,
      color: 'from-indigo-500 to-purple-500',
      accounts: 85,
      examples: ['500+ Games', '1000+ Games', 'AAA Collection', 'Indie Bundle'],
      priceRange: '75 - 1500 OMR',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'sandbox-creative',
      name: 'Sandbox & Creative',
      nameAr: 'الألعاب الإبداعية',
      description: 'Minecraft, Roblox, creative game accounts with premium content',
      descriptionAr: 'حسابات ماينكرافت وروبلوكس والألعاب الإبداعية مع محتوى مميز',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      accounts: 200,
      examples: ['Minecraft Premium', 'Roblox Premium', 'Terraria', 'Garry\'s Mod'],
      priceRange: '5 - 150 OMR',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-purple-500/20">
            🎮 Gaming Categories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gaming <span className="text-purple-500">Categories</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            تصفح حسب فئات الألعاب المختلفة
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of gaming accounts organized by game genres. 
            From battle royale to RPGs, find the perfect account for your gaming style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group relative overflow-hidden border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`} />
              </div>
              
              {/* Content */}
              <div className="relative p-6 text-white">
                {/* Icon and Badges */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    {category.popular && (
                      <Badge className="bg-accent-gold text-primary-navy text-xs">
                        Popular
                      </Badge>
                    )}
                    {category.trending && (
                      <Badge className="bg-red-500 text-white text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    {category.new && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <Zap className="h-3 w-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Category Info */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-accent-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm font-cairo text-accent-gold mb-2">{category.nameAr}</p>
                <p className="text-sm mb-4 opacity-90">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                    {category.accounts} Accounts
                  </Badge>
                  <span className="text-xs opacity-80">
                    {category.priceRange}
                  </span>
                </div>

                {/* Examples */}
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                    Popular Games
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.slice(0, 2).map((example, index) => (
                      <span key={index} className="text-xs text-accent-gold">
                        {example}{index < 1 && category.examples.length > 1 ? ' •' : ''}
                      </span>
                    ))}
                    {category.examples.length > 2 && (
                      <span className="text-xs opacity-80">
                        +{category.examples.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300" 
                  variant="outline"
                >
                  Explore Category
                </Button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold/30 rounded-lg transition-all duration-300" />
            </Card>
          ))}
        </div>

        {/* Featured Gaming Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Additional <span className="text-purple-500">Gaming Services</span>
            </h3>
            <p className="text-lg font-cairo text-accent-teal mb-2">
              خدمات الألعاب الإضافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-2 hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 mb-4">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Account Boosting</h4>
              <p className="text-sm font-cairo text-purple-500 mb-3">تعزيز الحسابات</p>
              <p className="text-sm text-muted-foreground mb-4">
                Professional rank boosting and leveling services for all major games
              </p>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                Learn More
              </Button>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
                <Trophy className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Custom Builds</h4>
              <p className="text-sm font-cairo text-green-500 mb-3">إنشاء مخصص</p>
              <p className="text-sm text-muted-foreground mb-4">
                Get custom gaming accounts built to your exact specifications and preferences
              </p>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                Order Custom
              </Button>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 mb-4">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Instant Delivery</h4>
              <p className="text-sm font-cairo text-orange-500 mb-3">تسليم فوري</p>
              <p className="text-sm text-muted-foreground mb-4">
                Get your gaming account details instantly after purchase completion
              </p>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                How It Works
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingCategories;
