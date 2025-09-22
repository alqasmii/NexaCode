import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Gift, Play, Zap, CreditCard, DollarSign, Music, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EntertainmentGiftCards = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('streaming');

  const streamingGiftCards = [
    {
      id: 'netflix-cards',
      name: 'Netflix Gift Cards',
      logo: '🎬',
      description: 'بطاقات هدايا نتفليكس للاستمتاع بأفضل الأفلام والمسلسلات العالمية والعربية',
      denominations: [
        { amount: '1 شهر', price: '45 ريال', originalPrice: '50 ريال', popular: false },
        { amount: '3 أشهر', price: '125 ريال', originalPrice: '140 ريال', popular: true },
        { amount: '6 أشهر', price: '240 ريال', originalPrice: '270 ريال', popular: false },
        { amount: '12 شهر', price: '450 ريال', originalPrice: '520 ريال', popular: false }
      ],
      features: [
        'مكتبة ضخمة من الأفلام',
        'مسلسلات عربية حصرية',
        'محتوى عالمي متنوع',
        'جودة 4K Ultra HD',
        'مشاهدة على أجهزة متعددة',
        'تحميل للمشاهدة أوفلاين'
      ],
      platform: 'Netflix',
      region: 'عالمي',
      gradient: 'from-red-600 to-red-800',
      bgImage: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'shahid-cards',
      name: 'Shahid VIP',
      logo: '📺',
      description: 'اشتراكات شاهد VIP للمحتوى العربي الحصري والمسلسلات والأفلام الجديدة',
      denominations: [
        { amount: '1 شهر', price: '25 ريال', originalPrice: '30 ريال', popular: false },
        { amount: '3 أشهر', price: '70 ريال', originalPrice: '80 ريال', popular: true },
        { amount: '6 أشهر', price: '130 ريال', originalPrice: '150 ريال', popular: false },
        { amount: '12 شهر', price: '240 ريال', originalPrice: '280 ريال', popular: false }
      ],
      features: [
        'محتوى عربي حصري',
        'مسلسلات رمضانية',
        'أفلام عربية جديدة',
        'برامج تلفزيونية',
        'بث مباشر للقنوات',
        'مشاهدة بدون إعلانات'
      ],
      platform: 'Shahid',
      region: 'عربي',
      gradient: 'from-yellow-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1489599328009-11fd026bad30?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'osn-cards',
      name: 'OSN+ Streaming',
      logo: '🎭',
      description: 'بطاقات اشتراك OSN+ للأفلام والمسلسلات الحصرية والمحتوى المميز',
      denominations: [
        { amount: '1 شهر', price: '35 ريال', originalPrice: '40 ريال', popular: false },
        { amount: '3 أشهر', price: '90 ريال', originalPrice: '105 ريال', popular: true },
        { amount: '6 أشهر', price: '170 ريال', originalPrice: '200 ريال', popular: false },
        { amount: '12 شهر', price: '320 ريال', originalPrice: '380 ريال', popular: false }
      ],
      features: [
        'أفلام هوليود حصرية',
        'مسلسلات HBO أولاً',
        'محتوى رياضي متنوع',
        'برامج وثائقية',
        'أفلام عربية مميزة',
        'بث عالي الجودة'
      ],
      platform: 'OSN',
      region: 'شرق أوسط',
      gradient: 'from-blue-600 to-purple-700',
      bgImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=200&fit=crop&q=80'
    }
  ];

  const musicGiftCards = [
    {
      id: 'spotify-cards',
      name: 'Spotify Premium',
      logo: '🎵',
      description: 'اشتراكات Spotify Premium للاستمتاع بالموسيقى بدون إعلانات وجودة عالية',
      denominations: [
        { amount: '1 شهر', price: '25 ريال', originalPrice: '30 ريال', popular: false },
        { amount: '3 أشهر', price: '65 ريال', originalPrice: '75 ريال', popular: true },
        { amount: '6 أشهر', price: '120 ريال', originalPrice: '140 ريال', popular: false },
        { amount: '12 شهر', price: '220 ريال', originalPrice: '260 ريال', popular: false }
      ],
      features: [
        'موسيقى بدون إعلانات',
        'جودة صوت عالية',
        'تحميل أوفلاين',
        'تشغيل غير محدود',
        'ملايين الأغاني',
        'بودكاست حصرية'
      ],
      platform: 'Spotify',
      region: 'عالمي',
      gradient: 'from-green-500 to-green-700',
      bgImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'applemusic-cards',
      name: 'Apple Music',
      logo: '🍎',
      description: 'اشتراكات Apple Music للوصول لمكتبة موسيقية ضخمة وحصريات الفنانين',
      denominations: [
        { amount: '1 شهر', price: '28 ريال', originalPrice: '32 ريال', popular: false },
        { amount: '3 أشهر', price: '75 ريال', originalPrice: '85 ريال', popular: true },
        { amount: '6 أشهر', price: '140 ريال', originalPrice: '160 ريال', popular: false },
        { amount: '12 شهر', price: '260 ريال', originalPrice: '300 ريال', popular: false }
      ],
      features: [
        'أكثر من 100 مليون أغنية',
        'حصريات الفنانين',
        'Dolby Atmos للصوت',
        'Apple Music 1 راديو',
        'تشغيل على جميع الأجهزة',
        'مشاركة الموسيقى'
      ],
      platform: 'Apple',
      region: 'عالمي',
      gradient: 'from-gray-600 to-black',
      bgImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'anghami-cards',
      name: 'Anghami Plus',
      logo: '🎼',
      description: 'اشتراكات أنغامي بلس للموسيقى العربية والعالمية بجودة عالية',
      denominations: [
        { amount: '1 شهر', price: '20 ريال', originalPrice: '25 ريال', popular: false },
        { amount: '3 أشهر', price: '50 ريال', originalPrice: '60 ريال', popular: true },
        { amount: '6 أشهر', price: '90 ريال', originalPrice: '110 ريال', popular: false },
        { amount: '12 شهر', price: '160 ريال', originalPrice: '200 ريال', popular: false }
      ],
      features: [
        'موسيقى عربية متنوعة',
        'أغاني عالمية شهيرة',
        'بودكاست عربية',
        'تشغيل أوفلاين',
        'جودة صوت ممتازة',
        'قوائم تشغيل مخصصة'
      ],
      platform: 'Anghami',
      region: 'عربي',
      gradient: 'from-purple-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (cardName: string, duration: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🎁",
      description: `تم إضافة ${cardName} ${duration} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'Netflix': return <Video className="h-4 w-4" />;
      case 'Shahid': return <Play className="h-4 w-4" />;
      case 'OSN': return <Video className="h-4 w-4" />;
      case 'Spotify': return <Music className="h-4 w-4" />;
      case 'Apple': return <Music className="h-4 w-4" />;
      case 'Anghami': return <Music className="h-4 w-4" />;
      default: return <Gift className="h-4 w-4" />;
    }
  };

  const renderGiftCards = (giftCards: typeof streamingGiftCards) => {
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
                      اشتراك
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
                      اشتراك {denom.amount}
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Play className="h-4 w-4" />
              بطاقات الترفيه
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🎬 ترفيه لا محدود
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على اشتراكات الترفيه المميزة - Netflix، Shahid، Spotify، Apple Music وجميع منصات المحتوى
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entertainment Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="streaming" className="text-sm">
                منصات المشاهدة
              </TabsTrigger>
              <TabsTrigger value="music" className="text-sm">
                منصات الموسيقى
              </TabsTrigger>
            </TabsList>

            {/* Streaming Gift Cards */}
            <TabsContent value="streaming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(streamingGiftCards)}
              </div>
            </TabsContent>

            {/* Music Gift Cards */}
            <TabsContent value="music">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(musicGiftCards)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا اشتراكات الترفيه لدينا؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              استمتع بأفضل المحتوى الترفيهي مع اشتراكات موثوقة وأسعار مميزة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل فوري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ابدأ المشاهدة والاستماع فوراً
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
                محتوى حصري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أفلام ومسلسلات وموسيقى حصرية
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
                أسعار مخفضة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                وفر أكثر مع العروض الخاصة
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
                مرونة كاملة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                اختر المدة التي تناسبك
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EntertainmentGiftCards;