import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Star, Shield, Lock, Globe, Wifi, Database, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Security = () => {
  const { toast } = useToast();

  const securityServices = [
    {
      id: 'nordvpn',
      name: 'NordVPN Premium',
      logo: '🛡️',
      description: 'أقوى حماية للخصوصية الرقمية - اتصال آمن ومشفر من أي مكان في العالم',
      price: '25 ريال',
      originalPrice: '35 ريال',
      duration: 'شهري',
      features: [
        'أكثر من 5400 خادم عالمي',
        'تشفير عسكري متقدم',
        'سياسة عدم حفظ السجلات',
        'حماية 6 أجهزة',
        'سرعة فائقة بدون قيود',
        'مانع إعلانات مدمج'
      ],
      category: 'حماية',
      popular: true,
      gradient: 'from-blue-600 to-blue-800',
      bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'kaspersky',
      name: 'Kaspersky Total Security',
      logo: '🔒',
      description: 'حماية شاملة من الفيروسات والهجمات الإلكترونية لجميع أجهزتك',
      price: '30 ريال',
      originalPrice: '45 ريال',
      duration: 'شهري',
      features: [
        'حماية فيروسات متقدمة',
        'جدار حماية ذكي',
        'حماية الهوية الرقمية',
        'مدير كلمات المرور',
        'رقابة أبوية شاملة',
        'نسخ احتياطي آمن'
      ],
      category: 'أمان',
      popular: true,
      gradient: 'from-green-600 to-emerald-700',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'malwarebytes',
      name: 'Malwarebytes Premium',
      logo: '🦠',
      description: 'حماية متقدمة من البرمجيات الخبيثة وبرامج التجسس والتهديدات المتطورة',
      price: '20 ريال',
      originalPrice: '30 ريال',
      duration: 'شهري',
      features: [
        'كشف البرمجيات الخبيثة',
        'حماية في الوقت الفعلي',
        'مكافحة برامج الفدية',
        'حماية المتصفحات',
        'فحص سريع ومتقدم',
        'واجهة سهلة الاستخدام'
      ],
      category: 'أمان',
      popular: false,
      gradient: 'from-red-600 to-red-800',
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'surfshark',
      name: 'Surfshark VPN',
      logo: '🌐',
      description: 'VPN سريع وآمن بدون قيود على عدد الأجهزة - حرية الإنترنت الكاملة',
      price: '18 ريال',
      originalPrice: '25 ريال',
      duration: 'شهري',
      features: [
        'أجهزة غير محدودة',
        'أكثر من 3200 خادم',
        'حماية من الإعلانات',
        'تقنية MultiHop',
        'وضع التمويه',
        'دعم 24/7'
      ],
      category: 'خصوصية',
      popular: false,
      gradient: 'from-cyan-600 to-blue-700',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'lastpass',
      name: 'LastPass Premium',
      logo: '🔐',
      description: 'مدير كلمات المرور الأكثر أماناً - احفظ وأدر جميع كلمات مرورك بأمان',
      price: '15 ريال',
      originalPrice: '22 ريال',
      duration: 'شهري',
      features: [
        'كلمات مرور غير محدودة',
        'تزامن جميع الأجهزة',
        'مولد كلمات مرور قوية',
        'مشاركة آمنة',
        'مراقبة الويب المظلم',
        'مصادقة ثنائية'
      ],
      category: 'كلمات مرور',
      popular: false,
      gradient: 'from-gray-600 to-gray-800',
      bgImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'cloudflare',
      name: 'Cloudflare Pro',
      logo: '☁️',
      description: 'تسريع وحماية موقعك الإلكتروني بأقوى شبكة CDN في العالم',
      price: '40 ريال',
      originalPrice: '60 ريال',
      duration: 'شهري',
      features: [
        'شبكة CDN عالمية',
        'حماية DDoS متقدمة',
        'شهادات SSL مجانية',
        'ضغط تلقائي للصور',
        'تحليلات متقدمة',
        'دعم فني مميز'
      ],
      category: 'تقنية',
      popular: false,
      gradient: 'from-orange-500 to-red-600',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&q=80'
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
      case 'حماية': return <Shield className="h-4 w-4" />;
      case 'أمان': return <Lock className="h-4 w-4" />;
      case 'خصوصية': return <Globe className="h-4 w-4" />;
      case 'كلمات مرور': return <Database className="h-4 w-4" />;
      case 'تقنية': return <Zap className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              التقنية/الحماية/الأدوات
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🛡️ احمِ عالمك الرقمي
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              أقوى برامج الحماية، VPN متقدم، وأدوات تقنية احترافية لحماية خصوصيتك وتأمين بياناتك بأفضل الأسعار
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
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
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors text-right">
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
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">
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
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا الأمان الرقمي ضروري؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              احمِ نفسك وبياناتك من التهديدات الإلكترونية المتزايدة
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
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                حماية شاملة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                حماية متعددة الطبقات لجميع أجهزتك وبياناتك الشخصية
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تصفح آمن
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                تصفح الإنترنت بحرية وأمان تام مع حماية هويتك
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                أداء محسن
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                حماية لا تؤثر على الأداء مع تحسينات السرعة
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;