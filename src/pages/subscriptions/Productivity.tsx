import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Star, Briefcase, Monitor, PenTool, Database, Cloud, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Productivity = () => {
  const { toast } = useToast();

  const productivityServices = [
    {
      id: 'office365',
      name: 'Microsoft 365 Premium',
      logo: '📊',
      description: 'أدوات الإنتاجية الأكثر قوة في العالم - وورد، إكسل، باوربوينت، تيمز والمزيد',
      price: '35 ريال',
      originalPrice: '50 ريال',
      duration: 'شهري',
      features: [
        'جميع تطبيقات أوفيس',
        'تيمز للتعاون الجماعي',
        'OneDrive 1TB تخزين سحابي',
        'Outlook Professional',
        'دعم جميع الأجهزة',
        'تحديثات تلقائية'
      ],
      category: 'إنتاجية',
      popular: true,
      gradient: 'from-blue-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'adobe-creative',
      name: 'Adobe Creative Cloud',
      logo: '🎨',
      description: 'حزمة التصميم الإبداعي الكاملة - فوتوشوب، إليستريتور، إن ديزاين وأكثر',
      price: '80 ريال',
      originalPrice: '120 ريال',
      duration: 'شهري',
      features: [
        'Photoshop CC كامل',
        'Illustrator للتصميم المتجهي',
        'InDesign للنشر',
        'Premiere Pro للمونتاج',
        'After Effects للموشن',
        'تخزين سحابي 100GB'
      ],
      category: 'تصميم',
      popular: true,
      gradient: 'from-red-500 to-purple-600',
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'canva-pro',
      name: 'Canva Pro',
      logo: '🖌️',
      description: 'أسهل أداة تصميم في العالم - ملايين القوالب والعناصر الاحترافية',
      price: '20 ريال',
      originalPrice: '30 ريال',
      duration: 'شهري',
      features: [
        'ملايين القوالب الاحترافية',
        'عناصر وصور مميزة',
        'إزالة خلفية الصور',
        'تصدير بجودة عالية',
        'تعاون فريق العمل',
        'مكتبة العلامة التجارية'
      ],
      category: 'تصميم',
      popular: false,
      gradient: 'from-purple-500 to-pink-600',
      bgImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'notion',
      name: 'Notion Pro',
      logo: '📋',
      description: 'مساحة العمل الموحدة للملاحظات، قواعد البيانات، إدارة المشاريع والمزيد',
      price: '25 ريال',
      originalPrice: '35 ريال',
      duration: 'شهري',
      features: [
        'مساحة عمل لا محدودة',
        'قواعد بيانات متقدمة',
        'قوالب احترافية جاهزة',
        'تعاون الفريق',
        'مزامنة جميع الأجهزة',
        'تاريخ إصدار كامل'
      ],
      category: 'تنظيم',
      popular: false,
      gradient: 'from-gray-600 to-gray-800',
      bgImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'grammarly',
      name: 'Grammarly Premium',
      logo: '✍️',
      description: 'مساعد الكتابة الذكي لتحسين النصوص الإنجليزية والعربية',
      price: '18 ريال',
      originalPrice: '25 ريال',
      duration: 'شهري',
      features: [
        'تصحيح نحوي متقدم',
        'اقتراحات أسلوبية',
        'كشف الانتحال',
        'مساعد كتابة ذكي',
        'دعم جميع المنصات',
        'قاموس شخصي'
      ],
      category: 'كتابة',
      popular: false,
      gradient: 'from-green-500 to-green-600',
      bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'dropbox',
      name: 'Dropbox Business',
      logo: '☁️',
      description: 'تخزين سحابي آمن ومزامنة ملفات متقدمة للشركات والفرق',
      price: '30 ريال',
      originalPrice: '40 ريال',
      duration: 'شهري',
      features: [
        '3TB تخزين سحابي',
        'مزامنة تلقائية',
        'مشاركة آمنة',
        'نسخ احتياطية',
        'إدارة فريق العمل',
        'أمان متقدم'
      ],
      category: 'تخزين',
      popular: false,
      gradient: 'from-blue-400 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=200&fit=crop&q=80'
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
      case 'إنتاجية': return <Briefcase className="h-4 w-4" />;
      case 'تصميم': return <PenTool className="h-4 w-4" />;
      case 'تنظيم': return <Database className="h-4 w-4" />;
      case 'كتابة': return <Monitor className="h-4 w-4" />;
      case 'تخزين': return <Cloud className="h-4 w-4" />;
      default: return <Briefcase className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              الإنتاجية والعمل والتصميم
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              💼 اطلق إبداعك المهني
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              احصل على أقوى أدوات الإنتاجية والتصميم في العالم - مايكروسوفت أوفيس، أدوبي، كانفا وجميع الأدوات التي تحتاجها للنجاح
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productivityServices.map((service, index) => (
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
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-right">
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
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا نحن الخيار الأفضل للمحترفين؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              نوفر لك أدوات الإنتاجية الاحترافية بأسعار تنافسية وضمان كامل
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                دعم احترافي
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                فريق دعم متخصص متاح 24/7 لمساعدتك في جميع احتياجاتك
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تفعيل سحابي
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                احصل على حساباتك فوراً مع إعداد سحابي متكامل ومزامنة تلقائية
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                أحدث الإصدارات
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                احصل دائماً على أحدث إصدارات البرامج مع التحديثات التلقائية
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productivity;