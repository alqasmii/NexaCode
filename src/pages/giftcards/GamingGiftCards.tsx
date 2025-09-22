import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Gift, Gamepad2, Zap, CreditCard, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GamingGiftCards = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('console');

  const consoleGiftCards = [
    {
      id: 'playstation-cards',
      name: 'PlayStation Store',
      logo: '🎮',
      description: 'بطاقات هدايا بلايستيشن لشراء الألعاب والمحتوى الرقمي من المتجر الرسمي',
      denominations: [
        { amount: '50 ريال', price: '50 ريال', originalPrice: '55 ريال', popular: false },
        { amount: '100 ريال', price: '100 ريال', originalPrice: '110 ريال', popular: true },
        { amount: '200 ريال', price: '200 ريال', originalPrice: '220 ريال', popular: false },
        { amount: '500 ريال', price: '500 ريال', originalPrice: '550 ريال', popular: false }
      ],
      features: [
        'تفعيل فوري خلال 5 دقائق',
        'متوافق مع جميع الدول العربية',
        'لا تحتاج بطاقة ائتمان',
        'صالح للألعاب والمحتوى',
        'ضمان الجودة والأصالة',
        'دعم فني 24/7'
      ],
      platform: 'PlayStation',
      region: 'عالمي',
      gradient: 'from-blue-500 to-indigo-600',
      bgImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'xbox-cards',
      name: 'Xbox Gift Cards',
      logo: '🎯',
      description: 'بطاقات هدايا إكس بوكس لمتجر مايكروسوفت وجميع محتوى Xbox',
      denominations: [
        { amount: '50 ريال', price: '50 ريال', originalPrice: '55 ريال', popular: false },
        { amount: '100 ريال', price: '100 ريال', originalPrice: '110 ريال', popular: true },
        { amount: '200 ريال', price: '200 ريال', originalPrice: '220 ريال', popular: false },
        { amount: '500 ريال', price: '500 ريال', originalPrice: '550 ريال', popular: false }
      ],
      features: [
        'تفعيل مباشر على الحساب',
        'متوافق مع Xbox و PC',
        'شراء ألعاب وإضافات',
        'Game Pass والاشتراكات',
        'محتوى رقمي متنوع',
        'دعم جميع المناطق'
      ],
      platform: 'Xbox',
      region: 'عالمي',
      gradient: 'from-green-500 to-emerald-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'nintendo-cards',
      name: 'Nintendo eShop',
      logo: '🎲',
      description: 'بطاقات هدايا نينتندو للمتجر الرقمي وألعاب Nintendo Switch',
      denominations: [
        { amount: '50 ريال', price: '52 ريال', originalPrice: '58 ريال', popular: false },
        { amount: '100 ريال', price: '104 ريال', originalPrice: '115 ريال', popular: true },
        { amount: '200 ريال', price: '208 ريال', originalPrice: '230 ريال', popular: false },
        { amount: '500 ريال', price: '520 ريال', originalPrice: '575 ريال', popular: false }
      ],
      features: [
        'متوافق مع Nintendo Switch',
        'ألعاب حصرية نينتندو',
        'محتوى إضافي ومُوسع',
        'ألعاب كلاسيكية',
        'تحديثات مجانية',
        'عائلة آمنة للأطفال'
      ],
      platform: 'Nintendo',
      region: 'عالمي',
      gradient: 'from-red-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    }
  ];

  const pcGiftCards = [
    {
      id: 'steam-cards',
      name: 'Steam Wallet',
      logo: '💨',
      description: 'بطاقات محفظة ستيم لأكبر منصة ألعاب PC في العالم',
      denominations: [
        { amount: '25 ريال', price: '25 ريال', originalPrice: '28 ريال', popular: false },
        { amount: '50 ريال', price: '50 ريال', originalPrice: '55 ريال', popular: true },
        { amount: '100 ريال', price: '100 ريال', originalPrice: '110 ريال', popular: false },
        { amount: '200 ريال', price: '200 ريال', originalPrice: '220 ريال', popular: false }
      ],
      features: [
        'آلاف الألعاب متوفرة',
        'عروض وخصومات يومية',
        'ألعاب مستقلة مميزة',
        'مجتمع لاعبين عالمي',
        'تحديثات تلقائية',
        'حفظ سحابي'
      ],
      platform: 'PC Steam',
      region: 'عالمي',
      gradient: 'from-gray-600 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'epic-cards',
      name: 'Epic Games Store',
      logo: '🚀',
      description: 'بطاقات هدايا متجر Epic Games للألعاب المجانية الأسبوعية والحصريات',
      denominations: [
        { amount: '50 ريال', price: '52 ريال', originalPrice: '58 ريال', popular: false },
        { amount: '100 ريال', price: '104 ريال', originalPrice: '115 ريال', popular: true },
        { amount: '200 ريال', price: '208 ريال', originalPrice: '230 ريال', popular: false },
        { amount: '500 ريال', price: '520 ريال', originalPrice: '575 ريال', popular: false }
      ],
      features: [
        'ألعاب مجانية أسبوعياً',
        'حصريات Epic Games',
        'محرك Unreal Engine',
        'Fortnite و Rocket League',
        'عروض موسمية كبيرة',
        'دعم مطورين مستقلين'
      ],
      platform: 'PC Epic',
      region: 'عالمي',
      gradient: 'from-purple-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'battlenet-cards',
      name: 'Battle.net Balance',
      logo: '⚔️',
      description: 'رصيد باتل نت لألعاب Blizzard الشهيرة مثل Call of Duty و Overwatch',
      denominations: [
        { amount: '50 ريال', price: '52 ريال', originalPrice: '58 ريال', popular: false },
        { amount: '100 ريال', price: '104 ريال', originalPrice: '115 ريال', popular: true },
        { amount: '200 ريال', price: '208 ريال', originalPrice: '230 ريال', popular: false },
        { amount: '300 ريال', price: '312 ريال', originalPrice: '345 ريال', popular: false }
      ],
      features: [
        'Call of Duty الجديد',
        'Overwatch 2 كامل',
        'World of Warcraft',
        'Diablo 4 والسلسلة',
        'HearthStone وإضافات',
        'محتوى حصري Blizzard'
      ],
      platform: 'PC Battle.net',
      region: 'عالمي',
      gradient: 'from-orange-500 to-red-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (cardName: string, amount: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🎁",
      description: `تم إضافة ${cardName} ${amount} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'PlayStation': return <Gamepad2 className="h-4 w-4" />;
      case 'Xbox': return <Gamepad2 className="h-4 w-4" />;
      case 'Nintendo': return <Gift className="h-4 w-4" />;
      default: return <CreditCard className="h-4 w-4" />;
    }
  };

  const renderGiftCards = (giftCards: typeof consoleGiftCards) => {
    return giftCards.map((card, index) => (
      <motion.div
        key={card.id}
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
              style={{ backgroundImage: `url(${card.bgImage})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-80`}></div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {getPlatformIcon(card.platform)}
                  <span className="mr-1">{card.platform}</span>
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Zap className="h-3 w-3 ml-1" />
                  فوري
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="text-4xl">{card.logo}</div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="text-white/80 text-sm font-medium">
                  {card.region}
                </div>
              </div>
            </div>
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-right">
              {card.name}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
              {card.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Gift Card Denominations */}
            <div className="space-y-3 mb-6">
              {card.denominations.map((denom, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                    denom.popular 
                      ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 border-2 border-purple-200 dark:border-purple-700' 
                      : 'bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(card.name, denom.amount, denom.price)}
                      className={denom.popular 
                        ? "bg-purple-500 hover:bg-purple-600 text-white" 
                        : "bg-gray-500 hover:bg-gray-600 text-white"
                      }
                    >
                      شراء
                    </Button>
                    {denom.popular && (
                      <Badge className="bg-yellow-500 text-white border-0 text-xs">
                        <Star className="h-3 w-3 ml-1" />
                        الأكثر طلباً
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-xs text-gray-500 line-through">
                        {denom.originalPrice}
                      </span>
                      <span className={`font-bold ${
                        denom.popular ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'
                      }`}>
                        {denom.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      بطاقة {denom.amount}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                      وفر {((parseFloat(denom.originalPrice.replace(/\D/g, '')) - parseFloat(denom.price.replace(/\D/g, ''))) / parseFloat(denom.originalPrice.replace(/\D/g, '')) * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-2">
              {card.features.map((feature, idx) => (
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              بطاقات هدايا الألعاب
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🎁 بطاقات هدايا احترافية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على بطاقات هدايا لجميع منصات الألعاب - PlayStation، Xbox، Nintendo، Steam وأكثر بأفضل الأسعار
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Cards Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="console" className="text-sm">
                بطاقات الكونسول
              </TabsTrigger>
              <TabsTrigger value="pc" className="text-sm">
                بطاقات PC
              </TabsTrigger>
            </TabsList>

            {/* Console Gift Cards */}
            <TabsContent value="console">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(consoleGiftCards)}
              </div>
            </TabsContent>

            {/* PC Gift Cards */}
            <TabsContent value="pc">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(pcGiftCards)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا بطاقات الهدايا لدينا؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              احصل على أفضل تجربة شراء بطاقات الهدايا مع ضمانات وخدمات متميزة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل فوري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                تسليم كود البطاقة خلال 5 دقائق
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
                ضمان الأصالة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                بطاقات أصلية مضمونة 100%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                أسعار تنافسية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أفضل الأسعار مع خصومات يومية
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                هدايا مثالية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أفضل الهدايا لمحبي الألعاب
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamingGiftCards;