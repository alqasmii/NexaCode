import { Search, Filter, Star, Shield, Clock, Zap, Code, Gift, Percent, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const CodesHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Codes', nameAr: 'جميع الأكواد' },
    { id: 'game-codes', name: 'Game Codes', nameAr: 'أكواد الألعاب' },
    { id: 'discount', name: 'Discount Codes', nameAr: 'أكواد الخصم' },
    { id: 'steam', name: 'Steam Codes', nameAr: 'أكواد ستيم' },
    { id: 'gift-cards', name: 'Gift Cards', nameAr: 'بطاقات الهدايا' },
    { id: 'software', name: 'Software', nameAr: 'البرمجيات' }
  ];

  const stats = [
    { icon: Code, number: '5000+', label: 'Premium Codes', labelAr: 'كود مميز' },
    { icon: Zap, number: 'Instant', label: 'Code Delivery', labelAr: 'تسليم الكود' },
    { icon: Shield, number: '100%', label: 'Verified Codes', labelAr: 'أكواد موثقة' },
    { icon: Gift, number: '50%', label: 'Savings Up To', labelAr: 'توفير يصل إلى' }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
      {/* Code Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 30c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zM18 30c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zM54 30c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Codes Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fbd25c85cd64?auto=format&fit=crop&w=1200&q=80" 
          alt="Premium Digital Codes" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Codes Badge */}
          <Badge className="mb-6 bg-accent-gold/20 text-accent-gold border-accent-gold/30 text-lg px-6 py-2">
            🎫 Premium Digital Codes Hub
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium
            <span className="text-accent-gold"> Digital</span>
            <br />
            <span className="text-accent-teal">Codes</span>
          </h1>

          {/* Arabic Subtitle */}
          <p className="text-xl lg:text-2xl font-cairo text-accent-gold mb-4">
            أكواد رقمية مميزة للألعاب والتطبيقات والخدمات
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Unlock premium games, software, and services with our verified digital codes. 
            From game activation codes to discount vouchers - get instant access at unbeatable prices!
          </p>

          {/* Search and Filter Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <Input
                  placeholder="Search Steam, Xbox, PlayStation, Software codes..."
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

          {/* Codes Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border-emerald-400/30 p-4 text-center hover:border-accent-gold/50 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
                <div className="text-xs text-accent-gold font-cairo">{stat.labelAr}</div>
              </Card>
            ))}
          </div>

          {/* Popular Code Types Quick Access */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 px-4 py-2 text-sm">
              🎮 Game Activation Codes
            </Badge>
            <Badge className="bg-teal-500/20 text-teal-200 border-teal-400/30 px-4 py-2 text-sm">
              💳 Gift Card Codes
            </Badge>
            <Badge className="bg-cyan-500/20 text-cyan-200 border-cyan-400/30 px-4 py-2 text-sm">
              🎯 Discount Vouchers
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-4 py-2 text-sm">
              💻 Software Licenses
            </Badge>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4 text-accent-gold" />
              <span>Instant Code Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Verified & Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <Percent className="h-4 w-4 text-accent-teal" />
              <span>Up to 70% Savings</span>
            </div>
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

export default CodesHero;
