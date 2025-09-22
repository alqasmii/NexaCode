import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Smartphone, Globe, Zap, Shield, Mail, CheckCircle, Clock, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ESim = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const upcomingFeatures = [
    {
      id: 'global-plans',
      title: 'خطط عالمية شاملة',
      description: 'اتصال فوري في أكثر من 200 دولة بنقرة واحدة',
      icon: Globe,
      expected: 'قريباً',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'instant-activation',
      title: 'تفعيل فوري',
      description: 'احصل على eSIM جاهز للاستخدام خلال ثوانٍ',
      icon: Zap,
      expected: 'قريباً',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'secure-connection',
      title: 'اتصال آمن ومشفر',
      description: 'أمان عالي المستوى لجميع اتصالاتك',
      icon: Shield,
      expected: 'قريباً',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const plannedDestinations = [
    { country: '🇺🇸 الولايات المتحدة', price: 'من 15 ريال/اليوم' },
    { country: '🇬🇧 المملكة المتحدة', price: 'من 12 ريال/اليوم' },
    { country: '🇫🇷 فرنسا', price: 'من 10 ريال/اليوم' },
    { country: '🇯🇵 اليابان', price: 'من 18 ريال/اليوم' },
    { country: '🇹🇷 تركيا', price: 'من 8 ريال/اليوم' },
    { country: '🇦🇪 الإمارات', price: 'من 5 ريال/اليوم' }
  ];

  const handleEmailSubscription = () => {
    if (!email) {
      toast({
        title: "يرجى إدخال البريد الإلكتروني",
        description: "أدخل بريدك الإلكتروني للحصول على التحديثات",
        variant: "destructive"
      });
      return;
    }

    setIsSubscribed(true);
    toast({
      title: "تم التسجيل بنجاح! 🎉",
      description: "سنرسل لك إشعاراً عند إطلاق خدمة eSIM",
    });
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              قريباً
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              📱 تواصل بلا حدود
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              بطاقات eSIM عالمية للسفر والاتصالات، قريباً بعروض حصرية! 
              سافر للعالم مع اتصال فوري وأسعار منافسة
            </p>
            
            {/* Coming Soon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
            >
              <Star className="h-5 w-5" />
              قريباً - تحت التطوير
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Email Subscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  كن أول من يعلم!
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  سجل بريدك الإلكتروني واحصل على إشعار فور إطلاق الخدمة مع عروض حصرية
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {!isSubscribed ? (
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-right"
                      dir="rtl"
                    />
                    <Button 
                      onClick={handleEmailSubscription}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    >
                      <Mail className="h-4 w-4 ml-2" />
                      أشعرني عند الإطلاق
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      تم التسجيل بنجاح!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      سنرسل لك إشعاراً فور إطلاق خدمة eSIM
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ما الذي ننتظره؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              ميزات رائعة قادمة لتجعل تجربة السفر والاتصال أسهل من أي وقت مضى
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-yellow-500 text-white border-0 mb-2">
                      {feature.expected}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white text-right">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-right">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              وجهات مخططة
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              أسعار متوقعة لبعض الوجهات الشائعة (قابلة للتغيير)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plannedDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-right">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {destination.price}
                      </span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {destination.country}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              الخطة الزمنية المتوقعة
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              نعمل بجد لإطلاق هذه الخدمة في أقرب وقت ممكن
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">التخطيط</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">مكتمل</p>
              </div>

              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full hidden md:block"></div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">التطوير</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">جاري العمل</p>
              </div>

              <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full hidden md:block"></div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">الإطلاق</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">قريباً</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ESim;