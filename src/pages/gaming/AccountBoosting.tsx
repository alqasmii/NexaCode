import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Shield, TrendingUp, Trophy, Target, Gamepad2, Clock, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AccountBoosting = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('competitive');

  const competitiveBoosts = [
    {
      id: 'valorant-boost',
      name: 'Valorant Rank Boost',
      logo: '🎯',
      game: 'Valorant',
      description: 'رفع رتبة فالورانت بواسطة محترفين - من أي رتبة إلى Radiant مع ضمان الأمان',
      services: [
        { 
          name: 'Iron → Silver', 
          price: '80 ريال', 
          duration: '2-3 أيام',
          description: 'رفع سريع للمبتدئين',
          popular: false 
        },
        { 
          name: 'Gold → Diamond', 
          price: '150 ريال', 
          duration: '4-5 أيام',
          description: 'تطوير مهارات متقدمة',
          popular: true 
        },
        { 
          name: 'Diamond → Immortal', 
          price: '280 ريال', 
          duration: '6-8 أيام',
          description: 'وصول للمستوى الاحترافي',
          popular: false 
        },
        { 
          name: 'Immortal → Radiant', 
          price: '450 ريال', 
          duration: '10-12 يوم',
          description: 'النخبة المطلقة',
          popular: false 
        }
      ],
      features: [
        'لعب بواسطة محترفين Radiant',
        'ضمان عدم الحظر 100%',
        'VPN حماية متقدمة',
        'تقارير يومية',
        'دعم مباشر 24/7',
        'ضمان الوصول أو استرداد'
      ],
      gradient: 'from-red-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'csgo-boost',
      name: 'CS2 Rank Boost',
      logo: '🔫',
      game: 'Counter-Strike 2',
      description: 'رفع رتبة CS2 الجديد مع أفضل اللاعبين المحترفين في العالم',
      services: [
        { 
          name: 'Silver → Gold Nova', 
          price: '60 ريال', 
          duration: '2-3 أيام',
          description: 'تحسين الأساسيات',
          popular: false 
        },
        { 
          name: 'Gold Nova → Master Guardian', 
          price: '120 ريال', 
          duration: '3-4 أيام',
          description: 'إتقان التكتيكات',
          popular: true 
        },
        { 
          name: 'Master Guardian → Eagle', 
          price: '200 ريال', 
          duration: '5-6 أيام',
          description: 'مستوى متقدم',
          popular: false 
        },
        { 
          name: 'Eagle → Global Elite', 
          price: '350 ريال', 
          duration: '8-10 أيام',
          description: 'النخبة العالمية',
          popular: false 
        }
      ],
      features: [
        'لاعبون محترفون Global Elite',
        'حماية مضاعفة',
        'Prime Status مضمون',
        'تحسين الإحصائيات',
        'نصائح احترافية',
        'ضمان النتائج'
      ],
      gradient: 'from-orange-500 to-red-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'overwatch-boost',
      name: 'Overwatch 2 Boost',
      logo: '🚀',
      game: 'Overwatch 2',
      description: 'رفع رتبة أوفرواتش 2 مع محترفين في جميع الأدوار - Tank, DPS, Support',
      services: [
        { 
          name: 'Bronze → Gold', 
          price: '70 ريال', 
          duration: '2-3 أيام',
          description: 'تعلم الأساسيات',
          popular: false 
        },
        { 
          name: 'Gold → Diamond', 
          price: '140 ريال', 
          duration: '4-5 أيام',
          description: 'إتقان الأدوار',
          popular: true 
        },
        { 
          name: 'Diamond → Master', 
          price: '250 ريال', 
          duration: '6-7 أيام',
          description: 'تكتيكات متقدمة',
          popular: false 
        },
        { 
          name: 'Master → Grandmaster', 
          price: '400 ريال', 
          duration: '8-12 يوم',
          description: 'المستوى الأعلى',
          popular: false 
        }
      ],
      features: [
        'محترفو Top 500',
        'تدريب جميع الأدوار',
        'تحليل الأداء',
        'استراتيجيات متقدمة',
        'حماية كاملة',
        'نتائج مضمونة'
      ],
      gradient: 'from-blue-500 to-cyan-600',
      bgImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&q=80'
    }
  ];

  const levelingBoosts = [
    {
      id: 'fortnite-level',
      name: 'Fortnite Battle Pass Boost',
      logo: '⚡',
      game: 'Fortnite',
      description: 'رفع مستوى الباتل باس بسرعة للحصول على جميع المكافآت والسكنات',
      services: [
        { 
          name: 'المستوى 1-50', 
          price: '45 ريال', 
          duration: '1-2 يوم',
          description: 'نصف الطريق',
          popular: false 
        },
        { 
          name: 'المستوى 1-100', 
          price: '80 ريال', 
          duration: '2-3 أيام',
          description: 'الباتل باس كاملاً',
          popular: true 
        },
        { 
          name: 'المستوى 100-200', 
          price: '120 ريال', 
          duration: '3-4 أيام',
          description: 'مكافآت إضافية',
          popular: false 
        }
      ],
      features: [
        'جميع مكافآت الباتل باس',
        'V-Bucks مجانية',
        'سكنات حصرية',
        'لعب آمن 100%',
        'إنجاز التحديات',
        'تقدم سريع'
      ],
      gradient: 'from-purple-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'cod-level',
      name: 'Call of Duty Leveling',
      logo: '🏅',
      game: 'Call of Duty',
      description: 'رفع مستوى الأسلحة والكاموز وإنجاز التحديات في أسرع وقت',
      services: [
        { 
          name: 'Weapon Mastery (سلاح واحد)', 
          price: '25 ريال', 
          duration: '1 يوم',
          description: 'إتقان كامل للسلاح',
          popular: false 
        },
        { 
          name: 'Prestige 1-5', 
          price: '100 ريال', 
          duration: '3-4 أيام',
          description: '5 مستويات Prestige',
          popular: true 
        },
        { 
          name: 'All Camos Unlock', 
          price: '180 ريال', 
          duration: '5-7 أيام',
          description: 'جميع الكاموز النادرة',
          popular: false 
        }
      ],
      features: [
        'فتح جميع الكاموز',
        'رفع مستوى الأسلحة',
        'إنجاز التحديات',
        'XP Token مجانية',
        'إحصائيات محسنة',
        'لعب محترف'
      ],
      gradient: 'from-yellow-500 to-orange-600',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'genshin-level',
      name: 'Genshin Impact Leveling',
      logo: '🌟',
      game: 'Genshin Impact',
      description: 'رفع مستوى المغامر والشخصيات وإنجاز المهام والاستكشافات',
      services: [
        { 
          name: 'Adventure Rank 1-30', 
          price: '60 ريال', 
          duration: '2-3 أيام',
          description: 'فتح المحتوى الأساسي',
          popular: false 
        },
        { 
          name: 'Adventure Rank 30-50', 
          price: '120 ريال', 
          duration: '4-5 أيام',
          description: 'محتوى متقدم',
          popular: true 
        },
        { 
          name: 'Character Leveling (شخصية واحدة)', 
          price: '40 ريال', 
          duration: '1-2 يوم',
          description: 'مستوى 90 + مواهب',
          popular: false 
        }
      ],
      features: [
        'Adventure Rank سريع',
        'استكشاف المناطق',
        'إنجاز المهام',
        'جمع الموارد',
        'Domain Clearing',
        'تطوير الشخصيات'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    }
  ];

  const handleAddToCart = (serviceName: string, price: string, duration: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `تم إضافة ${serviceName} بسعر ${price} (${duration}) إلى سلة التسوق`,
    });
  };

  const renderBoostCards = (boosts: any[]) => {
    return boosts.map((boost, index) => (
      <motion.div
        key={boost.id}
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
              style={{ backgroundImage: `url(${boost.bgImage})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${boost.gradient} opacity-80`}></div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  <Trophy className="h-3 w-3 ml-1" />
                  {boost.game}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="text-4xl">{boost.logo}</div>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="h-3 w-3 ml-1" />
                  آمن 100%
                </Badge>
              </div>
            </div>
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-right">
              {boost.name}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">
              {boost.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Boost Services */}
            <div className="space-y-3 mb-6">
              {boost.services.map((service: any, idx: number) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-lg transition-all ${
                    service.popular 
                      ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 border-2 border-purple-200 dark:border-purple-700' 
                      : 'bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(service.name, service.price, service.duration)}
                      className={service.popular 
                        ? "bg-purple-500 hover:bg-purple-600 text-white" 
                        : "bg-gray-500 hover:bg-gray-600 text-white"
                      }
                    >
                      طلب الخدمة
                    </Button>
                    {service.popular && (
                      <Badge className="bg-yellow-500 text-white border-0 text-xs">
                        <Star className="h-3 w-3 ml-1" />
                        الأكثر طلباً
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-right mb-2">
                    <div className={`text-lg font-bold ${
                      service.popular ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'
                    }`}>
                      {service.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 ml-1" />
                      {service.duration}
                    </div>
                    <div className={`font-bold text-lg ${
                      service.popular ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'
                    }`}>
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-2">
              {boost.features.map((feature: string, idx: number) => (
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              رفع المستوى
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🚀 تطوير احترافي
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على خدمات رفع المستوى الاحترافية - رفع الرتب، تطوير الحسابات، وإنجاز التحديات بأمان تام
            </p>
          </motion.div>
        </div>
      </section>

      {/* Boosting Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="competitive" className="text-sm">
                رفع الرتب
              </TabsTrigger>
              <TabsTrigger value="leveling" className="text-sm">
                رفع المستوى
              </TabsTrigger>
            </TabsList>

            {/* Competitive Boosting */}
            <TabsContent value="competitive">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderBoostCards(competitiveBoosts)}
              </div>
            </TabsContent>

            {/* Leveling Boosting */}
            <TabsContent value="leveling">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderBoostCards(levelingBoosts)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا خدمات التطوير لدينا؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              احصل على أفضل خدمات رفع المستوى مع ضمانات أمان وجودة استثنائية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                أمان مطلق
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ضمان عدم الحظر مع حماية VPN متقدمة
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                محترفون نخبة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أفضل اللاعبين المحترفين في العالم
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تقدم سريع
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                إنجاز الأهداف في أقصر وقت ممكن
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                نتائج مضمونة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ضمان الوصول للهدف أو استرداد المال
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountBoosting;