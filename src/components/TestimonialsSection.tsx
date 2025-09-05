import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3); // Show 3 at a time
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % 3);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + 3) % 3);
  };
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      nameAr: 'أحمد الراشد',
      role: 'Business Owner',
      roleAr: 'صاحب عمل',
      location: 'Muscat, Oman',
      locationAr: 'مسقط، عُمان',
      avatar: 'AR',
      rating: 5,
      text: 'Nexo Codes has been a game-changer for my business. The quality of digital products and the instant delivery service is exceptional. Highly recommended for anyone in the GCC region.',
      textAr: 'نيكسو كودز غيّر مجرى أعمالي. جودة المنتجات الرقمية وخدمة التسليم الفوري استثنائية.',
      product: 'Adobe Creative Suite'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      nameAr: 'فاطمة الزهراء',
      role: 'Graphic Designer',
      roleAr: 'مصممة جرافيك',
      location: 'Dubai, UAE',
      locationAr: 'دبي، الإمارات',
      avatar: 'FZ',
      rating: 5,
      text: 'I have been using Nexo Codes for over a year now. Their customer service is outstanding, and I always find exactly what I need. The platform is user-friendly and secure.',
      textAr: 'أستخدم نيكسو كودز منذ أكثر من عام. خدمة العملاء ممتازة وأجد دائماً ما أحتاجه.',
      product: 'Design Software Bundle'
    },
    {
      id: 3,
      name: 'Mohammad Bin Rashid',
      nameAr: 'محمد بن راشد',
      role: 'IT Manager',
      roleAr: 'مدير تقنية المعلومات',
      location: 'Riyadh, Saudi Arabia',
      locationAr: 'الرياض، السعودية',
      avatar: 'MR',
      rating: 5,
      text: 'As an IT professional, I appreciate the authenticity and quality of software licenses available on Nexo Codes. They have never disappointed me with their service.',
      textAr: 'كمتخصص في تقنية المعلومات، أقدر أصالة وجودة تراخيص البرامج المتوفرة.',
      product: 'Windows Server License'
    },
    {
      id: 4,
      name: 'Sara Al-Mansouri',
      nameAr: 'سارة المنصوري',
      role: 'Content Creator',
      roleAr: 'منشئة محتوى',
      location: 'Doha, Qatar',
      locationAr: 'الدوحة، قطر',
      avatar: 'SM',
      rating: 5,
      text: 'The gaming section is incredible! I found all the gaming accounts and currencies I needed at competitive prices. Fast delivery and genuine products every time.',
      textAr: 'قسم الألعاب رائع! وجدت كل حسابات الألعاب والعملات التي احتجتها بأسعار تنافسية.',
      product: 'Gaming Bundle'
    },
    {
      id: 5,
      name: 'Khalid Al-Otaibi',
      nameAr: 'خالد العتيبي',
      role: 'Entrepreneur',
      roleAr: 'رائد أعمال',
      location: 'Kuwait City, Kuwait',
      locationAr: 'مدينة الكويت، الكويت',
      avatar: 'KO',
      rating: 5,
      text: 'Nexo Codes is my go-to platform for all digital subscriptions. The variety is amazing, and the prices are very reasonable for the GCC market. Excellent service!',
      textAr: 'نيكسو كودز منصتي المفضلة لجميع الاشتراكات الرقمية. التنوع مذهل والأسعار معقولة.',
      product: 'Business Subscriptions'
    },
    {
      id: 6,
      name: 'Amina Al-Hashemi',
      nameAr: 'آمنة الهاشمي',
      role: 'Digital Marketer',
      roleAr: 'متخصصة تسويق رقمي',
      location: 'Manama, Bahrain',
      locationAr: 'المنامة، البحرين',
      avatar: 'AH',
      rating: 5,
      text: 'I love how easy it is to find and purchase digital tools for my marketing campaigns. The support team is very responsive and helpful. Definitely recommended!',
      textAr: 'أحب سهولة العثور على الأدوات الرقمية وشرائها لحملاتي التسويقية. فريق الدعم متجاوب.',
      product: 'Marketing Tools Suite'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cairo font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="text-2xl font-bold text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">{t('testimonials.averageRating')}</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">50,000+</p>
              <p className="text-sm text-muted-foreground">{t('testimonials.happyCustomers')}</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">6</p>
              <p className="text-sm text-muted-foreground">{t('testimonials.gccCountries')}</p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Controls - Dots Only */}
          <div className="flex justify-center items-center gap-2 mb-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                title={`View testimonial set ${index + 1}`}
                aria-label={`View testimonial set ${index + 1}`}
                className={`w-4 h-4 rounded-full transition-all hover:scale-110 ${
                  index === currentTestimonial 
                    ? 'bg-accent-gold shadow-lg' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(currentTestimonial * 3, currentTestimonial * 3 + 3).map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-6 hover:shadow-xl transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-accent-gold/30" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-cairo text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.textAr}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="" alt={testimonial.name} />
                  <AvatarFallback className="bg-accent-gold text-accent-gold-foreground font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-cairo text-accent-gold">
                    {testimonial.nameAr}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                  <p className="text-xs font-cairo text-muted-foreground">
                    {testimonial.roleAr} • {testimonial.locationAr}
                  </p>
                </div>
              </div>

              {/* Product Tag */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Purchased: <span className="text-accent-gold font-medium">{testimonial.product}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { number: '50,000+', label: 'Customers Served', labelAr: 'عميل خدمناهم' },
            { number: '99.9%', label: 'Uptime Guarantee', labelAr: 'ضمان وقت التشغيل' },
            { number: '24/7', label: 'Customer Support', labelAr: 'دعم العملاء' },
            { number: '100%', label: 'Secure Payments', labelAr: 'مدفوعات آمنة' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-accent-gold mb-2">{stat.number}</p>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
              <p className="text-xs font-cairo text-muted-foreground">{stat.labelAr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;