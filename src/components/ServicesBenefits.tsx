import { Video, Shield, Zap, Users, Clock, Globe, Award, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ServicesBenefits = () => {
  const benefits = [
    {
      id: 'live-sessions',
      icon: Video,
      title: 'Live Video Sessions',
      titleAr: 'جلسات فيديو مباشرة',
      description: 'Connect directly with our experts through live video calls. Watch them work on your issues in real-time.',
      descriptionAr: 'تواصل مباشرة مع خبرائنا من خلال مكالمات الفيديو المباشرة. شاهدهم وهم يعملون على مشاكلك في الوقت الفعلي.',
      features: ['Screen sharing capability', 'Real-time interaction', 'Record sessions for later', 'Multiple meeting platforms'],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'expert-guides',
      icon: Award,
      title: 'Expert Certified Technicians',
      titleAr: 'فنيون خبراء معتمدون',
      description: 'Our team consists of certified professionals with years of experience in their respective fields.',
      descriptionAr: 'يتكون فريقنا من محترفين معتمدين لديهم سنوات من الخبرة في مجالاتهم المختصة.',
      features: ['Industry certifications', '5+ years experience', 'Continuous training', 'Specialized expertise'],
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'custom-tutorials',
      icon: Zap,
      title: 'Personalized Video Tutorials',
      titleAr: 'دروس فيديو شخصية',
      description: 'Get custom video tutorials created specifically for your setup and requirements. Keep them forever.',
      descriptionAr: 'احصل على دروس فيديو مخصصة تم إنشاؤها خصيصاً لإعدادك ومتطلباتك. احتفظ بها إلى الأبد.',
      features: ['HD video quality', 'Step-by-step instructions', 'Downloadable content', 'Lifetime access'],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24/7 Technical Support',
      titleAr: 'دعم تقني على مدار الساعة',
      description: 'Round-the-clock support through multiple channels. We\'re always here when you need assistance.',
      descriptionAr: 'دعم على مدار الساعة من خلال قنوات متعددة. نحن هنا دائماً عندما تحتاج للمساعدة.',
      features: ['Multiple contact methods', 'Fast response times', 'Follow-up support', 'Emergency assistance'],
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'satisfaction',
      icon: Shield,
      title: '100% Satisfaction Guarantee',
      titleAr: 'ضمان الرضا 100%',
      description: 'If you\'re not completely satisfied with our service, we\'ll make it right or refund your money.',
      descriptionAr: 'إذا لم تكن راضياً تماماً عن خدمتنا، سنصلح الأمر أو نسترد أموالك.',
      features: ['Money-back guarantee', 'Quality assurance', 'Customer satisfaction', 'No questions asked'],
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      id: 'global-reach',
      icon: Globe,
      title: 'Global Availability',
      titleAr: 'توفر عالمي',
      description: 'Our services are available worldwide with support for multiple time zones and languages.',
      descriptionAr: 'خدماتنا متوفرة عالمياً مع دعم لمناطق زمنية ولغات متعددة.',
      features: ['Worldwide coverage', 'Multiple time zones', 'Multi-language support', 'Local expertise'],
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'quick-response',
      icon: Clock,
      title: 'Rapid Response Time',
      titleAr: 'وقت استجابة سريع',
      description: 'Get help when you need it most. Our average response time is under 2 hours for urgent issues.',
      descriptionAr: 'احصل على المساعدة عندما تحتاجها أكثر. متوسط وقت الاستجابة أقل من ساعتين للمسائل العاجلة.',
      features: ['<2 hour response', 'Priority queuing', 'Urgent issue handling', 'Same-day service'],
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'team-collaboration',
      icon: Users,
      title: 'Expert Team Collaboration',
      titleAr: 'تعاون فريق الخبراء',
      description: 'Complex issues get the attention of our entire expert team to ensure the best possible solution.',
      descriptionAr: 'المسائل المعقدة تحصل على اهتمام فريق الخبراء بالكامل لضمان أفضل حل ممكن.',
      features: ['Team expertise', 'Collaborative approach', 'Knowledge sharing', 'Best practices'],
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/20' },
      green: { bg: 'bg-green-500/10', text: 'text-green-500', border: 'border-green-500/20' },
      orange: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/20' },
      emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20' },
      indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-500', border: 'border-indigo-500/20' },
      yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', border: 'border-yellow-500/20' },
      teal: { bg: 'bg-teal-500/10', text: 'text-teal-500', border: 'border-teal-500/20' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-500/10 text-violet-500 border-violet-500/20">
            🚀 Why Choose Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Exceptional <span className="text-violet-500">Service Benefits</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            فوائد الخدمة الاستثنائية
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience unparalleled technical support with our comprehensive range of benefits designed 
            to ensure your complete satisfaction and success.
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
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.gradient}`} />
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

        {/* Process Steps */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">How It Works</h3>
            <p className="text-lg font-cairo text-violet-500 mb-4">كيف يعمل</p>
            <p className="text-muted-foreground">Simple steps to get the help you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Service',
                titleAr: 'اختر الخدمة',
                description: 'Browse our services and select what you need',
                icon: '🔍'
              },
              {
                step: '2',
                title: 'Book Session',
                titleAr: 'احجز جلسة',
                description: 'Schedule a convenient time for live support',
                icon: '📅'
              },
              {
                step: '3',
                title: 'Get Help',
                titleAr: 'احصل على المساعدة',
                description: 'Connect with our expert via video call',
                icon: '💻'
              },
              {
                step: '4',
                title: 'Receive Guide',
                titleAr: 'استلم الدليل',
                description: 'Get a personalized video tutorial',
                icon: '🎥'
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center border-2 border-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-12 h-12 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm font-cairo text-violet-500 mb-2">{step.titleAr}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-500 mb-2">5000+</div>
            <p className="text-muted-foreground">Happy Clients</p>
            <p className="text-sm font-cairo text-accent-teal">عميل سعيد</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
            <p className="text-muted-foreground">Support Available</p>
            <p className="text-sm font-cairo text-accent-teal">دعم متاح</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">99.5%</div>
            <p className="text-muted-foreground">Success Rate</p>
            <p className="text-sm font-cairo text-accent-teal">معدل النجاح</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">&lt; 2h</div>
            <p className="text-muted-foreground">Response Time</p>
            <p className="text-sm font-cairo text-accent-teal">وقت الاستجابة</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
            <p className="text-lg font-cairo text-violet-500 mb-4">مستعد للبدء؟</p>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust us with their technical needs. 
              Book your first session today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600">
                <Video className="h-5 w-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white">
                View All Services
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesBenefits;
