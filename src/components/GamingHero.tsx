import { Search, Filter, Star, Shield, Clock, Zap, Gamepad2, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const GamingHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Games', nameAr: 'جميع الألعاب' },
    { id: 'fortnite', name: 'Fortnite', nameAr: 'فورتنايت' },
    { id: 'steam', name: 'Steam', nameAr: 'ستيم' },
    { id: 'roblox', name: 'Roblox', nameAr: 'روبلوكس' },
    { id: 'valorant', name: 'Valorant', nameAr: 'فالورانت' },
    { id: 'minecraft', name: 'Minecraft', nameAr: 'ماينكرافت' }
  ];

  const stats = [
    { icon: Trophy, number: '1000+', label: 'Gaming Accounts', labelAr: 'حساب ألعاب' },
    { icon: Zap, number: '24/7', label: 'Instant Delivery', labelAr: 'تسليم فوري' },
    { icon: Shield, number: '100%', label: 'Secure & Safe', labelAr: 'آمن ومحمي' },
    { icon: Users, number: '25K+', label: 'Happy Gamers', labelAr: 'لاعب سعيد' }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Gaming Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gaming Badge */}
          <Badge className="mb-6 bg-accent-gold/20 text-accent-gold border-accent-gold/30 text-lg px-6 py-2">
            🎮 Ultimate Gaming Hub
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Epic
            <span className="text-accent-gold"> Gaming</span>
            <br />
            <span className="text-accent-teal">Accounts</span>
          </h1>

          {/* Arabic Subtitle */}
          <p className="text-xl lg:text-2xl font-cairo text-accent-gold mb-4">
            حسابات الألعاب المميزة مع جميع الإضافات والمحتويات
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Discover premium gaming accounts with rare skins, exclusive items, and tons of progress. 
            From Fortnite accounts with legendary skins to Steam libraries with hundreds of games!
          </p>

          {/* Search and Filter Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <Input
                  placeholder="Search Fortnite, Steam, V-Bucks, Robux..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 text-lg"
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
                    {filter.name}
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
                <div className="text-sm text-white/80">{stat.label}</div>
                <div className="text-xs text-accent-gold font-cairo">{stat.labelAr}</div>
              </Card>
            ))}
          </div>

          {/* Popular Games Quick Access */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 px-4 py-2 text-sm">
              🎯 Fortnite Accounts
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-4 py-2 text-sm">
              🎮 Steam Libraries
            </Badge>
            <Badge className="bg-green-500/20 text-green-200 border-green-400/30 px-4 py-2 text-sm">
              💎 V-Bucks & Robux
            </Badge>
            <Badge className="bg-red-500/20 text-red-200 border-red-400/30 px-4 py-2 text-sm">
              🏆 Rare Skins & Items
            </Badge>
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
