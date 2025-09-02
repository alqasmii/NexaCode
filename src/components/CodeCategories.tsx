import { Gamepad2, Tv, Smartphone, Laptop, Gift, CreditCard, Music, ShoppingBag, ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CodeCategories = () => {
  const categories = [
    {
      id: 'gaming-codes',
      name: 'Gaming Codes',
      nameAr: 'أكواد الألعاب',
      description: 'Game activation codes, DLC, and gaming currency',
      descriptionAr: 'أكواد تفعيل الألعاب، المحتوى الإضافي، وعملة الألعاب',
      icon: Gamepad2,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      count: 1234,
      featured: true,
      trending: true,
      examples: ['Steam Keys', 'Epic Games', 'Origin', 'Uplay', 'V-Bucks', 'Robux'],
      discount: '25% OFF'
    },
    {
      id: 'streaming-codes',
      name: 'Streaming Services',
      nameAr: 'خدمات البث',
      description: 'Netflix, Spotify, YouTube Premium and more',
      descriptionAr: 'نتفليكس، سبوتيفاي، يوتيوب بريميوم والمزيد',
      icon: Tv,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      count: 856,
      featured: true,
      trending: false,
      examples: ['Netflix', 'Spotify', 'Disney+', 'Hulu', 'Prime Video', 'Apple Music'],
      discount: '30% OFF'
    },
    {
      id: 'mobile-codes',
      name: 'Mobile & Apps',
      nameAr: 'الجوال والتطبيقات',
      description: 'Mobile top-ups, app store credits, and mobile subscriptions',
      descriptionAr: 'إعادة تعبئة الجوال، رصيد المتاجر، واشتراكات الجوال',
      icon: Smartphone,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      count: 678,
      featured: false,
      trending: true,
      examples: ['Google Play', 'App Store', 'Mobile Credit', 'WhatsApp Business'],
      discount: '20% OFF'
    },
    {
      id: 'software-codes',
      name: 'Software Licenses',
      nameAr: 'تراخيص البرمجيات',
      description: 'Microsoft Office, Adobe, antivirus and productivity software',
      descriptionAr: 'مايكروسوفت أوفيس، أدوبي، مكافح الفيروسات وبرمجيات الإنتاجية',
      icon: Laptop,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      count: 445,
      featured: true,
      trending: false,
      examples: ['Office 365', 'Adobe CC', 'Windows 11', 'McAfee', 'Norton', 'Canva Pro'],
      discount: '40% OFF'
    },
    {
      id: 'gift-cards',
      name: 'Gift Cards',
      nameAr: 'بطاقات الهدايا',
      description: 'Digital gift cards for popular stores and platforms',
      descriptionAr: 'بطاقات هدايا رقمية للمتاجر والمنصات الشهيرة',
      icon: Gift,
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      count: 923,
      featured: false,
      trending: true,
      examples: ['Amazon', 'iTunes', 'Google Play', 'PSN', 'Xbox Live', 'Steam'],
      discount: '15% OFF'
    },
    {
      id: 'payment-codes',
      name: 'Payment & Credits',
      nameAr: 'الدفع والرصيد',
      description: 'PayPal, Skrill, payment platform credits and vouchers',
      descriptionAr: 'باي بال، سكريل، رصيد منصات الدفع والقسائم',
      icon: CreditCard,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      count: 334,
      featured: false,
      trending: false,
      examples: ['PayPal', 'Skrill', 'Paysafecard', 'Neteller', 'Perfect Money'],
      discount: '10% OFF'
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      nameAr: 'الترفيه',
      description: 'Music, movies, books, and digital entertainment content',
      descriptionAr: 'الموسيقى، الأفلام، الكتب، ومحتوى الترفيه الرقمي',
      icon: Music,
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      count: 567,
      featured: false,
      trending: true,
      examples: ['Spotify', 'Apple Music', 'Audible', 'Kindle', 'Movies Anywhere'],
      discount: '35% OFF'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      nameAr: 'التجارة الإلكترونية',
      description: 'Online shopping vouchers and discount codes',
      descriptionAr: 'قسائم التسوق الإلكتروني وأكواد الخصم',
      icon: ShoppingBag,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      count: 789,
      featured: true,
      trending: false,
      examples: ['Amazon', 'eBay', 'AliExpress', 'Walmart', 'Target', 'Best Buy'],
      discount: '50% OFF'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-500 border-cyan-500/20">
            🏷️ Code Categories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse by <span className="text-cyan-500">Category</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            تصفح حسب الفئات
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect digital codes and vouchers organized by category. 
            From gaming to software, we have everything you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id} 
                className={`group relative overflow-hidden border-2 ${category.borderColor} ${category.bgColor} hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer`}
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
                    <p className="text-sm font-cairo text-cyan-500 mb-2">{category.nameAr}</p>
                    <p className="text-sm text-muted-foreground mb-1">{category.description}</p>
                    <p className="text-xs font-cairo text-accent-teal">{category.descriptionAr}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{category.count}</p>
                      <p className="text-xs text-muted-foreground">Available Codes</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500 text-white font-semibold">
                        {category.discount}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">Max Savings</p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Popular Items:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.examples.slice(0, 3).map((example, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                      {category.examples.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{category.examples.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Browse Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 group-hover:shadow-lg transition-all duration-300`}
                  >
                    Browse Category
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Category Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.iconColor.replace('text-', 'from-')} to-cyan-500`} />
              </Card>
            );
          })}
        </div>

        {/* Featured Categories Highlight */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gaming Spotlight */}
          <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-purple-500/20 rounded-xl">
                <Gamepad2 className="h-8 w-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Gaming Codes</h3>
                <p className="text-purple-500 font-cairo">أكواد الألعاب الأكثر طلباً</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              The most demanded category with thousands of game activation codes, 
              in-game currency, and DLC content from all major platforms.
            </p>
            <div className="flex gap-3">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Explore Gaming
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                View Offers
              </Button>
            </div>
          </Card>

          {/* Software Spotlight */}
          <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-blue-500/20 rounded-xl">
                <Laptop className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Software Licenses</h3>
                <p className="text-blue-500 font-cairo">تراخيص البرمجيات المعتمدة</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Genuine software licenses for productivity, security, and creative applications. 
              Get the tools you need at unbeatable prices.
            </p>
            <div className="flex gap-3">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Browse Software
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                View Licenses
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeCategories;
