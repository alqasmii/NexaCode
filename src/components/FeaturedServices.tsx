import { MonitorSpeaker, Code, Wrench, Video, Star, Clock, Users, MessageCircle, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const FeaturedServices = () => {
  const { t, isRTL } = useLanguage();
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const featuredServices = [
    {
      id: 'pc-gaming-optimization',
      name: 'PC Gaming Optimization',
      nameAr: 'تحسين الكمبيوتر للألعاب',
      description: 'Complete gaming PC optimization for maximum FPS and performance. We\'ll optimize your system settings, update drivers, and configure games.',
      descriptionAr: 'تحسين شامل لكمبيوتر الألعاب للحصول على أقصى أداء وإطارات في الثانية. سنحسن إعدادات النظام وتحديث التعريفات وضبط الألعاب.',
      price: '25.00',
      originalPrice: '50.00',
      currency: 'OMR',
      duration: '1-2 hours',
      durationAr: '1-2 ساعة',
      rating: 4.9,
      reviews: 847,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80',
      icon: MonitorSpeaker,
      features: ['Game Settings Optimization', 'Driver Updates', 'System Cleanup', 'Performance Monitoring'],
      serviceType: 'Live Session + Video Guide',
      serviceTypeAr: 'جلسة مباشرة + دليل فيديو',
      badge: 'Most Popular',
      badgeAr: 'الأكثر شعبية',
      category: 'PC Optimization',
      expert: 'Ahmed Al-Rashid',
      expertAr: 'أحمد الراشد',
      availability: 'Available Now',
      availabilityAr: 'متاح الآن'
    },
    {
      id: 'website-development',
      name: 'Custom Website Development',
      nameAr: 'تطوير مواقع مخصصة',
      description: 'Professional website development from scratch. We create responsive, modern websites tailored to your business needs.',
      descriptionAr: 'تطوير مواقع احترافية من الصفر. ننشئ مواقع متجاوبة وحديثة مصممة خصيصاً لاحتياجات عملك.',
      price: '150.00',
      originalPrice: '300.00',
      currency: 'OMR',
      duration: '1-2 weeks',
      durationAr: '1-2 أسبوع',
      rating: 4.8,
      reviews: 324,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80',
      icon: Code,
      features: ['Responsive Design', 'SEO Optimization', 'Admin Panel', 'Mobile Compatible'],
      serviceType: 'Custom Development',
      serviceTypeAr: 'تطوير مخصص',
      badge: 'Premium',
      badgeAr: 'مميز',
      category: 'Development',
      expert: 'Sara Al-Zahra',
      expertAr: 'سارة الزهراء',
      availability: '3 Slots Left',
      availabilityAr: '3 مواعيد متبقية'
    },
    {
      id: 'pc-troubleshooting',
      name: 'PC Troubleshooting & Repair',
      nameAr: 'إصلاح وحل مشاكل الكمبيوتر',
      description: 'Diagnose and fix PC issues remotely. From slow performance to software conflicts, we solve it all.',
      descriptionAr: 'تشخيص وإصلاح مشاكل الكمبيوتر عن بُعد. من الأداء البطيء إلى تعارض البرامج، نحل كل شيء.',
      price: '20.00',
      originalPrice: '40.00',
      currency: 'OMR',
      duration: '30-60 minutes',
      durationAr: '30-60 دقيقة',
      rating: 4.7,
      reviews: 1256,
      image: 'https://images.unsplash.com/photo-1518796550596-95ed7c48e4a0?auto=format&fit=crop&w=400&q=80',
      icon: Wrench,
      features: ['Remote Diagnosis', 'Malware Removal', 'System Repair', 'Speed Optimization'],
      serviceType: 'Live Troubleshooting',
      serviceTypeAr: 'استكشاف أخطاء مباشر',
      badge: 'Quick Fix',
      badgeAr: 'إصلاح سريع',
      category: 'Troubleshooting',
      expert: 'Omar Al-Kindi',
      expertAr: 'عمر الكندي',
      availability: 'Available Now',
      availabilityAr: 'متاح الآن'
    },
    {
      id: 'coding-environment',
      name: 'Coding Environment Setup',
      nameAr: 'إعداد بيئة البرمجة',
      description: 'Set up the perfect coding environment with IDEs, tools, and configurations optimized for your programming needs.',
      descriptionAr: 'إعداد بيئة البرمجة المثالية مع محررات الكود والأدوات والإعدادات المحسنة لاحتياجات البرمجة.',
      price: '30.00',
      originalPrice: '60.00',
      currency: 'OMR',
      duration: '1-2 hours',
      durationAr: '1-2 ساعة',
      rating: 4.6,
      reviews: 543,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      icon: Code,
      features: ['IDE Installation', 'Extension Setup', 'Git Configuration', 'Environment Variables'],
      serviceType: 'Setup & Configuration',
      serviceTypeAr: 'إعداد وتكوين',
      badge: 'Developer Favorite',
      badgeAr: 'مفضل المطورين',
      category: 'Development',
      expert: 'Khalid Al-Balushi',
      expertAr: 'خالد البلوشي',
      availability: 'Book Appointment',
      availabilityAr: 'احجز موعد'
    },
    {
      id: 'account-funding',
      name: 'Account Funding Services',
      nameAr: 'خدمات تمويل الحسابات',
      description: 'Secure funding for your PayPal, Skrill, or other digital accounts. Safe, fast, and reliable service.',
      descriptionAr: 'تمويل آمن لحسابات باي بال أو سكريل أو الحسابات الرقمية الأخرى. خدمة آمنة وسريعة وموثوقة.',
      price: '5.00',
      originalPrice: '10.00',
      currency: 'OMR',
      duration: '5-15 minutes',
      durationAr: '5-15 دقيقة',
      rating: 4.5,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80',
      icon: Shield,
      features: ['Secure Processing', 'Multiple Platforms', 'Instant Transfer', '24/7 Available'],
      serviceType: 'Digital Transaction',
      serviceTypeAr: 'معاملة رقمية',
      badge: 'Secure',
      badgeAr: 'آمن',
      category: 'Financial',
      expert: 'Fatima Al-Hashmi',
      expertAr: 'فاطمة الهاشمي',
      availability: 'Available Now',
      availabilityAr: 'متاح الآن'
    },
    {
      id: 'tutorial-videos',
      name: 'Custom Tutorial Videos',
      nameAr: 'فيديوهات تعليمية مخصصة',
      description: 'Get personalized video tutorials for any tech topic. Step-by-step guides recorded specifically for your needs.',
      descriptionAr: 'احصل على فيديوهات تعليمية شخصية لأي موضوع تقني. أدلة خطوة بخطوة مسجلة خصيصاً لاحتياجاتك.',
      price: '15.00',
      originalPrice: '30.00',
      currency: 'OMR',
      duration: '10-30 minutes',
      durationAr: '10-30 دقيقة',
      rating: 4.4,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80',
      icon: Video,
      features: ['HD Recording', 'Voice Explanation', 'Downloadable', 'Lifetime Access'],
      serviceType: 'Video Tutorial',
      serviceTypeAr: 'درس فيديو',
      badge: 'Educational',
      badgeAr: 'تعليمي',
      category: 'Tutorials',
      expert: 'Ali Al-Siyabi',
      expertAr: 'علي السيابي',
      availability: '2-3 Days',
      availabilityAr: '2-3 أيام'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'most popular': return 'bg-red-500';
      case 'premium': return 'bg-purple-500';
      case 'quick fix': return 'bg-green-500';
      case 'developer favorite': return 'bg-blue-500';
      case 'secure': return 'bg-yellow-500';
      case 'educational': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className={`container mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-500/10 text-violet-500 border-violet-500/20">
            {t('services.featured.title')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.featured.title')} <span className="text-violet-500">{t('services.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.featured.subtitle')}
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={service.id} className="group overflow-hidden border-2 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                {/* Service Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className={`${getBadgeColor(service.badge)} text-white font-semibold`}>
                      {service.badge}
                    </Badge>
                    <Badge className="bg-black/70 text-white">
                      <IconComponent className="h-3 w-3 mr-1" />
                      {service.category}
                    </Badge>
                  </div>

                  {/* Service Type Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-violet-600 text-white">
                      {service.serviceType}
                    </Badge>
                  </div>

                  {/* Availability */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className={`${
                      service.availability.includes('Available Now') || service.availability.includes('متاح الآن')
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-600 text-white'
                    }`}>
                      <div className={`w-2 h-2 rounded-full mr-1 ${
                        service.availability.includes('Available Now') || service.availability.includes('متاح الآن')
                          ? 'bg-green-200 animate-pulse'
                          : 'bg-orange-200'
                      }`} />
                      {isRTL ? service.availabilityAr : service.availability}
                    </Badge>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {isRTL ? service.nameAr : service.name}
                      </h3>
                      <p className="text-sm font-cairo text-violet-500">
                        {isRTL ? service.name : service.nameAr}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                      <span className="text-xs text-muted-foreground">({service.reviews} {t('services.common.reviews')})</span>
                    </div>
                  </div>

                  {/* Expert */}
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-violet-500" />
                    <span className="text-sm text-muted-foreground">
                      {t('services.benefits.expertsAvailable')}: {isRTL ? service.expertAr : service.expert}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {isRTL ? service.descriptionAr : service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Price and Duration */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-violet-500">
                          {service.price} {service.currency}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {service.originalPrice} {service.currency}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{isRTL ? service.durationAr : service.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{t('codes.featured.originalPrice')}</p>
                      <p className="text-sm font-semibold text-green-600">
                        {Math.round(((parseFloat(service.originalPrice) - parseFloat(service.price)) / parseFloat(service.originalPrice)) * 100)}% OFF
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Button className="flex-1 bg-violet-600 text-white hover:bg-violet-700 font-semibold">
                      <Video className={`h-4 w-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                      {t('services.actions.bookConsultation')}
                    </Button>
                    <Button variant="outline" size="sm" className="px-3 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Service Features */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3 text-violet-500" />
                      <span>{t('services.featured.instantSupport')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-green-500" />
                      <span>{t('services.featured.satisfactionGuarantee')}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white">
            {t('services.actions.viewServices')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
