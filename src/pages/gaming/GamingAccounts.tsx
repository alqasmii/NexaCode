import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Star, Users, Shield, Crown, Gamepad2, Trophy, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GamingAccounts = () => {
  const { toast } = useToast();

  const gamingAccounts = [
    {
      id: 'fortnite-1',
      name: 'Fortnite - حساب مميز',
      logo: '🔥',
      description: 'حساب فورتنايت مع سكنات نادرة وأسلحة حصرية - جاهز للعب فوراً!',
      price: '150 ريال',
      originalPrice: '200 ريال',
      level: 'المستوى 80+',
      features: [
        'أكثر من 20 سكن نادر',
        'أسلحة حصرية متطورة',
        'رقصات نادرة ومميزة',
        'V-Bucks متوفرة في الحساب',
        'إنجازات وميداليات',
        'ضمان أمان الحساب'
      ],
      category: 'Battle Royale',
      rarity: 'نادر',
      platform: 'PC/Console',
      popular: true,
      gradient: 'from-purple-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'pubg-1',
      name: 'PUBG Mobile - حساب كونكر',
      logo: '🎯',
      description: 'حساب PUBG Mobile بمستوى كونكر مع سكنات أسطورية وإحصائيات مميزة',
      price: '250 ريال',
      originalPrice: '320 ريال',
      level: 'كونكر',
      features: [
        'رتبة كونكر معتمدة',
        'سكنات أسطورية نادرة',
        'أسلحة مطورة بالكامل',
        'إحصائيات K/D مرتفعة',
        'إنجازات حصرية',
        'UC متوفرة'
      ],
      category: 'Mobile',
      rarity: 'أسطوري',
      platform: 'Mobile',
      popular: true,
      gradient: 'from-yellow-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'cod-1',
      name: 'Call of Duty - حساب برستيج',
      logo: '⚔️',
      description: 'حساب كول أوف ديوتي بمستوى برستيج عالي مع جميع الأسلحة المفتوحة',
      price: '180 ريال',
      originalPrice: '240 ريال',
      level: 'برستيج 5+',
      features: [
        'مستوى برستيج متقدم',
        'جميع الأسلحة مفتوحة',
        'كامو ذهبي ومميز',
        'إحصائيات قتال مرتفعة',
        'أوضاع لعب حصرية',
        'CP نقاط متوفرة'
      ],
      category: 'FPS',
      rarity: 'مميز',
      platform: 'PC/Console',
      popular: false,
      gradient: 'from-green-500 to-emerald-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'fifa-1',
      name: 'FIFA 24 - حساب FUT',
      logo: '⚽',
      description: 'حساب FIFA 24 Ultimate Team مع فريق قوي ولاعبين نجوم',
      price: '300 ريال',
      originalPrice: '400 ريال',
      level: 'قسم 2',
      features: [
        'فريق تقييم 85+',
        'لاعبين أيقونة',
        'عملات FUT وفيرة',
        'بطاقات خاصة نادرة',
        'إنجازات FUT',
        'تقييم قسم عالي'
      ],
      category: 'رياضة',
      rarity: 'مميز',
      platform: 'PC/Console',
      popular: false,
      gradient: 'from-blue-500 to-cyan-600',
      bgImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'genshin-1',
      name: 'Genshin Impact - حساب AR 50+',
      logo: '🌟',
      description: 'حساب جينشين إمباكت بمغامرة متقدمة وشخصيات 5 نجوم متعددة',
      price: '220 ريال',
      originalPrice: '280 ريال',
      level: 'AR 55',
      features: [
        'مستوى مغامرة 55+',
        'شخصيات 5 نجوم متعددة',
        'أسلحة نادرة مطورة',
        'مناطق مفتوحة بالكامل',
        'أحجار أولية متوفرة',
        'إنجازات نادرة'
      ],
      category: 'RPG',
      rarity: 'نادر',
      platform: 'PC/Mobile',
      popular: false,
      gradient: 'from-indigo-500 to-purple-600',
      bgImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'valorant-1',
      name: 'Valorant - حساب رادينت',
      logo: '🎮',
      description: 'حساب فالورانت برتبة رادينت مع سكنات حصرية وإحصائيات محترفة',
      price: '400 ريال',
      originalPrice: '500 ريال',
      level: 'رادينت',
      features: [
        'رتبة رادينت معتمدة',
        'سكنات أسلحة حصرية',
        'إحصائيات محترفة',
        'جميع الشخصيات مفتوحة',
        'VP نقاط متوفرة',
        'بطولات مسجلة'
      ],
      category: 'Tactical FPS',
      rarity: 'أسطوري',
      platform: 'PC',
      popular: true,
      gradient: 'from-red-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (accountName: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${accountName} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'أسطوري': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'نادر': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'مميز': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Battle Royale': return <Zap className="h-4 w-4" />;
      case 'Mobile': return <Gamepad2 className="h-4 w-4" />;
      case 'FPS': return <Crown className="h-4 w-4" />;
      case 'رياضة': return <Trophy className="h-4 w-4" />;
      case 'RPG': return <Star className="h-4 w-4" />;
      case 'Tactical FPS': return <Shield className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              حسابات الألعاب
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🎮 حسابات جاهزة للألعاب الشهيرة
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على حسابات احترافية جاهزة لأشهر الألعاب - فورتنايت، PUBG، كول أوف ديوتي، فيفا وأكثر مع ضمان الأمان والجودة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accounts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamingAccounts.map((account, index) => (
              <motion.div
                key={account.id}
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
                      style={{ backgroundImage: `url(${account.bgImage})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${account.gradient} opacity-80`}></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {account.popular && (
                          <Badge className="bg-yellow-500 text-white border-0">
                            <Star className="h-3 w-3 ml-1" />
                            الأكثر طلباً
                          </Badge>
                        )}
                        <Badge className={getRarityColor(account.rarity)}>
                          <Crown className="h-3 w-3 ml-1" />
                          {account.rarity}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {getCategoryIcon(account.category)}
                          <span className="mr-1">{account.category}</span>
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="text-4xl">{account.logo}</div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {account.platform}
                      </Badge>
                      <Badge className="bg-green-500 text-white text-xs">
                        {account.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-right">
                      {account.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
                      {account.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Pricing */}
                    <div className="mb-6 text-right">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <span className="text-sm text-gray-500 line-through">
                          {account.originalPrice}
                        </span>
                        <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                          {account.price}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                        وفر {((parseFloat(account.originalPrice.replace(/\D/g, '')) - parseFloat(account.price.replace(/\D/g, ''))) / parseFloat(account.originalPrice.replace(/\D/g, '')) * 100).toFixed(0)}%
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {account.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300 text-right">
                          <span className="flex-1 text-right">{feature}</span>
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button 
                      onClick={() => handleAddToCart(account.name, account.price)}
                      className={`w-full bg-gradient-to-r ${account.gradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-200`}
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

      {/* Security & Guarantee Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا تختار حساباتنا؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              ضمان الأمان والجودة مع دعم متكامل لجميع حساباتك
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
                أمان مضمون
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                جميع الحسابات مؤمنة بالكامل مع ضمان عدم الحظر
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                جودة عالية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                حسابات بمستويات متقدمة وإنجازات نادرة وقيمة
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                دعم مستمر
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                فريق دعم متخصص متاح 24/7 لمساعدتك في أي وقت
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamingAccounts;