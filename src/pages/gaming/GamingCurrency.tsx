import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Zap, Coins, GamepadIcon, TrendingUp, Gift, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GamingCurrency = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('popular');

  const popularCurrencies = [
    {
      id: 'fortnite-vbucks',
      name: 'Fortnite V-Bucks',
      logo: '💎',
      game: 'Fortnite',
      currency: 'V-Bucks',
      packages: [
        { amount: '1000', price: '25 ريال', originalPrice: '30 ريال', bonus: '', popular: false },
        { amount: '2800', price: '65 ريال', originalPrice: '75 ريال', bonus: '+300 مجاناً', popular: true },
        { amount: '5000', price: '110 ريال', originalPrice: '130 ريال', bonus: '+1000 مجاناً', popular: false },
        { amount: '13500', price: '280 ريال', originalPrice: '320 ريال', bonus: '+3500 مجاناً', popular: false }
      ],
      description: 'العملة الرسمية لفورتنايت - اشتري السكنات والباتل باس والمعدات',
      features: [
        'تسليم فوري خلال 5 دقائق',
        'ضمان 100% أو استرداد المال',
        'دعم فني 24/7',
        'أسعار تنافسية',
        'شحن آمن ومضمون'
      ],
      platform: 'PC, PS, Xbox, Mobile',
      gradient: 'from-purple-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'pubg-uc',
      name: 'PUBG UC',
      logo: '🎖️',
      game: 'PUBG Mobile',
      currency: 'UC',
      packages: [
        { amount: '60', price: '15 ريال', originalPrice: '18 ريال', bonus: '', popular: false },
        { amount: '325', price: '75 ريال', originalPrice: '85 ريال', bonus: '+25 مجاناً', popular: true },
        { amount: '660', price: '150 ريال', originalPrice: '170 ريال', bonus: '+60 مجاناً', popular: false },
        { amount: '1800', price: '375 ريال', originalPrice: '420 ريال', bonus: '+200 مجاناً', popular: false }
      ],
      description: 'Unknown Cash لببجي موبايل - اشتري السكنات والأسلحة والمعدات النادرة',
      features: [
        'شحن مباشر للحساب',
        'تفعيل خلال 10 دقائق',
        'جميع الخوادم متوفرة',
        'دعم العربية',
        'عروض يومية'
      ],
      platform: 'Android, iOS',
      gradient: 'from-yellow-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'cod-cp',
      name: 'Call of Duty CP',
      logo: '⚔️',
      game: 'Call of Duty',
      currency: 'CP Points',
      packages: [
        { amount: '500', price: '20 ريال', originalPrice: '25 ريال', bonus: '', popular: false },
        { amount: '1100', price: '40 ريال', originalPrice: '50 ريال', bonus: '+100 مجاناً', popular: true },
        { amount: '2400', price: '80 ريال', originalPrice: '100 ريال', bonus: '+400 مجاناً', popular: false },
        { amount: '5000', price: '160 ريال', originalPrice: '200 ريال', bonus: '+1000 مجاناً', popular: false }
      ],
      description: 'نقاط كول أوف ديوتي - اشتري سكنات الأوبريتر والأسلحة والمعدات',
      features: [
        'متوافق مع جميع إصدارات COD',
        'تسليم آمن ومضمون',
        'دعم فني متخصص',
        'أفضل الأسعار',
        'شحن سريع'
      ],
      platform: 'PC, PS, Xbox, Mobile',
      gradient: 'from-red-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&q=80'
    }
  ];

  const otherCurrencies = [
    {
      id: 'genshin-genesis',
      name: 'Genshin Impact Genesis Crystals',
      logo: '💠',
      game: 'Genshin Impact',
      currency: 'Genesis Crystals',
      packages: [
        { amount: '300', price: '20 ريال', originalPrice: '24 ريال', bonus: '', popular: false },
        { amount: '980', price: '60 ريال', originalPrice: '70 ريال', bonus: '+260 مجاناً', popular: true },
        { amount: '1980', price: '120 ريال', originalPrice: '140 ريال', bonus: '+600 مجاناً', popular: false },
        { amount: '3280', price: '200 ريال', originalPrice: '230 ريال', bonus: '+1080 مجاناً', popular: false }
      ],
      description: 'أحجار تكوين جين شين إمباكت - احصل على شخصيات وأسلحة جديدة',
      features: [
        'شحن فوري للحساب',
        'جميع الخوادم العالمية',
        'ضمان الأمان',
        'دعم عربي',
        'أسعار مميزة'
      ],
      platform: 'PC, Mobile, PS',
      gradient: 'from-cyan-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'valorant-vp',
      name: 'Valorant Points',
      logo: '🔥',
      game: 'Valorant',
      currency: 'VP',
      packages: [
        { amount: '475', price: '20 ريال', originalPrice: '25 ريال', bonus: '', popular: false },
        { amount: '1000', price: '40 ريال', originalPrice: '50 ريال', bonus: '+100 مجاناً', popular: true },
        { amount: '2050', price: '80 ريال', originalPrice: '100 ريال', bonus: '+250 مجاناً', popular: false },
        { amount: '3650', price: '140 ريال', originalPrice: '175 ريال', bonus: '+650 مجاناً', popular: false }
      ],
      description: 'نقاط فالورانت - اشتري السكنات والأسلحة والمعدات التكتيكية',
      features: [
        'تفعيل مباشر',
        'جميع المناطق',
        'دعم فني سريع',
        'ضمان الجودة',
        'عروض أسبوعية'
      ],
      platform: 'PC',
      gradient: 'from-red-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'apex-coins',
      name: 'Apex Coins',
      logo: '🏆',
      game: 'Apex Legends',
      currency: 'Apex Coins',
      packages: [
        { amount: '500', price: '18 ريال', originalPrice: '22 ريال', bonus: '', popular: false },
        { amount: '1000', price: '35 ريال', originalPrice: '42 ريال', bonus: '+150 مجاناً', popular: true },
        { amount: '2150', price: '70 ريال', originalPrice: '85 ريال', bonus: '+350 مجاناً', popular: false },
        { amount: '4350', price: '140 ريال', originalPrice: '170 ريال', bonus: '+750 مجاناً', popular: false }
      ],
      description: 'عملات أبيكس ليجندز - اشتري الشخصيات والسكنات والمعدات',
      features: [
        'شحن سريع وآمن',
        'جميع المنصات',
        'ضمان الاسترداد',
        'دعم 24/7',
        'أفضل الأسعار'
      ],
      platform: 'PC, PS, Xbox, Mobile',
      gradient: 'from-orange-500 to-red-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (currencyName: string, amount: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${amount} ${currencyName} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const renderCurrencyCards = (currencies: any[]) => {
    return currencies.map((currency, index) => (
      <motion.div
        key={currency.id}
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
              style={{ backgroundImage: `url(${currency.bgImage})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${currency.gradient} opacity-80`}></div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  <GamepadIcon className="h-3 w-3 ml-1" />
                  {currency.game}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="text-4xl">{currency.logo}</div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="text-white/80 text-sm font-medium">
                  {currency.platform}
                </div>
              </div>
            </div>
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-right">
              {currency.name}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
              {currency.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Currency Packages */}
            <div className="space-y-3 mb-6">
              {currency.packages.map((pkg: any, idx: number) => (
                <div 
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 border-2 border-purple-200 dark:border-purple-700' 
                      : 'bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(currency.currency, pkg.amount, pkg.price)}
                      className={pkg.popular 
                        ? "bg-purple-500 hover:bg-purple-600 text-white" 
                        : "bg-gray-500 hover:bg-gray-600 text-white"
                      }
                    >
                      شراء
                    </Button>
                    {pkg.popular && (
                      <Badge className="bg-yellow-500 text-white border-0 text-xs">
                        <Star className="h-3 w-3 ml-1" />
                        الأكثر طلباً
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-xs text-gray-500 line-through">
                        {pkg.originalPrice}
                      </span>
                      <span className={`font-bold ${
                        pkg.popular ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'
                      }`}>
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {pkg.amount} {currency.currency}
                    </div>
                    {pkg.bonus && (
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                        {pkg.bonus}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-2">
              {currency.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300 text-right">
                  <span className="flex-1 text-right">{feature}</span>
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Coins className="h-4 w-4" />
              عملات الألعاب
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              💰 عملات احترافية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على عملات ألعابك المفضلة - V-Bucks، UC، CP، Genesis Crystals وجميع العملات بأفضل الأسعار
            </p>
          </motion.div>
        </div>
      </section>

      {/* Currency Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="popular" className="text-sm">
                الأكثر طلباً
              </TabsTrigger>
              <TabsTrigger value="others" className="text-sm">
                عملات أخرى
              </TabsTrigger>
            </TabsList>

            {/* Popular Currencies */}
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderCurrencyCards(popularCurrencies)}
              </div>
            </TabsContent>

            {/* Other Currencies */}
            <TabsContent value="others">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderCurrencyCards(otherCurrencies)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا تختار عملاتنا؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              احصل على أفضل تجربة شراء عملات الألعاب مع ضمانات وخدمات متميزة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تسليم فوري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                شحن العملات خلال 5-10 دقائق
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                ضمان 100%
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ضمان استرداد المال أو إعادة الشحن
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                أفضل الأسعار
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أسعار تنافسية مع عروض يومية
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                عملات مجانية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                احصل على عملات إضافية مع كل عملية شراء
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamingCurrency;