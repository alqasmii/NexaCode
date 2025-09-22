import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Gift, ShoppingBag, Zap, CreditCard, DollarSign, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ShoppingGiftCards = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('retail');

  const retailGiftCards = [
    {
      id: 'amazon-cards',
      name: 'Amazon Gift Cards',
      logo: '📦',
      description: 'بطاقات هدايا أمازون لملايين المنتجات والخدمات من أكبر متجر إلكتروني',
      denominations: [
        { amount: '50 ريال', price: '52 ريال', originalPrice: '58 ريال', popular: false },
        { amount: '100 ريال', price: '104 ريال', originalPrice: '115 ريال', popular: true },
        { amount: '200 ريال', price: '208 ريال', originalPrice: '230 ريال', popular: false },
        { amount: '500 ريال', price: '520 ريال', originalPrice: '575 ريال', popular: false }
      ],
      features: [
        'ملايين المنتجات متوفرة',
        'خدمة Prime مجانية',
        'توصيل سريع مضمون',
        'إلكترونيات وأزياء',
        'كتب ومحتوى رقمي',
        'دعم عملاء 24/7'
      ],
      platform: 'Amazon',
      region: 'عالمي',
      gradient: 'from-yellow-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'noon-cards',
      name: 'Noon Gift Cards',
      logo: '🌙',
      description: 'بطاقات هدايا نون للتسوق من أكبر متجر إلكتروني في الشرق الأوسط',
      denominations: [
        { amount: '50 ريال', price: '50 ريال', originalPrice: '55 ريال', popular: false },
        { amount: '100 ريال', price: '100 ريال', originalPrice: '110 ريال', popular: true },
        { amount: '200 ريال', price: '200 ريال', originalPrice: '220 ريال', popular: false },
        { amount: '500 ريال', price: '500 ريال', originalPrice: '550 ريال', popular: false }
      ],
      features: [
        'منتجات عربية أصلية',
        'توصيل سريع محلي',
        'أزياء وإكسسوارات',
        'إلكترونيات حديثة',
        'منتجات منزلية',
        'عروض يومية مميزة'
      ],
      platform: 'Noon',
      region: 'شرق أوسط',
      gradient: 'from-purple-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'carrefour-cards',
      name: 'Carrefour Cards',
      logo: '🛒',
      description: 'بطاقات هدايا كارفور للتسوق من سلاسل المتاجر الكبرى',
      denominations: [
        { amount: '25 ريال', price: '25 ريال', originalPrice: '28 ريال', popular: false },
        { amount: '50 ريال', price: '50 ريال', originalPrice: '55 ريال', popular: true },
        { amount: '100 ريال', price: '100 ريال', originalPrice: '110 ريال', popular: false },
        { amount: '200 ريال', price: '200 ريال', originalPrice: '220 ريال', popular: false }
      ],
      features: [
        'مواد غذائية طازجة',
        'منتجات منزلية',
        'ملابس وأحذية',
        'إلكترونيات متنوعة',
        'مستحضرات تجميل',
        'متاجر في كل مكان'
      ],
      platform: 'Carrefour',
      region: 'السعودية',
      gradient: 'from-blue-500 to-cyan-600',
      bgImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=200&fit=crop&q=80'
    }
  ];

  const digitalGiftCards = [
    {
      id: 'itunes-cards',
      name: 'iTunes Gift Cards',
      logo: '🍎',
      description: 'بطاقات هدايا iTunes للتطبيقات والموسيقى والأفلام من Apple',
      denominations: [
        { amount: '25 ريال', price: '27 ريال', originalPrice: '30 ريال', popular: false },
        { amount: '50 ريال', price: '52 ريال', originalPrice: '58 ريال', popular: true },
        { amount: '100 ريال', price: '104 ريال', originalPrice: '115 ريال', popular: false },
        { amount: '200 ريال', price: '208 ريال', originalPrice: '230 ريال', popular: false }
      ],
      features: [
        'تطبيقات App Store',
        'موسيقى Apple Music',
        'أفلام و مسلسلات',
        'كتب إلكترونية',
        'ألعاب iOS حصرية',
        'iCloud تخزين إضافي'
      ],
      platform: 'Apple',
      region: 'عالمي',
      gradient: 'from-gray-600 to-gray-800',
      bgImage: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'googleplay-cards',
      name: 'Google Play Cards',
      logo: '📱',
      description: 'بطاقات هدايا Google Play للتطبيقات والألعاب والمحتوى الرقمي',
      denominations: [
        { amount: '25 ريال', price: '26 ريال', originalPrice: '29 ريال', popular: false },
        { amount: '50 ريال', price: '51 ريال', originalPrice: '57 ريال', popular: true },
        { amount: '100 ريال', price: '103 ريال', originalPrice: '113 ريال', popular: false },
        { amount: '200 ريال', price: '206 ريال', originalPrice: '226 ريال', popular: false }
      ],
      features: [
        'تطبيقات Android متنوعة',
        'ألعاب مجانية ومدفوعة',
        'أفلام Google Play',
        'كتب وقصص رقمية',
        'اشتراكات متميزة',
        'محتوى تعليمي'
      ],
      platform: 'Google',
      region: 'عالمي',
      gradient: 'from-green-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'microsoft-cards',
      name: 'Microsoft Store',
      logo: '🖥️',
      description: 'بطاقات هدايا مايكروسوفت للبرامج والألعاب والخدمات السحابية',
      denominations: [
        { amount: '50 ريال', price: '52 ريال', originalPrice: '58 ريال', popular: false },
        { amount: '100 ريال', price: '104 ريال', originalPrice: '115 ريال', popular: true },
        { amount: '200 ريال', price: '208 ريال', originalPrice: '230 ريال', popular: false },
        { amount: '300 ريال', price: '312 ريال', originalPrice: '345 ريال', popular: false }
      ],
      features: [
        'Windows 11 والبرامج',
        'Office 365 اشتراكات',
        'Xbox وألعاب PC',
        'OneDrive تخزين سحابي',
        'Azure خدمات سحابية',
        'Surface ومنتجات Microsoft'
      ],
      platform: 'Microsoft',
      region: 'عالمي',
      gradient: 'from-blue-500 to-indigo-600',
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (cardName: string, amount: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${cardName} ${amount} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'Amazon': return <ShoppingBag className="h-4 w-4" />;
      case 'Noon': return <ShoppingBag className="h-4 w-4" />;
      case 'Carrefour': return <ShoppingCart className="h-4 w-4" />;
      case 'Apple': return <Smartphone className="h-4 w-4" />;
      case 'Google': return <Smartphone className="h-4 w-4" />;
      case 'Microsoft': return <CreditCard className="h-4 w-4" />;
      default: return <Gift className="h-4 w-4" />;
    }
  };

  const renderGiftCards = (giftCards: typeof retailGiftCards) => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingBag className="h-4 w-4" />
              بطاقات هدايا التسوق
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🛍️ بطاقات تسوق ذكية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على بطاقات هدايا للتسوق الإلكتروني - Amazon، Noon، iTunes، Google Play وجميع المتاجر الشهيرة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Cards Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="retail" className="text-sm">
                متاجر التسوق
              </TabsTrigger>
              <TabsTrigger value="digital" className="text-sm">
                متاجر رقمية
              </TabsTrigger>
            </TabsList>

            {/* Retail Gift Cards */}
            <TabsContent value="retail">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(retailGiftCards)}
              </div>
            </TabsContent>

            {/* Digital Gift Cards */}
            <TabsContent value="digital">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(digitalGiftCards)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              مميزات بطاقات التسوق لدينا
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              تسوق بذكاء واستمتع بأفضل تجربة شراء مع بطاقات الهدايا المتنوعة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-orange-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل سريع
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                كود البطاقة جاهز خلال دقائق معدودة
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
                متاجر موثوقة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                بطاقات من أشهر المتاجر العالمية
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
                أسعار ممتازة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                خصومات حصرية وأسعار تنافسية
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
                تنوع واسع
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                بطاقات لجميع احتياجات التسوق
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShoppingGiftCards;