import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Star, Download, Monitor, Gamepad2, Shield, Zap, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GamePurchase = () => {
  const { toast } = useToast();

  const games = [
    {
      id: 'cyberpunk-2077',
      name: 'Cyberpunk 2077',
      logo: '🌆',
      description: 'مغامرة خيال علمي ملحمية في عالم مفتوح مليء بالتقنيات المتقدمة',
      price: '120 ريال',
      originalPrice: '160 ريال',
      platform: 'Steam',
      features: [
        'النسخة الكاملة مع التحديثات',
        'إضافات حصرية مجانية',
        'دعم اللغة العربية',
        'رسومات 4K مدعومة',
        'لعب متعدد اللاعبين',
        'تفعيل فوري'
      ],
      category: 'RPG',
      rating: '4.8',
      releaseYear: '2020',
      popular: true,
      gradient: 'from-cyan-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'call-of-duty-mw3',
      name: 'Call of Duty: MW3',
      logo: '🔫',
      description: 'أحدث إصدار من سلسلة كول أوف ديوتي مع حملة مثيرة ولعب متعدد محسن',
      price: '200 ريال',
      originalPrice: '250 ريال',
      platform: 'Battle.net',
      features: [
        'حملة لاعب واحد ملحمية',
        'متعدد اللاعبين محسن',
        'وضع Zombies الجديد',
        'خرائط حصرية',
        'أسلحة متطورة',
        'باتل باس مجاني'
      ],
      category: 'FPS',
      rating: '4.9',
      releaseYear: '2023',
      popular: true,
      gradient: 'from-orange-500 to-red-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'elden-ring',
      name: 'Elden Ring',
      logo: '⚔️',
      description: 'لعبة أكشن RPG ملحمية من FromSoftware في عالم خيالي مذهل',
      price: '140 ريال',
      originalPrice: '180 ريال',
      platform: 'Steam',
      features: [
        'عالم مفتوح شاسع',
        'قصة من جورج آر. آر. مارتن',
        'قتال تكتيكي متقدم',
        'استكشاف لا محدود',
        'رؤساء ملحميين',
        'لعب تعاوني اختياري'
      ],
      category: 'Action RPG',
      rating: '4.9',
      releaseYear: '2022',
      popular: true,
      gradient: 'from-amber-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'fifa-24',
      name: 'EA Sports FC 24',
      logo: '⚽',
      description: 'أحدث لعبة كرة قدم من EA Sports مع تحديثات الفرق والبطولات',
      price: '180 ريال',
      originalPrice: '220 ريال',
      platform: 'Origin',
      features: [
        'جميع الدوريات الرسمية',
        'وضع Ultimate Team',
        'Career Mode محسن',
        'لاعبين محدثين',
        'بطولات عالمية',
        'لعب محلي ومتصل'
      ],
      category: 'رياضة',
      rating: '4.6',
      releaseYear: '2023',
      popular: false,
      gradient: 'from-green-500 to-emerald-600',
      bgImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'spiderman-remastered',
      name: 'Spider-Man Remastered',
      logo: '🕷️',
      description: 'مغامرة الرجل العنكبوت في نيويورك مع رسومات محسنة وأداء مثالي',
      price: '100 ريال',
      originalPrice: '130 ريال',
      platform: 'Steam',
      features: [
        'رسومات محسنة للـ PC',
        'دعم Ray Tracing',
        'DLC مضمنة',
        'تحكم محسن',
        'أداء 60 FPS+',
        'قصة مكتملة'
      ],
      category: 'Action',
      rating: '4.8',
      releaseYear: '2022',
      popular: false,
      gradient: 'from-red-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'hogwarts-legacy',
      name: 'Hogwarts Legacy',
      logo: '🏰',
      description: 'عش مغامرة سحرية في عالم هاري بوتر واستكشف هوجوارتس',
      price: '160 ريال',
      originalPrice: '200 ريال',
      platform: 'Steam',
      features: [
        'عالم هوجوارتس مفتوح',
        'تعلم السحر والوصفات',
        'شخصية قابلة للتخصيص',
        'مهام جانبية متنوعة',
        'مخلوقات سحرية',
        'قصة أصلية مثيرة'
      ],
      category: 'Adventure',
      rating: '4.7',
      releaseYear: '2023',
      popular: false,
      gradient: 'from-purple-500 to-indigo-600',
      bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (gameName: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${gameName} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'RPG': return <Shield className="h-4 w-4" />;
      case 'FPS': return <Zap className="h-4 w-4" />;
      case 'Action RPG': return <Trophy className="h-4 w-4" />;
      case 'رياضة': return <Gamepad2 className="h-4 w-4" />;
      case 'Action': return <Star className="h-4 w-4" />;
      case 'Adventure': return <Monitor className="h-4 w-4" />;
      default: return <Download className="h-4 w-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch(platform) {
      case 'Steam': return 'bg-blue-500 text-white';
      case 'Epic Games': return 'bg-gray-800 text-white';
      case 'Battle.net': return 'bg-blue-600 text-white';
      case 'Origin': return 'bg-orange-500 text-white';
      case 'PlayStation': return 'bg-blue-700 text-white';
      case 'Xbox': return 'bg-green-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              شراء الألعاب
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🛒 اشترِ ألعابك المفضلة رسمياً
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على أحدث الألعاب من Steam، Epic Games، PlayStation، Xbox بأفضل الأسعار مع التفعيل الفوري والضمان الكامل
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Header with Background */}
                  <div className="relative">
                    <div 
                      className="h-32 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${game.bgImage})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${game.gradient} opacity-80`}></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {game.popular && (
                          <Badge className="bg-yellow-500 text-white border-0">
                            <Star className="h-3 w-3 ml-1" />
                            الأكثر طلباً
                          </Badge>
                        )}
                        <Badge className={getPlatformColor(game.platform)}>
                          {game.platform}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {getCategoryIcon(game.category)}
                          <span className="mr-1">{game.category}</span>
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="text-4xl">{game.logo}</div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {game.releaseYear}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{game.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-right">
                      {game.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
                      {game.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Pricing */}
                    <div className="mb-6 text-right">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <span className="text-sm text-gray-500 line-through">
                          {game.originalPrice}
                        </span>
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                          {game.price}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                        وفر {((parseFloat(game.originalPrice.replace(/\D/g, '')) - parseFloat(game.price.replace(/\D/g, ''))) / parseFloat(game.originalPrice.replace(/\D/g, '')) * 100).toFixed(0)}%
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {game.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300 text-right">
                          <span className="flex-1 text-right">{feature}</span>
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button 
                      onClick={() => handleAddToCart(game.name, game.price)}
                      className={`w-full bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-200`}
                    >
                      <ShoppingCart className="h-4 w-4 ml-2" />
                      إضافة للسلة
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا تختار منصتنا لشراء الألعاب؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              نوفر لك أفضل تجربة شراء للألعاب مع ضمان الأصالة والجودة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                ألعاب أصلية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                جميع الألعاب أصلية ومرخصة من المطورين الرسميين
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل فوري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                احصل على مفاتيح ألعابك فوراً واستمتع باللعب على الفور
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                أفضل الأسعار
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أسعار تنافسية وعروض حصرية لأحدث وأفضل الألعاب
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamePurchase;