import { Shield, Clock, HeadphonesIcon, RefreshCw, Star, Users, Award, Zap, Trophy, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GamingBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Verified Gaming Accounts',
      titleAr: 'حسابات ألعاب موثقة',
      description: 'All gaming accounts are verified, tested, and come with proof of items',
      descriptionAr: 'جميع حسابات الألعاب موثقة ومختبرة وتأتي مع إثبات العناصر',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      titleAr: 'تسليم فوري',
      description: 'Get your gaming account details immediately after purchase',
      descriptionAr: 'احصل على تفاصيل حساب الألعاب فوراً بعد الشراء',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: HeadphonesIcon,
      title: 'Gaming Support 24/7',
      titleAr: 'دعم الألعاب على مدار الساعة',
      description: 'Expert gaming support team available round-the-clock',
      descriptionAr: 'فريق دعم خبير في الألعاب متاح على مدار الساعة',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: RefreshCw,
      title: 'Account Protection',
      titleAr: 'حماية الحساب',
      description: 'Full account protection and replacement if any issues occur',
      descriptionAr: 'حماية كاملة للحساب واستبدال في حالة حدوث أي مشاكل',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '25,000+',
      label: 'Happy Gamers',
      labelAr: 'لاعب سعيد'
    },
    {
      icon: Trophy,
      number: '1,000+',
      label: 'Gaming Accounts',
      labelAr: 'حساب ألعاب'
    },
    {
      icon: Crown,
      number: '50+',
      label: 'Game Titles',
      labelAr: 'لعبة'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Gamer Rating',
      labelAr: 'تقييم اللاعبين'
    }
  ];

  const testimonials = [
    {
      name: 'Omar Al-Mansouri',
      nameAr: 'عمر المنصوري',
      location: 'Dubai, UAE',
      locationAr: 'دبي، الإمارات',
      rating: 5,
      comment: 'Got an amazing Fortnite account with rare OG skins. Delivery was instant and the account was exactly as described!',
      commentAr: 'حصلت على حساب فورتنايت رائع مع سكينز نادرة أصلية. التسليم كان فوري والحساب كان تماماً كما وُصف!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      verified: true,
      game: 'Fortnite'
    },
    {
      name: 'Layla Al-Zahra',
      nameAr: 'ليلى الزهراء',
      location: 'Riyadh, KSA',
      locationAr: 'الرياض، السعودية',
      rating: 5,
      comment: 'Perfect Steam library with 500+ games! Amazing value for money and great customer service.',
      commentAr: 'مكتبة ستيم مثالية مع 500+ لعبة! قيمة رائعة مقابل المال وخدمة عملاء ممتازة.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
      verified: true,
      game: 'Steam'
    },
    {
      name: 'Khalid Al-Rashid',
      nameAr: 'خالد الراشد',
      location: 'Muscat, Oman',
      locationAr: 'مسقط، عمان',
      rating: 5,
      comment: 'Bought V-Bucks and got them instantly! Safe, secure, and much cheaper than official prices.',
      commentAr: 'اشتريت في-باكس وحصلت عليها فوراً! آمن ومضمون وأرخص بكثير من الأسعار الرسمية.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      verified: true,
      game: 'Fortnite'
    }
  ];

  const popularGames = [
    { name: 'Fortnite', icon: '🎯', accounts: 250, color: 'bg-purple-500' },
    { name: 'Steam', icon: '🎮', accounts: 180, color: 'bg-blue-500' },
    { name: 'Valorant', icon: '⚡', accounts: 120, color: 'bg-red-500' },
    { name: 'Roblox', icon: '🟢', accounts: 200, color: 'bg-green-500' },
    { name: 'Minecraft', icon: '🟫', accounts: 150, color: 'bg-emerald-500' },
    { name: 'COD', icon: '🎯', accounts: 90, color: 'bg-orange-500' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-purple-500/20">
              🎮 Gaming Benefits
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose Our <span className="text-purple-500">Gaming Hub</span>
            </h2>
            <p className="text-xl font-cairo text-accent-teal mb-4">
              لماذا تختار مركز الألعاب لدينا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`p-6 text-center border-2 hover:border-purple-500/50 transition-all duration-300 ${benefit.bgColor}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-4`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm font-cairo text-purple-500 mb-3">{benefit.titleAr}</p>
                <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                <p className="text-xs font-cairo text-accent-gold">{benefit.descriptionAr}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Gaming Stats Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Gaming Community Stats</h3>
              <p className="text-lg font-cairo text-accent-gold">
                إحصائيات مجتمع الألعاب
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-accent-gold mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                  <div className="text-xs text-accent-gold font-cairo">{stat.labelAr}</div>
                </div>
              ))}
            </div>

            {/* Popular Games Quick Stats */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="text-xl font-bold text-center mb-6">Popular Gaming Accounts</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {popularGames.map((game, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${game.color} text-white mb-2`}>
                      <span className="text-lg">{game.icon}</span>
                    </div>
                    <div className="text-sm font-semibold">{game.name}</div>
                    <div className="text-xs text-white/70">{game.accounts} accounts</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Gaming Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent-gold/10 text-accent-gold border-accent-gold/20">
              🏆 Gamer Reviews
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-accent-gold">Gamers</span> Say
            </h2>
            <p className="text-xl font-cairo text-purple-500 mb-4">
              آراء اللاعبين الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-2 hover:border-purple-500/50 transition-all duration-300">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-sm text-muted-foreground mb-2 italic">
                  "{testimonial.comment}"
                </blockquote>
                <blockquote className="text-xs font-cairo text-purple-500 mb-4 italic">
                  "{testimonial.commentAr}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Badge className="bg-green-500 text-white text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-cairo text-purple-500">{testimonial.nameAr}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    <Badge variant="outline" className="text-xs mt-1 border-purple-500 text-purple-500">
                      {testimonial.game} Player
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingBenefits;
