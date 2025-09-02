import { MonitorSpeaker, Code, Wrench, Video, Smartphone, Globe, CreditCard, BookOpen, ChevronRight, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServiceCategories = () => {
  const categories = [
    {
      id: 'pc-optimization',
      name: 'PC Optimization',
      nameAr: 'تحسين الكمبيوتر',
      description: 'Gaming & coding PC optimization for maximum performance',
      descriptionAr: 'تحسين كمبيوتر الألعاب والبرمجة لأقصى أداء',
      icon: MonitorSpeaker,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      count: 25,
      avgPrice: '25 OMR',
      featured: true,
      trending: true,
      services: ['Gaming Optimization', 'Coding Environment', 'System Cleanup', 'Performance Tuning'],
      experts: 8
    },
    {
      id: 'web-development',
      name: 'Web Development',
      nameAr: 'تطوير المواقع',
      description: 'Custom websites, e-commerce, and web applications',
      descriptionAr: 'مواقع مخصصة، متاجر إلكترونية، وتطبيقات ويب',
      icon: Code,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      count: 18,
      avgPrice: '150 OMR',
      featured: true,
      trending: false,
      services: ['Business Websites', 'E-commerce Stores', 'Landing Pages', 'Web Apps'],
      experts: 5
    },
    {
      id: 'troubleshooting',
      name: 'PC Troubleshooting',
      nameAr: 'إصلاح مشاكل الكمبيوتر',
      description: 'Diagnose and fix PC issues, malware removal, repairs',
      descriptionAr: 'تشخيص وإصلاح مشاكل الكمبيوتر، إزالة البرامج الضارة، الإصلاحات',
      icon: Wrench,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      count: 32,
      avgPrice: '20 OMR',
      featured: false,
      trending: true,
      services: ['Virus Removal', 'System Repair', 'Speed Optimization', 'Hardware Diagnosis'],
      experts: 12
    },
    {
      id: 'tutorials',
      name: 'Video Tutorials',
      nameAr: 'دروس الفيديو',
      description: 'Custom video guides and step-by-step tutorials',
      descriptionAr: 'أدلة فيديو مخصصة ودروس خطوة بخطوة',
      icon: Video,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      count: 45,
      avgPrice: '15 OMR',
      featured: true,
      trending: false,
      services: ['Tech Tutorials', 'Software Guides', 'Setup Instructions', 'Troubleshooting Videos'],
      experts: 6
    },
    {
      id: 'mobile-services',
      name: 'Mobile Services',
      nameAr: 'خدمات الجوال',
      description: 'Mobile app development and optimization services',
      descriptionAr: 'تطوير وتحسين تطبيقات الجوال',
      icon: Smartphone,
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      count: 12,
      avgPrice: '100 OMR',
      featured: false,
      trending: true,
      services: ['App Development', 'Mobile Optimization', 'App Store Setup', 'Mobile Testing'],
      experts: 4
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      nameAr: 'التسويق الرقمي',
      description: 'SEO, social media marketing, and online presence',
      descriptionAr: 'تحسين محركات البحث، التسويق عبر وسائل التواصل، والحضور الرقمي',
      icon: Globe,
      iconColor: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      count: 22,
      avgPrice: '75 OMR',
      featured: false,
      trending: false,
      services: ['SEO Optimization', 'Social Media Setup', 'Content Strategy', 'Analytics Setup'],
      experts: 7
    },
    {
      id: 'financial-services',
      name: 'Account Services',
      nameAr: 'خدمات الحسابات',
      description: 'Account funding, verification, and financial setup',
      descriptionAr: 'تمويل الحسابات، التحقق، والإعداد المالي',
      icon: CreditCard,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      count: 8,
      avgPrice: '10 OMR',
      featured: true,
      trending: true,
      services: ['PayPal Funding', 'Account Verification', 'Skrill Setup', 'Digital Wallets'],
      experts: 3
    },
    {
      id: 'education',
      name: 'Tech Education',
      nameAr: 'التعليم التقني',
      description: 'Programming courses, tech mentoring, and skill development',
      descriptionAr: 'دورات البرمجة، الإرشاد التقني، وتطوير المهارات',
      icon: BookOpen,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      count: 15,
      avgPrice: '50 OMR',
      featured: false,
      trending: false,
      services: ['Programming Courses', '1-on-1 Mentoring', 'Career Guidance', 'Skill Assessment'],
      experts: 9
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-500/10 text-violet-500 border-violet-500/20">
            🔧 Service Categories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse by <span className="text-violet-500">Category</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            تصفح حسب الفئات
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect tech service organized by category. 
            From PC optimization to website development, we have experts ready to help.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id} 
                className={`group relative overflow-hidden border-2 ${category.borderColor} ${category.bgColor} hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer`}
              >
                {/* Category Content */}
                <div className="p-6">
                  {/* Header with Icon and Badges */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${category.bgColor} border ${category.borderColor}`}>
                      <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      {category.featured && (
                        <Badge className="bg-yellow-500 text-white text-xs">
                          Featured
                        </Badge>
                      )}
                      {category.trending && (
                        <Badge className="bg-red-500 text-white text-xs">
                          <Zap className="h-3 w-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Category Name and Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm font-cairo text-violet-500 mb-2">{category.nameAr}</p>
                    <p className="text-sm text-muted-foreground mb-1">{category.description}</p>
                    <p className="text-xs font-cairo text-accent-teal">{category.descriptionAr}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{category.count}</p>
                      <p className="text-xs text-muted-foreground">Services</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-violet-500">{category.avgPrice}</p>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                    </div>
                  </div>

                  {/* Experts */}
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4 text-violet-500" />
                    <span className="text-sm text-muted-foreground">{category.experts} Expert{category.experts > 1 ? 's' : ''}</span>
                  </div>

                  {/* Popular Services */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Popular Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.services.slice(0, 2).map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                      {category.services.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{category.services.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Browse Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 group-hover:shadow-lg transition-all duration-300`}
                  >
                    Browse Services
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Category Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.iconColor.replace('text-', 'from-')} to-violet-500`} />
              </Card>
            );
          })}
        </div>

        {/* Featured Categories Highlight */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PC Optimization Spotlight */}
          <Card className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-red-500/20 rounded-xl">
                <MonitorSpeaker className="h-8 w-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">PC Optimization</h3>
                <p className="text-red-500 font-cairo">الخدمة الأكثر طلباً</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Our most popular service category. Get your PC optimized for gaming or coding 
              with live sessions from certified experts.
            </p>
            <div className="flex gap-3">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Book Optimization
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                View Services
              </Button>
            </div>
          </Card>

          {/* Web Development Spotlight */}
          <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-blue-500/20 rounded-xl">
                <Code className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Web Development</h3>
                <p className="text-blue-500 font-cairo">مواقع احترافية مخصصة</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional custom websites built from scratch. Responsive design, 
              SEO optimization, and modern features included.
            </p>
            <div className="flex gap-3">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Start Project
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
