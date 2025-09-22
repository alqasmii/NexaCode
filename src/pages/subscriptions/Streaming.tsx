import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Star, Monitor, Music, Tv, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Streaming = () => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const streamingServices = [
    {
      id: 'netflix',
      name: 'Netflix Premium',
      logo: '🎬',
      description: 'استمتع بأحدث الأفلام والمسلسلات العالمية والعربية بجودة 4K Ultra HD',
      price: '25 ريال',
      originalPrice: '35 ريال',
      duration: 'شهري',
      features: [
        '4 حسابات مستقلة',
        'جودة 4K Ultra HD',
        'مشاهدة على جميع الأجهزة',
        'تحميل للمشاهدة بدون إنترنت',
        'محتوى عالمي وعربي حصري',
        'بدون إعلانات'
      ],
      category: 'ترفيه',
      popular: true,
      gradient: 'from-red-500 to-red-600',
      bgImage: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'shahid',
      name: 'شاهد VIP',
      logo: '🎭',
      description: 'أضخم مكتبة محتوى عربي حصري - مسلسلات، أفلام، رياضة مباشرة',
      price: '18 ريال',
      originalPrice: '25 ريال',
      duration: 'شهري',
      features: [
        'محتوى عربي حصري',
        'مباريات دوري المحترفين',
        'أحدث المسلسلات العربية',
        'أفلام عربية وأجنبية',
        'جودة HD عالية',
        'مشاهدة على 5 أجهزة'
      ],
      category: 'عربي',
      popular: false,
      gradient: 'from-yellow-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1489599142011-4e2e1e8ef7a9?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'osn',
      name: 'OSN Streaming',
      logo: '🎪',
      description: 'أفضل الأفلام الهوليوودية والمسلسلات العالمية الحديثة',
      price: '22 ريال',
      originalPrice: '30 ريال',
      duration: 'شهري',
      features: [
        'أحدث أفلام هوليوود',
        'مسلسلات HBO و Showtime',
        'محتوى عائلي آمن',
        'جودة 4K مدعومة',
        'أكثر من 18,000 ساعة محتوى',
        'تحديث أسبوعي'
      ],
      category: 'أفلام',
      popular: false,
      gradient: 'from-purple-500 to-purple-600',
      bgImage: 'https://images.unsplash.com/photo-1489599142011-4e2e1e8ef7a9?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'spotify',
      name: 'Spotify Premium',
      logo: '🎵',
      description: 'ملايين الأغاني والبودكاست بجودة عالية وبدون إعلانات',
      price: '15 ريال',
      originalPrice: '20 ريال',
      duration: 'شهري',
      features: [
        'أكثر من 70 مليون أغنية',
        'جودة صوت عالية',
        'تحميل للاستماع بدون إنترنت',
        'تخطي الأغاني بلا حدود',
        'بدون إعلانات',
        'بودكاست حصرية'
      ],
      category: 'موسيقى',
      popular: true,
      gradient: 'from-green-500 to-green-600',
      bgImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'youtube-premium',
      name: 'YouTube Premium',
      logo: '📺',
      description: 'استمتع بيوتيوب بدون إعلانات مع إمكانية التحميل والتشغيل في الخلفية',
      price: '20 ريال',
      originalPrice: '28 ريال',
      duration: 'شهري',
      features: [
        'مشاهدة بدون إعلانات',
        'تحميل للمشاهدة بدون إنترنت',
        'تشغيل في الخلفية',
        'YouTube Music مجاناً',
        'محتوى YouTube Originals',
        'مشاركة مع العائلة'
      ],
      category: 'فيديو',
      popular: false,
      gradient: 'from-red-500 to-red-700',
      bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'disney-plus',
      name: 'Disney+ Premium',
      logo: '🏰',
      description: 'عالم سحري من أفلام ديزني، مارفل، ستار وورز وناشيونال جيوغرافيك',
      price: '28 ريال',
      originalPrice: '35 ريال',
      duration: 'شهري',
      features: [
        'محتوى ديزني الكامل',
        'أفلام مارفل الحصرية',
        'مسلسلات ستار وورز',
        'ناشيونال جيوغرافيك',
        'جودة 4K و IMAX',
        'محتوى عائلي آمن'
      ],
      category: 'عائلي',
      popular: false,
      gradient: 'from-blue-500 to-purple-600',
      bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (serviceName: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${serviceName} بسعر ${price} إلى سلة التسوق`,
    });
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'ترفيه': return <Monitor className="h-4 w-4" />;
      case 'موسيقى': return <Music className="h-4 w-4" />;
      case 'عربي': return <Tv className="h-4 w-4" />;
      case 'أفلام': return <Play className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Monitor className="h-4 w-4" />
              البث والترفيه
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🎬 استمتع بأفضل المحتوى العالمي
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              اكتشف عالماً لا محدود من الترفيه مع أفضل منصات البث العالمية والعربية بأسعار حصرية لا تُقاوم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streamingServices.map((service, index) => (
              <motion.div
                key={service.id}
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
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-80`}></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {service.popular && (
                          <Badge className="bg-yellow-500 text-white border-0">
                            <Star className="h-3 w-3 ml-1" />
                            الأكثر طلباً
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {getCategoryIcon(service.category)}
                          <span className="mr-1">{service.category}</span>
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="text-4xl">{service.logo}</div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors text-right">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Pricing */}
                    <div className="mb-6 text-right">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <span className="text-sm text-gray-500 line-through">
                          {service.originalPrice}
                        </span>
                        <span className="text-3xl font-bold text-red-600 dark:text-red-400">
                          {service.price}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {service.duration}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                        وفر {((parseFloat(service.originalPrice.replace(/\D/g, '')) - parseFloat(service.price.replace(/\D/g, ''))) / parseFloat(service.originalPrice.replace(/\D/g, '')) * 100).toFixed(0)}%
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300 text-right">
                          <span className="flex-1 text-right">{feature}</span>
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button 
                      onClick={() => handleAddToCart(service.name, service.price)}
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-200`}
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
              لماذا تختار خدماتنا؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              نوفر لك أفضل الاشتراكات بأسعار منافسة وضمان كامل
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                ضمان المصداقية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                جميع الاشتراكات أصلية ومضمونة 100%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                أفضل الأسعار
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أسعار تنافسية وعروض حصرية لا تجدها في مكان آخر
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل فوري
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                احصل على اشتراكك فوراً بعد إتمام عملية الشراء
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Streaming;