import { ArrowRight, TrendingUp, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CategorySection = () => {
  const categories = [
    {
      id: 'apps',
      title: 'Mobile Apps',
      titleAr: 'التطبيقات المحمولة',
      description: 'Premium iOS & Android applications',
      descriptionAr: 'تطبيقات متميزة للآيفون والأندرويد',
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
      title: 'Subscriptions',
      titleAr: 'الاشتراكات',
      description: 'Netflix, Spotify, Adobe & more',
      descriptionAr: 'نتفليكس، سبوتيفاي، أدوبي والمزيد',
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
      title: 'Gaming',
      titleAr: 'الألعاب',
      description: 'Game accounts, skins & currencies',
      descriptionAr: 'حسابات الألعاب والعملات الرقمية',
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
            Explore Categories
          </h2>
          <p className="text-xl font-cairo text-accent-gold mb-2">
            استكشف الفئات
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium digital products across all categories, carefully curated for the GCC market
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                          Trending
                        </Badge>
                      )}
                      <h3 className="text-xl font-cairo font-bold mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm font-cairo opacity-90">
                        {category.titleAr}
                      </p>
                    </div>
                    <span className="bg-primary-navy-foreground/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {category.itemCount} items
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm opacity-90 mb-2">
                      {category.description}
                    </p>
                    <p className="text-xs font-cairo opacity-75">
                      {category.descriptionAr}
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
                  View All {category.title}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Recently Added Section */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
            <h3 className="text-2xl font-cairo font-bold text-foreground mb-2">
              Recently Added
            </h3>
              <p className="text-muted-foreground">Fresh arrivals this week</p>
            </div>
            <Button variant="outline">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'ChatGPT Plus 3 Months', category: 'AI Services', price: '45.00 OMR', time: '2h ago' },
              { name: 'Discord Nitro Annual', category: 'Communication', price: '28.50 OMR', time: '5h ago' },
              { name: 'Canva Pro Team License', category: 'Design Tools', price: '125.00 OMR', time: '1d ago' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                <div className="bg-accent-gold/20 p-2 rounded">
                  <Clock className="h-4 w-4 text-accent-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground text-sm">{item.price}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
