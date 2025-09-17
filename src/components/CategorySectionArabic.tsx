import { ArrowRight, TrendingUp, Clock, Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CategorySection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const categories = [
    {
      id: 'apps',
      title: 'التطبيقات المميزة',
      description: 'احصل على أفضل التطبيقات المدفوعة مجاناً',
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      href: '/apps',
      trending: true,
      newCount: 25,
      products: [
        { name: 'Adobe Creative Suite', price: '299 ر.س', discount: '-70%' },
        { name: 'Microsoft Office 365', price: '150 ر.س', discount: '-80%' },
        { name: 'AutoCAD Pro', price: '450 ر.س', discount: '-60%' },
      ]
    },
    {
      id: 'subscriptions',
      title: 'الاشتراكات الرقمية',
      description: 'نتفليكس، سبوتيفاي، ديزني بلس والمزيد',
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80",
      href: '/products?category=subscriptions',
      trending: true,
      newCount: 18,
      products: [
        { name: 'Netflix Premium', price: '45 ر.س', discount: '-50%' },
        { name: 'Spotify Premium', price: '20 ر.س', discount: '-60%' },
        { name: 'Disney+ Premium', price: '35 ر.س', discount: '-40%' },
      ]
    },
    {
      id: 'gaming',
      title: 'الألعاب والحسابات',
      description: 'ألعاب Steam، PlayStation، Xbox وحسابات مميزة',
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80",
      href: '/products?category=gaming',
      trending: false,
      newCount: 32,
      products: [
        { name: 'Steam Wallet', price: '100 ر.س', discount: '-20%' },
        { name: 'PlayStation Plus', price: '80 ر.س', discount: '-30%' },
        { name: 'Xbox Game Pass', price: '60 ر.س', discount: '-25%' },
      ]
    },
    {
      id: 'codes',
      title: 'أكواد الخصم',
      description: 'كوبونات وأكواد خصم لجميع المتاجر',
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      href: '/products?category=codes',
      trending: true,
      newCount: 12,
      products: [
        { name: 'Amazon كوبون', price: '25 ر.س', discount: '-90%' },
        { name: 'Noon كوبون', price: '30 ر.س', discount: '-85%' },
        { name: 'Extra كوبون', price: '40 ر.س', discount: '-80%' },
      ]
    },
    {
      id: 'services',
      title: 'الخدمات الرقمية',
      description: 'خدمات التصميم، البرمجة، التسويق والمزيد',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      href: '/services',
      trending: false,
      newCount: 8,
      products: [
        { name: 'تصميم الشعارات', price: '200 ر.س', discount: '-50%' },
        { name: 'تطوير المواقع', price: '800 ر.س', discount: '-40%' },
        { name: 'إدارة وسائل التواصل', price: '300 ر.س', discount: '-60%' },
      ]
    },
    {
      id: 'tools',
      title: 'الأدوات المتخصصة',
      description: 'أدوات البرمجة، التصميم، والأعمال',
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      href: '/products?category=tools',
      trending: true,
      newCount: 15,
      products: [
        { name: 'GitHub Pro', price: '120 ر.س', discount: '-70%' },
        { name: 'Figma Professional', price: '180 ر.س', discount: '-65%' },
        { name: 'Slack Premium', price: '95 ر.س', discount: '-55%' },
      ]
    }
  ];

  const handleQuickBuy = (productName: string) => {
    toast({
      title: "تمت الإضافة للسلة",
      description: `${productName} تمت إضافته لسلة التسوق`,
    });
  };

  const handleQuickView = (categoryId: string) => {
    window.location.href = categories.find(c => c.id === categoryId)?.href || '/products';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            تصفح فئاتنا المميزة
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            اختر من بين مجموعة واسعة من المنتجات الرقمية والخدمات المتميزة بأفضل الأسعار
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-center">
            <div>
              <div className="text-2xl font-bold text-accent-gold">+1000</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">منتج متاح</div>
            </div>
            <div className="w-px h-8 bg-slate-300 dark:bg-slate-600"></div>
            <div>
              <div className="text-2xl font-bold text-accent-gold">6</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">فئة رئيسية</div>
            </div>
            <div className="w-px h-8 bg-slate-300 dark:bg-slate-600"></div>
            <div>
              <div className="text-2xl font-bold text-accent-gold">4.9★</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">تقييم العملاء</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              onMouseEnter={() => !isMobile && setHoveredCategory(category.id)}
              onMouseLeave={() => !isMobile && setHoveredCategory(null)}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {category.trending && (
                    <Badge className="bg-accent-gold text-black px-3 py-1 font-medium">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      رائج
                    </Badge>
                  )}
                  {category.newCount > 0 && (
                    <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm px-3 py-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {category.newCount} جديد
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-4 left-4 flex gap-2 transition-all duration-300 ${
                  hoveredCategory === category.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border-0"
                    onClick={() => handleQuickView(category.id)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-right">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-right">
                    {category.description}
                  </p>
                </div>

                {/* Popular Products Preview */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 justify-end">
                    <Star className="w-4 h-4 text-accent-gold" />
                    المنتجات الشائعة
                  </h4>
                  <div className="space-y-2">
                    {category.products.slice(0, 2).map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0 hover:bg-accent-gold/20"
                            onClick={() => handleQuickBuy(product.name)}
                          >
                            <ShoppingCart className="w-3 h-3" />
                          </Button>
                          <div className="text-left">
                            <span className="text-sm font-medium text-accent-gold">{product.price}</span>
                            <span className="text-xs text-green-600 dark:text-green-400 mr-1">{product.discount}</span>
                          </div>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300 truncate text-right">
                          {product.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild 
                  className="w-full bg-accent-gold hover:bg-accent-gold/90 text-black font-medium"
                >
                  <Link to={category.href}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    تصفح الفئة
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-accent-gold/10 to-accent-orange/10 rounded-2xl border border-accent-gold/20">
            <div className="text-right">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                لم تجد ما تبحث عنه؟
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                تصفح جميع منتجاتنا أو اتصل بنا للحصول على مساعدة شخصية
              </p>
              <div className="flex gap-3 justify-center">
                <Button asChild variant="outline" className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black">
                  <Link to="/contact">اتصل بنا</Link>
                </Button>
                <Button asChild className="bg-accent-gold hover:bg-accent-gold/90 text-black">
                  <Link to="/products">تصفح الكل</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;