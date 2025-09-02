import { Shield, Clock, HeadphonesIcon, RefreshCw, Star, Users, Award, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SubscriptionBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Verified Accounts',
      titleAr: 'حسابات موثقة',
      description: 'All accounts are verified and tested before delivery',
      descriptionAr: 'جميع الحسابات موثقة ومختبرة قبل التسليم',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Clock,
      title: 'Instant Delivery',
      titleAr: 'تسليم فوري',
      description: 'Get your account details immediately after purchase',
      descriptionAr: 'احصل على تفاصيل حسابك فوراً بعد الشراء',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      titleAr: 'دعم على مدار الساعة',
      description: 'Round-the-clock customer support in Arabic & English',
      descriptionAr: 'دعم العملاء على مدار الساعة بالعربية والإنجليزية',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: RefreshCw,
      title: 'Lifetime Warranty',
      titleAr: 'ضمان مدى الحياة',
      description: 'Free replacement if account stops working',
      descriptionAr: 'استبدال مجاني إذا توقف الحساب عن العمل',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Happy Customers',
      labelAr: 'عميل سعيد'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Customer Rating',
      labelAr: 'تقييم العملاء'
    },
    {
      icon: Award,
      number: '500+',
      label: 'Account Types',
      labelAr: 'نوع حساب'
    },
    {
      icon: Zap,
      number: '99.9%',
      label: 'Success Rate',
      labelAr: 'معدل النجاح'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      nameAr: 'أحمد الراشد',
      location: 'Dubai, UAE',
      locationAr: 'دبي، الإمارات',
      rating: 5,
      comment: 'Amazing service! Got my Netflix account instantly and it works perfectly.',
      commentAr: 'خدمة رائعة! حصلت على حساب نتفليكس فوراً ويعمل بشكل مثالي.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    {
      name: 'Sarah Al-Zahra',
      nameAr: 'سارة الزهراء',
      location: 'Riyadh, KSA',
      locationAr: 'الرياض، السعودية',
      rating: 5,
      comment: 'Best place to get premium accounts. Very reliable and affordable.',
      commentAr: 'أفضل مكان للحصول على حسابات مميزة. موثوق جداً وبأسعار معقولة.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    {
      name: 'Mohammed Al-Farsi',
      nameAr: 'محمد الفارسي',
      location: 'Muscat, Oman',
      locationAr: 'مسقط، عمان',
      rating: 5,
      comment: 'Excellent customer service and quality accounts. Highly recommended!',
      commentAr: 'خدمة عملاء ممتازة وحسابات عالية الجودة. أنصح بشدة!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent-gold/10 text-accent-gold border-accent-gold/20">
              ✨ Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Premium <span className="text-accent-gold">Benefits</span>
            </h2>
            <p className="text-xl font-cairo text-accent-teal mb-4">
              المزايا المميزة لعملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`p-6 text-center border-2 hover:border-accent-gold/50 transition-all duration-300 ${benefit.bgColor}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-4`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm font-cairo text-accent-teal mb-3">{benefit.titleAr}</p>
                <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                <p className="text-xs font-cairo text-accent-gold">{benefit.descriptionAr}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-primary-navy to-secondary-purple text-white p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-accent-gold mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                  <div className="text-xs text-accent-gold font-cairo">{stat.labelAr}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent-teal/10 text-accent-teal border-accent-teal/20">
              💬 Customer Reviews
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-accent-teal">Customers</span> Say
            </h2>
            <p className="text-xl font-cairo text-accent-gold mb-4">
              آراء عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-2 hover:border-accent-gold/50 transition-all duration-300">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-sm text-muted-foreground mb-2 italic">
                  "{testimonial.comment}"
                </blockquote>
                <blockquote className="text-xs font-cairo text-accent-gold mb-4 italic">
                  "{testimonial.commentAr}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Badge className="bg-green-500 text-white text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-cairo text-accent-teal">{testimonial.nameAr}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBenefits;
