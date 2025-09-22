import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Crown, Gamepad2, Monitor, Zap, Trophy, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GamingSubscriptions = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('console');

  const consoleSubscriptions = [
    {
      id: 'xbox-gamepass-ultimate',
      name: 'Xbox Game Pass Ultimate',
      logo: '🎮',
      description: 'أفضل قيمة في الألعاب - مئات الألعاب، Xbox Live Gold، وخدمات سحابية',
      monthlyPrice: '45 ريال',
      quarterlyPrice: '120 ريال',
      yearlyPrice: '400 ريال',
      originalMonthly: '60 ريال',
      features: [
        'أكثر من 100 لعبة مجانية',
        'ألعاب يوم الإطلاق',
        'Xbox Live Gold مدمج',
        'Xbox Cloud Gaming',
        'EA Play مجاناً',
        'خصومات حصرية'
      ],
      platform: 'Xbox',
      popular: true,
      gradient: 'from-green-500 to-emerald-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'playstation-plus-premium',
      name: 'PlayStation Plus Premium',
      logo: '🎯',
      description: 'التجربة الكاملة لبلايستيشن مع مكتبة ألعاب ضخمة وألعاب كلاسيكية',
      monthlyPrice: '50 ريال',
      quarterlyPrice: '135 ريال',
      yearlyPrice: '450 ريال',
      originalMonthly: '65 ريال',
      features: [
        'مكتبة ألعاب PlayStation',
        'ألعاب PlayStation Classic',
        'تجربة الألعاب',
        'بث الألعاب السحابي',
        'خصومات حصرية',
        'محتوى إضافي مجاني'
      ],
      platform: 'PlayStation',
      popular: true,
      gradient: 'from-blue-500 to-indigo-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'nintendo-switch-online',
      name: 'Nintendo Switch Online',
      logo: '🎲',
      description: 'استمتع بألعاب نينتندو الكلاسيكية واللعب المتصل مع الأصدقاء',
      monthlyPrice: '25 ريال',
      quarterlyPrice: '60 ريال',
      yearlyPrice: '200 ريال',
      originalMonthly: '35 ريال',
      features: [
        'لعب متصل مع الأصدقاء',
        'ألعاب NES & SNES',
        'حفظ سحابي',
        'تطبيق Nintendo Switch',
        'عروض حصرية',
        'DLC مجاني'
      ],
      platform: 'Nintendo',
      popular: false,
      gradient: 'from-red-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    }
  ];

  const battlePassSubscriptions = [
    {
      id: 'fortnite-battle-pass',
      name: 'Fortnite Battle Pass',
      logo: '🔥',
      description: 'باتل باس فورتنايت الموسمي مع سكنات حصرية ومكافآت نادرة',
      price: '35 ريال',
      originalPrice: '45 ريال',
      duration: 'موسم كامل',
      features: [
        '100+ مستوى مكافآت',
        'سكنات حصرية نادرة',
        'رقصات ومعدات',
        '1500 V-Bucks',
        'تحديات أسبوعية',
        'وصول فوري'
      ],
      game: 'Fortnite',
      popular: true,
      gradient: 'from-purple-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'cod-battle-pass',
      name: 'Call of Duty Battle Pass',
      logo: '⚔️',
      description: 'باتل باس كول أوف ديوتي مع أسلحة حصرية وسكنات أوبريتر',
      price: '40 ريال',
      originalPrice: '50 ريال',
      duration: 'موسم كامل',
      features: [
        'أسلحة حصرية جديدة',
        'سكنات أوبريتر نادرة',
        'معدات تكتيكية',
        '1000 CP نقاط',
        'مهام موسمية',
        'تفعيل فوري'
      ],
      game: 'Call of Duty',
      popular: true,
      gradient: 'from-orange-500 to-red-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'apex-battle-pass',
      name: 'Apex Legends Battle Pass',
      logo: '🏆',
      description: 'باتل باس أبيكس ليجندز مع شخصيات وأسلحة ومعدات حصرية',
      price: '30 ريال',
      originalPrice: '40 ريال',
      duration: 'موسم كامل',
      features: [
        'شخصيات حصرية',
        'سكنات أسلحة نادرة',
        'معدات تكتيكية',
        'Apex Coins مجانية',
        'تحديات يومية',
        'مكافآت فورية'
      ],
      game: 'Apex Legends',
      popular: false,
      gradient: 'from-cyan-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (subscriptionName: string, price: string, duration?: string) => {
    const itemDescription = duration ? `${subscriptionName} - ${duration}` : subscriptionName;
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${itemDescription} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'Xbox': return <Gamepad2 className="h-4 w-4" />;
      case 'PlayStation': return <Monitor className="h-4 w-4" />;
      case 'Nintendo': return <Gift className="h-4 w-4" />;
      default: return <Crown className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Crown className="h-4 w-4" />
              اشتراكات الألعاب
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              ⭐ اشتراكات احترافية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على أفضل اشتراكات الألعاب - Xbox Game Pass، PlayStation Plus، Battle Pass وجميع الاشتراكات الاحترافية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subscription Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="console" className="text-sm">
                اشتراكات الكونسول
              </TabsTrigger>
              <TabsTrigger value="battlepass" className="text-sm">
                باتل باس
              </TabsTrigger>
            </TabsList>

            {/* Console Subscriptions */}
            <TabsContent value="console">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {consoleSubscriptions.map((subscription, index) => (
                  <motion.div
                    key={subscription.id}
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
                          style={{ backgroundImage: `url(${subscription.bgImage})` }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${subscription.gradient} opacity-80`}></div>
                          <div className="absolute top-4 right-4 flex gap-2">
                            {subscription.popular && (
                              <Badge className="bg-yellow-500 text-white border-0">
                                <Star className="h-3 w-3 ml-1" />
                                الأكثر طلباً
                              </Badge>
                            )}
                            <Badge variant="secondary" className="bg-white/20 text-white border-0">
                              {getPlatformIcon(subscription.platform)}
                              <span className="mr-1">{subscription.platform}</span>
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="text-4xl">{subscription.logo}</div>
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-right">
                          {subscription.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
                          {subscription.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        {/* Pricing Options */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(subscription.name, subscription.monthlyPrice, 'شهري')}
                              className="bg-purple-500 hover:bg-purple-600 text-white"
                            >
                              اختر
                            </Button>
                            <div className="text-right">
                              <div className="font-bold text-purple-600 dark:text-purple-400">
                                {subscription.monthlyPrice}
                              </div>
                              <div className="text-xs text-gray-500">شهري</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(subscription.name, subscription.quarterlyPrice, '3 أشهر')}
                              variant="outline"
                            >
                              اختر
                            </Button>
                            <div className="text-right">
                              <div className="font-bold text-green-600 dark:text-green-400">
                                {subscription.quarterlyPrice}
                              </div>
                              <div className="text-xs text-gray-500">3 أشهر</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-lg border-2 border-green-200 dark:border-green-700">
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(subscription.name, subscription.yearlyPrice, 'سنوي')}
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              الأفضل
                            </Button>
                            <div className="text-right">
                              <div className="font-bold text-green-600 dark:text-green-400">
                                {subscription.yearlyPrice}
                              </div>
                              <div className="text-xs text-green-600 dark:text-green-400">سنوي - وفر 40%</div>
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          {subscription.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300 text-right">
                              <span className="flex-1 text-right">{feature}</span>
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Battle Pass Subscriptions */}
            <TabsContent value="battlepass">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {battlePassSubscriptions.map((battlepass, index) => (
                  <motion.div
                    key={battlepass.id}
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
                          style={{ backgroundImage: `url(${battlepass.bgImage})` }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${battlepass.gradient} opacity-80`}></div>
                          <div className="absolute top-4 right-4 flex gap-2">
                            {battlepass.popular && (
                              <Badge className="bg-yellow-500 text-white border-0">
                                <Star className="h-3 w-3 ml-1" />
                                الأكثر طلباً
                              </Badge>
                            )}
                            <Badge variant="secondary" className="bg-white/20 text-white border-0">
                              <Trophy className="h-3 w-3 ml-1" />
                              {battlepass.game}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="text-4xl">{battlepass.logo}</div>
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-right">
                          {battlepass.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
                          {battlepass.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        {/* Pricing */}
                        <div className="mb-6 text-right">
                          <div className="flex items-center justify-end gap-2 mb-2">
                            <span className="text-sm text-gray-500 line-through">
                              {battlepass.originalPrice}
                            </span>
                            <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                              {battlepass.price}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {battlepass.duration}
                          </div>
                          <div className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                            وفر {((parseFloat(battlepass.originalPrice.replace(/\D/g, '')) - parseFloat(battlepass.price.replace(/\D/g, ''))) / parseFloat(battlepass.originalPrice.replace(/\D/g, '')) * 100).toFixed(0)}%
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {battlepass.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300 text-right">
                              <span className="flex-1 text-right">{feature}</span>
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <Button 
                          onClick={() => handleAddToCart(battlepass.name, battlepass.price)}
                          className={`w-full bg-gradient-to-r ${battlepass.gradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-200`}
                        >
                          <ShoppingCart className="h-4 w-4 ml-2" />
                          إضافة للسلة
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا الاشتراكات الاحترافية؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              احصل على أفضل قيمة وتجربة لعب استثنائية مع اشتراكاتنا المميزة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                قيمة استثنائية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                مئات الألعاب والمحتوى الحصري بسعر اشتراك واحد
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل فوري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ابدأ اللعب فوراً بعد الشراء مع تفعيل تلقائي سريع
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                محتوى حصري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                احصل على ألعاب ومحتوى حصري غير متوفر في أي مكان آخر
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamingSubscriptions;