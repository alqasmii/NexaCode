import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Gift, Monitor, Zap, CreditCard, DollarSign, Cloud, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DigitalServicesGiftCards = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('productivity');

  const productivityCards = [
    {
      id: 'office365-cards',
      name: 'Microsoft 365',
      logo: '📊',
      description: 'اشتراكات Microsoft 365 للبرامج المكتبية الاحترافية والخدمات السحابية',
      denominations: [
        { amount: '1 شهر شخصي', price: '35 ريال', originalPrice: '40 ريال', popular: false },
        { amount: '12 شهر شخصي', price: '350 ريال', originalPrice: '400 ريال', popular: true },
        { amount: '1 شهر عائلي', price: '50 ريال', originalPrice: '58 ريال', popular: false },
        { amount: '12 شهر عائلي', price: '500 ريال', originalPrice: '580 ريال', popular: false }
      ],
      features: [
        'Word, Excel, PowerPoint',
        '1TB OneDrive تخزين سحابي',
        'Outlook بريد احترافي',
        'Teams للتعاون الجماعي',
        'تحديثات مستمرة',
        'دعم فني مخصص'
      ],
      platform: 'Microsoft',
      region: 'عالمي',
      gradient: 'from-blue-600 to-indigo-700',
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'adobe-cards',
      name: 'Adobe Creative Cloud',
      logo: '🎨',
      description: 'اشتراكات Adobe Creative Cloud للتصميم والإبداع المهني',
      denominations: [
        { amount: '1 شهر فوتوشوب', price: '80 ريال', originalPrice: '90 ريال', popular: false },
        { amount: '1 شهر كامل', price: '200 ريال', originalPrice: '230 ريال', popular: true },
        { amount: '12 شهر فوتوشوب', price: '850 ريال', originalPrice: '980 ريال', popular: false },
        { amount: '12 شهر كامل', price: '2100 ريال', originalPrice: '2400 ريال', popular: false }
      ],
      features: [
        'Photoshop للتصميم',
        'Illustrator للرسم',
        'Premiere Pro للفيديو',
        'After Effects للمؤثرات',
        'InDesign للنشر',
        '100GB تخزين سحابي'
      ],
      platform: 'Adobe',
      region: 'عالمي',
      gradient: 'from-red-600 to-purple-700',
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'canva-cards',
      name: 'Canva Pro',
      logo: '🖌️',
      description: 'اشتراكات Canva Pro للتصميم السهل والاحترافي',
      denominations: [
        { amount: '1 شهر', price: '45 ريال', originalPrice: '50 ريال', popular: false },
        { amount: '3 أشهر', price: '120 ريال', originalPrice: '140 ريال', popular: true },
        { amount: '6 أشهر', price: '220 ريال', originalPrice: '260 ريال', popular: false },
        { amount: '12 شهر', price: '400 ريال', originalPrice: '480 ريال', popular: false }
      ],
      features: [
        'ملايين القوالب',
        'إزالة الخلفيات',
        'صور premium مجانية',
        'فرق العمل الجماعي',
        'تصدير عالي الجودة',
        'العلامة التجارية الخاصة'
      ],
      platform: 'Canva',
      region: 'عالمي',
      gradient: 'from-cyan-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop&q=80'
    }
  ];

  const cloudCards = [
    {
      id: 'googlecloud-cards',
      name: 'Google Workspace',
      logo: '☁️',
      description: 'اشتراكات Google Workspace للأعمال والإنتاجية السحابية',
      denominations: [
        { amount: '1 شهر أساسي', price: '25 ريال', originalPrice: '30 ريال', popular: false },
        { amount: '1 شهر احترافي', price: '60 ريال', originalPrice: '70 ريال', popular: true },
        { amount: '12 شهر أساسي', price: '270 ريال', originalPrice: '320 ريال', popular: false },
        { amount: '12 شهر احترافي', price: '650 ريال', originalPrice: '750 ريال', popular: false }
      ],
      features: [
        'Gmail احترافي',
        'Google Drive تخزين',
        'Google Meet للاجتماعات',
        'Docs, Sheets, Slides',
        'Calendar للمواعيد',
        'أمان متقدم'
      ],
      platform: 'Google',
      region: 'عالمي',
      gradient: 'from-green-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'dropbox-cards',
      name: 'Dropbox Business',
      logo: '📦',
      description: 'اشتراكات Dropbox للتخزين السحابي الآمن والمشاركة',
      denominations: [
        { amount: '1 شهر Plus', price: '40 ريال', originalPrice: '45 ريال', popular: false },
        { amount: '1 شهر احترافي', price: '75 ريال', originalPrice: '85 ريال', popular: true },
        { amount: '12 شهر Plus', price: '420 ريال', originalPrice: '480 ريال', popular: false },
        { amount: '12 شهر احترافي', price: '800 ريال', originalPrice: '920 ريال', popular: false }
      ],
      features: [
        '2TB-3TB تخزين سحابي',
        'مشاركة آمنة للملفات',
        'Dropbox Paper للتعاون',
        'HelloSign للتوقيعات',
        'نسخ احتياطي تلقائي',
        'دعم فني متقدم'
      ],
      platform: 'Dropbox',
      region: 'عالمي',
      gradient: 'from-blue-500 to-cyan-600',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'zoom-cards',
      name: 'Zoom Pro',
      logo: '📹',
      description: 'اشتراكات Zoom Pro للاجتماعات والمؤتمرات المرئية الاحترافية',
      denominations: [
        { amount: '1 شهر أساسي', price: '55 ريال', originalPrice: '65 ريال', popular: false },
        { amount: '1 شهر احترافي', price: '75 ريال', originalPrice: '90 ريال', popular: true },
        { amount: '12 شهر أساسي', price: '580 ريال', originalPrice: '700 ريال', popular: false },
        { amount: '12 شهر احترافي', price: '800 ريال', originalPrice: '980 ريال', popular: false }
      ],
      features: [
        'اجتماعات مرئية HD',
        'غرف اجتماعات متعددة',
        'تسجيل في السحابة',
        'مشاركة الشاشة',
        'أدوات التعاون',
        'أمان متقدم'
      ],
      platform: 'Zoom',
      region: 'عالمي',
      gradient: 'from-indigo-500 to-purple-600',
      bgImage: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (cardName: string, duration: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${cardName} ${duration} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'Microsoft': return <Monitor className="h-4 w-4" />;
      case 'Adobe': return <Code className="h-4 w-4" />;
      case 'Canva': return <Code className="h-4 w-4" />;
      case 'Google': return <Cloud className="h-4 w-4" />;
      case 'Dropbox': return <Cloud className="h-4 w-4" />;
      case 'Zoom': return <Monitor className="h-4 w-4" />;
      default: return <Gift className="h-4 w-4" />;
    }
  };

  const renderGiftCards = (giftCards: typeof productivityCards) => {
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
                      {denom.amount}
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Monitor className="h-4 w-4" />
              الخدمات الرقمية
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              💼 حلول احترافية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على اشتراكات الخدمات الرقمية المتقدمة - Microsoft 365، Adobe، Google Workspace والحلول السحابية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Digital Services Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="productivity" className="text-sm">
                أدوات الإنتاجية
              </TabsTrigger>
              <TabsTrigger value="cloud" className="text-sm">
                الخدمات السحابية
              </TabsTrigger>
            </TabsList>

            {/* Productivity Services */}
            <TabsContent value="productivity">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(productivityCards)}
              </div>
            </TabsContent>

            {/* Cloud Services */}
            <TabsContent value="cloud">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderGiftCards(cloudCards)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا خدماتنا الرقمية؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              احصل على أدوات العمل الاحترافية والخدمات السحابية المتقدمة بأفضل الأسعار
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل سريع
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ابدأ العمل فوراً مع تفعيل الخدمة
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
                خدمات أصلية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                اشتراكات رسمية من الشركات المطورة
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                حلول شاملة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أدوات متكاملة لجميع احتياجاتك
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalServicesGiftCards;