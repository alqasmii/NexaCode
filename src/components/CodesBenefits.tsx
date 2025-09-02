import { Shield, Zap, Headphones, RefreshCw, Award, Lock, Globe, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CodesBenefits = () => {
  const benefits = [
    {
      id: 'instant-delivery',
      icon: Zap,
      title: 'Instant Delivery',
      titleAr: 'تسليم فوري',
      description: 'Get your digital codes delivered to your email within seconds of purchase. No waiting time.',
      descriptionAr: 'احصل على أكوادك الرقمية في بريدك الإلكتروني خلال ثوانٍ من الشراء. بدون انتظار.',
      features: ['Email delivery in < 30 seconds', 'SMS notifications', 'Account dashboard access'],
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      id: 'verified-codes',
      icon: Shield,
      title: 'Verified & Tested',
      titleAr: 'مُتحقق ومُختبر',
      description: 'Every code is thoroughly tested and verified before being sold. 100% working guarantee.',
      descriptionAr: 'كل كود يتم اختباره والتحقق منه بدقة قبل البيع. ضمان عمل 100%.',
      features: ['Pre-tested codes', 'Quality assurance', 'Working guarantee'],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24/7 Customer Support',
      titleAr: 'دعم العملاء 24/7',
      description: 'Our dedicated support team is available round the clock to help with any issues.',
      descriptionAr: 'فريق الدعم المخصص متاح على مدار الساعة للمساعدة في أي مشاكل.',
      features: ['Live chat support', 'Email assistance', 'Multiple languages'],
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'money-back',
      icon: RefreshCw,
      title: 'Money-Back Guarantee',
      titleAr: 'ضمان استرداد الأموال',
      description: 'If a code doesn\'t work, we\'ll replace it or refund your money. No questions asked.',
      descriptionAr: 'إذا لم يعمل الكود، سنستبدله أو نسترد أموالك. بدون أسئلة.',
      features: ['30-day guarantee', 'Instant replacements', 'Full refunds'],
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'premium-quality',
      icon: Award,
      title: 'Premium Quality',
      titleAr: 'جودة مميزة',
      description: 'We source our codes from official distributors and authorized partners only.',
      descriptionAr: 'نحصل على أكوادنا من الموزعين الرسميين والشركاء المعتمدين فقط.',
      features: ['Official sources', 'Authorized partners', 'Legal compliance'],
      color: 'yellow',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'secure-payment',
      icon: Lock,
      title: 'Secure Payments',
      titleAr: 'مدفوعات آمنة',
      description: 'Your payment information is protected with bank-level encryption and security.',
      descriptionAr: 'معلومات الدفع محمية بتشفير وأمان على مستوى البنوك.',
      features: ['SSL encryption', 'PCI compliance', 'Multiple payment methods'],
      color: 'red',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'global-reach',
      icon: Globe,
      title: 'Global Coverage',
      titleAr: 'تغطية عالمية',
      description: 'Codes available for all regions with worldwide shipping and support.',
      descriptionAr: 'أكواد متوفرة لجميع المناطق مع الشحن والدعم العالمي.',
      features: ['Worldwide availability', 'Regional codes', 'Multi-currency'],
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'fast-processing',
      icon: Clock,
      title: 'Lightning Fast',
      titleAr: 'سرعة البرق',
      description: 'Automated system ensures the fastest possible processing and delivery times.',
      descriptionAr: 'النظام الآلي يضمن أسرع أوقات المعالجة والتسليم الممكنة.',
      features: ['Automated processing', 'Optimized delivery', 'Real-time updates'],
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; badge: string } } = {
      emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20', badge: 'bg-emerald-500' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20', badge: 'bg-blue-500' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/20', badge: 'bg-purple-500' },
      orange: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/20', badge: 'bg-orange-500' },
      yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', border: 'border-yellow-500/20', badge: 'bg-yellow-500' },
      red: { bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500/20', badge: 'bg-red-500' },
      teal: { bg: 'bg-teal-500/10', text: 'text-teal-500', border: 'border-teal-500/20', badge: 'bg-teal-500' },
      indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-500', border: 'border-indigo-500/20', badge: 'bg-indigo-500' }
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-500 border-blue-500/20">
            ✨ Why Choose NexoCode
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Unmatched <span className="text-blue-500">Benefits</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            فوائد لا مثيل لها
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the best digital code marketplace with premium features, 
            instant delivery, and unbeatable customer service. Your satisfaction is our guarantee.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            const colors = getColorClasses(benefit.color);
            
            return (
              <Card 
                key={benefit.id} 
                className={`group relative overflow-hidden border-2 ${colors.border} ${colors.bg} hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${colors.bg} border ${colors.border} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className={`text-sm font-cairo ${colors.text} mb-3`}>{benefit.titleAr}</p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <p className="text-xs font-cairo text-accent-teal mb-4">
                    {benefit.descriptionAr}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${colors.badge}`} />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gradient Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient}`} />

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Security Guarantee */}
          <Card className="p-8 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <div className="inline-flex p-6 rounded-full bg-green-500/20 mb-6">
              <Shield className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">100% Secure</h3>
            <p className="text-green-500 font-cairo mb-4">آمان 100%</p>
            <p className="text-muted-foreground">
              Bank-level security with SSL encryption and fraud protection. 
              Your data and payments are completely safe with us.
            </p>
          </Card>

          {/* Satisfaction Guarantee */}
          <Card className="p-8 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <div className="inline-flex p-6 rounded-full bg-blue-500/20 mb-6">
              <Award className="h-12 w-12 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">99.9% Success Rate</h3>
            <p className="text-blue-500 font-cairo mb-4">معدل نجاح 99.9%</p>
            <p className="text-muted-foreground">
              Thousands of satisfied customers trust us daily. 
              Join our community of happy digital code buyers.
            </p>
          </Card>

          {/* Speed Guarantee */}
          <Card className="p-8 text-center bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/20">
            <div className="inline-flex p-6 rounded-full bg-purple-500/20 mb-6">
              <Zap className="h-12 w-12 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Lightning Fast</h3>
            <p className="text-purple-500 font-cairo mb-4">سرعة البرق</p>
            <p className="text-muted-foreground">
              Average delivery time under 30 seconds. 
              Get your codes instantly and start using them right away.
            </p>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">500K+</div>
            <p className="text-muted-foreground">Codes Delivered</p>
            <p className="text-sm font-cairo text-accent-teal">كود مُسلم</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
            <p className="text-muted-foreground">Customer Support</p>
            <p className="text-sm font-cairo text-accent-teal">دعم العملاء</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">99.9%</div>
            <p className="text-muted-foreground">Success Rate</p>
            <p className="text-sm font-cairo text-accent-teal">معدل النجاح</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">&lt; 30s</div>
            <p className="text-muted-foreground">Delivery Time</p>
            <p className="text-sm font-cairo text-accent-teal">وقت التسليم</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodesBenefits;
