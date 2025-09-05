import { ArrowRight, TrendingUp, Clock, Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CategorySection = () => {
  const { t, language } = useLanguage();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection for performance optimization
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
      titleKey: 'categories.apps.title',
      descriptionKey: 'categories.apps.description',
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      itemCount: '2,500+',
      trending: true,
      gradient: 'from-primary-navy to-secondary-purple',
      products: [
        { name: 'Premium Photo Editor Pro', price: '12.50 OMR', rating: 4.9 },
        { name: 'Business Analytics Suite', price: '25.00 OMR', rating: 4.8 },
        { name: 'Language Learning Plus', price: '18.75 OMR', rating: 4.7 }
      ]
    },
    {
      id: 'subscriptions',
      titleKey: 'categories.subscriptions.title',
      descriptionKey: 'categories.subscriptions.description',
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      itemCount: '150+',
      trending: false,
      gradient: 'from-secondary-purple to-accent-turquoise',
      products: [
        { name: 'Netflix Premium 1 Year', price: '45.00 OMR', rating: 5.0 },
        { name: 'Spotify Family 6 Months', price: '22.50 OMR', rating: 4.9 },
        { name: 'Adobe Creative Suite', price: '125.00 OMR', rating: 4.8 }
      ]
    },
    {
      id: 'gaming',
      titleKey: 'categories.gaming.title',
      descriptionKey: 'categories.gaming.description',
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      itemCount: '5,000+',
      trending: true,
      gradient: 'from-accent-turquoise to-accent-gold',
      products: [
        { name: 'Fortnite V-Bucks 1000', price: '8.75 OMR', rating: 4.9 },
        { name: 'PUBG UC 3200', price: '15.00 OMR', rating: 4.8 },
        { name: 'Steam Wallet 50$', price: '19.25 OMR', rating: 5.0 }
      ]
    },
    {
      id: 'codes',
      title: 'Activation Codes',
      titleAr: 'أكواد التفعيل',
      description: 'Software licenses & product keys',
      descriptionAr: 'تراخيص البرامج ومفاتيح المنتجات',
      image: "https://images.unsplash.com/photo-1558618666-fbd25c85cd64?auto=format&fit=crop&w=800&q=80",
      itemCount: '1,200+',
      trending: false,
      gradient: 'from-accent-gold to-primary-navy',
      products: [
        { name: 'Windows 11 Pro License', price: '87.50 OMR', rating: 4.9 },
        { name: 'Office 365 Business', price: '62.50 OMR', rating: 4.8 },
        { name: 'Antivirus Premium 1Y', price: '28.75 OMR', rating: 4.7 }
      ]
    },
    {
      id: 'services',
      title: 'Digital Services',
      titleAr: 'الخدمات الرقمية',
      description: 'VPN, hosting, cloud storage',
      descriptionAr: 'في بي ان، استضافة، تخزين سحابي',
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
      itemCount: '800+',
      trending: true,
      gradient: 'from-secondary-purple to-accent-gold',
      products: [
        { name: 'Premium VPN 2 Years', price: '37.50 OMR', rating: 4.9 },
        { name: 'Cloud Storage 2TB', price: '25.00 OMR', rating: 4.8 },
        { name: 'Web Hosting Premium', price: '75.00 OMR', rating: 4.7 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cairo font-bold text-foreground mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/products#${category.id}`}>
              {isMobile ? (
                // Mobile: Simple, lightweight version
                <div className="bg-card rounded-xl overflow-hidden shadow-md border">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60`}></div>
                    <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          {category.trending && (
                            <Badge className="bg-accent-gold text-accent-gold-foreground mb-1 text-xs">
                              {t('categories.trending')}
                            </Badge>
                          )}
                          <h3 className="text-lg font-cairo font-bold">
                            {t(category.titleKey)}
                          </h3>
                        </div>
                        <span className="bg-black/30 px-2 py-1 rounded text-xs">
                          {category.itemCount}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      {t(category.descriptionKey)}
                    </p>
                    <Button className="w-full" variant="outline" size="sm">
                      {t('categories.viewAll')}
                    </Button>
                  </div>
                </div>
              ) : (
                // Desktop: Full-featured version
                <Card 
                  className="group overflow-hidden hover:shadow-xl animate-slide-in-up hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`}></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-primary-navy-foreground">
                      <div className="flex justify-between items-start">
                        <div>
                          {category.trending && (
                            <Badge className="bg-accent-gold text-accent-gold-foreground mb-2">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {t('categories.trending')}
                            </Badge>
                          )}
                          <h3 className="text-xl font-cairo font-bold mb-1">
                            {t(category.titleKey)}
                          </h3>
                          <p className="text-sm font-cairo opacity-90">
                            {t(category.descriptionKey)}
                          </p>
                        </div>
                        <span className="bg-primary-navy-foreground/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                          {category.itemCount} {t('categories.items')}
                        </span>
                      </div>
                      
                      <div>
                        <p className="text-sm opacity-90 mb-2">
                          {t(category.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category Details */}
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      {category.products.slice(0, 2).map((product, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-foreground truncate mr-2">{product.name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-accent-gold text-accent-gold mr-1" />
                              <span className="text-xs text-muted-foreground">{product.rating}</span>
                            </div>
                            <span className="font-semibold text-foreground">{product.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full group-hover:bg-accent transition-colors"
                      variant="outline"
                    >
                      {hoveredCategory === category.id ? (
                        <>
                          <Eye className="h-4 w-4 mr-2" />
                          {t('categories.explore')} {t(category.titleKey)}
                        </>
                      ) : (
                        <>
                          {language === 'ar' ? (
                            <>
                              <ArrowRight className="h-4 w-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                              {t('categories.viewAll')} {t(category.titleKey)}
                            </>
                          ) : (
                            <>
                              {t('categories.viewAll')} {t(category.titleKey)}
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              )}
            </Link>
          ))}
        </div>

        {/* Recently Added Section */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
            <h3 className="text-2xl font-cairo font-bold text-foreground mb-2">
              {t('categories.recentlyAdded')}
            </h3>
              <p className="text-muted-foreground">{t('categories.freshArrivals')}</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/apps?filter=recent">
                {language === 'ar' ? (
                  <>
                    <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                    {t('categories.viewAll')}
                  </>
                ) : (
                  <>
                    {t('categories.viewAll')}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'ChatGPT Plus 3 Months', category: 'AI Services', price: '45.00 OMR', time: '2h ago', id: 'chatgpt-plus' },
              { name: 'Discord Nitro Annual', category: 'Communication', price: '28.50 OMR', time: '5h ago', id: 'discord-nitro' },
              { name: 'Canva Pro Team License', category: 'Design Tools', price: '125.00 OMR', time: '1d ago', id: 'canva-pro' }
            ].map((item, index) => (
              <Link key={index} to={`/product/${item.id}`}>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-300 cursor-pointer hover:scale-105 group">
                  <div className="bg-accent-gold/20 p-2 rounded group-hover:bg-accent-gold/30 transition-colors">
                    <Clock className="h-4 w-4 text-accent-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-accent-gold transition-colors">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground text-sm">{item.price}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={(e) => {
                        e.preventDefault();
                        toast({
                          title: "Added to Cart! 🛒",
                          description: `${item.name} has been added to your cart.`,
                          duration: 3000,
                        });
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
