import { Check, Star, Zap, Crown, Shield, Video, MonitorSpeaker, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicePackages = () => {
  const packages = [
    {
      id: 'basic-support',
      name: 'Basic Support',
      nameAr: 'الدعم الأساسي',
      description: 'Perfect for simple troubleshooting and quick fixes',
      descriptionAr: 'مثالي لاستكشاف الأخطاء البسيطة والإصلاحات السريعة',
      price: '15.00',
      originalPrice: '25.00',
      currency: 'OMR',
      duration: '30 minutes',
      durationAr: '30 دقيقة',
      icon: Shield,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      badge: 'Most Popular',
      badgeColor: 'bg-green-500',
      features: [
        'Remote PC troubleshooting',
        'Basic optimization',
        'Malware scan & removal',
        'Email support (24h response)',
        'Basic video tutorial'
      ],
      featuresAr: [
        'استكشاف أخطاء الكمبيوتر عن بُعد',
        'تحسين أساسي',
        'فحص وإزالة البرامج الضارة',
        'دعم البريد الإلكتروني (استجابة 24 ساعة)',
        'درس فيديو أساسي'
      ],
      ideal: 'First-time users, basic issues',
      idealAr: 'المستخدمون لأول مرة، المشاكل الأساسية',
      sessions: '1 Session',
      guarantee: '7 Days',
      rating: 4.5,
      customers: 2847
    },
    {
      id: 'professional-package',
      name: 'Professional Package',
      nameAr: 'الحزمة الاحترافية',
      description: 'Comprehensive optimization and development services',
      descriptionAr: 'خدمات تحسين وتطوير شاملة',
      price: '75.00',
      originalPrice: '150.00',
      currency: 'OMR',
      duration: '2-3 hours',
      durationAr: '2-3 ساعات',
      icon: Star,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      badge: 'Best Value',
      badgeColor: 'bg-blue-500',
      features: [
        'Complete PC optimization (Gaming/Coding)',
        'Custom software installation & setup',
        'Performance monitoring & reports',
        'Live video session with expert',
        'Detailed video guide + documentation',
        'Priority support (2h response)',
        'Follow-up session included'
      ],
      featuresAr: [
        'تحسين شامل للكمبيوتر (ألعاب/برمجة)',
        'تثبيت وإعداد برامج مخصصة',
        'مراقبة الأداء والتقارير',
        'جلسة فيديو مباشرة مع خبير',
        'دليل فيديو مفصل + وثائق',
        'دعم ذو أولوية (استجابة ساعتان)',
        'جلسة متابعة مضمنة'
      ],
      ideal: 'Serious users, complex projects',
      idealAr: 'المستخدمون الجادون، المشاريع المعقدة',
      sessions: '2-3 Sessions',
      guarantee: '30 Days',
      rating: 4.8,
      customers: 1543
    },
    {
      id: 'enterprise-solution',
      name: 'Enterprise Solution',
      nameAr: 'الحل المؤسسي',
      description: 'Complete development and ongoing support services',
      descriptionAr: 'خدمات التطوير الكاملة والدعم المستمر',
      price: '200.00',
      originalPrice: '400.00',
      currency: 'OMR',
      duration: '1-2 weeks',
      durationAr: '1-2 أسبوع',
      icon: Crown,
      color: 'purple',
      gradient: 'from-purple-500 to-violet-500',
      badge: 'Premium',
      badgeColor: 'bg-purple-500',
      features: [
        'Custom website/application development',
        'Complete system optimization & setup',
        'Dedicated project manager',
        'Unlimited revisions during development',
        'Comprehensive video training library',
        '24/7 priority support',
        '90-day maintenance included',
        'Source code & documentation delivery'
      ],
      featuresAr: [
        'تطوير موقع/تطبيق مخصص',
        'تحسين وإعداد النظام الكامل',
        'مدير مشروع مخصص',
        'مراجعات غير محدودة أثناء التطوير',
        'مكتبة فيديو تدريبية شاملة',
        'دعم ذو أولوية على مدار الساعة',
        'صيانة 90 يوم مضمنة',
        'تسليم الكود المصدري والوثائق'
      ],
      ideal: 'Businesses, complex requirements',
      idealAr: 'الشركات، المتطلبات المعقدة',
      sessions: 'Unlimited',
      guarantee: '90 Days',
      rating: 4.9,
      customers: 287
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { text: string; bg: string; border: string } } = {
      green: { text: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
      blue: { text: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
      purple: { text: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-500/10 text-violet-500 border-violet-500/20">
            💎 Service Packages
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-violet-500">Perfect Package</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            اختر الحزمة المثالية لك
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need quick support or comprehensive development services, 
            we have the perfect package to meet your needs and budget.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            const colors = getColorClasses(pkg.color);
            const isPopular = index === 1; // Middle package is popular
            
            return (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
                  isPopular 
                    ? 'border-violet-500/50 hover:border-violet-500 hover:shadow-violet-500/20 scale-105' 
                    : `${colors.border} hover:border-violet-300 hover:shadow-violet-500/10`
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                    🔥 MOST POPULAR - SAVE 50%
                  </div>
                )}

                <div className={`p-8 ${isPopular ? 'pt-16' : ''}`}>
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-2xl ${colors.bg} border ${colors.border} mb-4`}>
                      <IconComponent className={`h-12 w-12 ${colors.text}`} />
                    </div>
                    
                    <Badge className={`${pkg.badgeColor} text-white mb-3`}>
                      {pkg.badge}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-lg font-cairo text-violet-500 mb-3">{pkg.nameAr}</p>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <p className="text-sm font-cairo text-accent-teal">{pkg.descriptionAr}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className={`text-4xl font-bold ${colors.text}`}>
                        {pkg.price} {pkg.currency}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {pkg.originalPrice} {pkg.currency}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.duration} • {pkg.durationAr}</p>
                    <Badge className="mt-2 bg-green-500 text-white">
                      Save {Math.round(((parseFloat(pkg.originalPrice) - parseFloat(pkg.price)) / parseFloat(pkg.originalPrice)) * 100)}%
                    </Badge>
                  </div>

                  {/* Package Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-center mb-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-bold">{pkg.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-center mb-1">
                        <Users className="h-4 w-4 text-violet-500" />
                        <span className="font-bold">{pkg.customers}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Customers</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <div className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <div className={`p-1 rounded-full ${colors.bg}`}>
                            <Check className={`h-3 w-3 ${colors.text}`} />
                          </div>
                          <div>
                            <span className="text-sm text-foreground">{feature}</span>
                            <p className="text-xs font-cairo text-accent-teal">{pkg.featuresAr[fIndex]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <p className="text-muted-foreground">Sessions:</p>
                      <p className="font-semibold">{pkg.sessions}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Guarantee:</p>
                      <p className="font-semibold">{pkg.guarantee}</p>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6 p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">Ideal for:</p>
                    <p className="font-semibold text-violet-600">{pkg.ideal}</p>
                    <p className="text-xs font-cairo text-violet-500">{pkg.idealAr}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      className={`w-full bg-gradient-to-r ${pkg.gradient} text-white hover:shadow-lg transition-all duration-300 ${
                        isPopular ? 'py-4 text-lg' : ''
                      }`}
                      size={isPopular ? 'lg' : 'default'}
                    >
                      {isPopular && <Zap className="h-5 w-5 mr-2" />}
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      className={`w-full ${colors.border} ${colors.text} hover:${colors.bg}`}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Book Consultation
                    </Button>
                  </div>
                </div>

                {/* Package Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.gradient}`} />
              </Card>
            );
          })}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/20 max-w-2xl mx-auto">
            <MonitorSpeaker className="h-12 w-12 text-violet-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Need Something Custom?</h3>
            <p className="text-lg font-cairo text-violet-500 mb-4">تحتاج شيئاً مخصصاً؟</p>
            <p className="text-muted-foreground mb-6">
              Can't find the perfect package? Let's create a custom solution tailored specifically to your needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 text-white hover:bg-violet-700">
                Request Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white">
                Chat with Expert
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
